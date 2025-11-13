import crypto from "node:crypto";

import { getSupabaseServerClient } from "./supabaseServer";

export type InvoiceStatus = "unpaid" | "paid";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  createdAt: string;
}

export interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  currency: string;
  description: string;
  status: InvoiceStatus;
  stripePaymentIntentId?: string;
  stripePaymentLinkUrl?: string;
  createdAt: string;
  updatedAt: string;
  items: InvoiceItem[];
}

export interface InvoiceItemInput {
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface InvoiceInput {
  clientName: string;
  clientEmail: string;
  amount: number;
  currency?: string;
  description?: string;
  items: InvoiceItemInput[];
}

type InvoiceRow = {
  id: string;
  client_name: string;
  client_email: string;
  amount: number | string;
  currency: string;
  description: string;
  status: InvoiceStatus;
  stripe_payment_intent_id?: string | null;
  stripe_payment_link_url?: string | null;
  created_at: string;
  updated_at: string;
};

type StoredLinkPayload = {
  link?: string | null;
  items?: StoredInvoiceItem[];
};

type StoredInvoiceItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  createdAt: string;
};

function parseLinkPayload(raw: string | null | undefined): {
  link?: string | null;
  items: StoredInvoiceItem[];
  rawString?: string | null;
} {
  if (!raw) {
    return { link: undefined, items: [] };
  }
  try {
    const parsed = JSON.parse(raw) as StoredLinkPayload;
    const parsedItems = Array.isArray(parsed.items)
      ? parsed.items.map((item) => ({
          id: item.id,
          description: item.description,
          quantity: Number(item.quantity),
          unitPrice: Number(item.unitPrice),
          createdAt: item.createdAt,
        }))
      : [];
    return { link: parsed.link, items: parsedItems };
  } catch {
    // Legacy plain string
    return { link: raw, items: [], rawString: raw };
  }
}

function serializeLinkPayload({
  link,
  items,
}: {
  link?: string | null;
  items: StoredInvoiceItem[];
}): string {
  return JSON.stringify({
    link: link ?? null,
    items,
  });
}

const invoiceSelect = `
  id,
  client_name,
  client_email,
  amount,
  currency,
  description,
  status,
  stripe_payment_intent_id,
  stripe_payment_link_url,
  created_at,
  updated_at
`;

function mapInvoice(row: InvoiceRow): Invoice {
  const parsedLink = parseLinkPayload(row.stripe_payment_link_url);
  const items = parsedLink.items.map((item) => ({
    id: item.id,
    description: item.description,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    createdAt: item.createdAt,
  }));

  return {
    id: row.id,
    clientName: row.client_name,
    clientEmail: row.client_email,
    amount: Number(row.amount),
    currency: row.currency,
    description: row.description,
    status: row.status,
    stripePaymentIntentId: row.stripe_payment_intent_id ?? undefined,
    stripePaymentLinkUrl:
      typeof parsedLink.link === "string" ? parsedLink.link : undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    items,
  };
}

export async function listInvoices(): Promise<Invoice[]> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("invoices")
    .select(invoiceSelect)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to load invoices: ${error.message}`);
  }

  return (data ?? []).map(mapInvoice);
}

export async function findInvoiceById(id: string): Promise<Invoice | undefined> {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("invoices")
    .select(invoiceSelect)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to find invoice: ${error.message}`);
  }

  return data ? mapInvoice(data) : undefined;
}

export async function createInvoiceEntry(
  input: InvoiceInput,
  options?: {
    id?: string;
    stripePaymentIntentId?: string;
    stripePaymentLinkUrl?: string;
    status?: InvoiceStatus;
  },
): Promise<Invoice> {
  const supabase = getSupabaseServerClient();
  const invoicePayload: {
    id?: string;
    client_name: string;
    client_email: string;
    amount: number;
    currency: string;
    description: string;
    status: InvoiceStatus;
    stripe_payment_intent_id: string | null;
    stripe_payment_link_url: string | null;
  } = {
    client_name: input.clientName,
    client_email: input.clientEmail,
    amount: input.amount,
    currency: input.currency ?? "usd",
    description: input.description ?? "",
    status: options?.status ?? "unpaid",
    stripe_payment_intent_id: options?.stripePaymentIntentId ?? null,
  };

  if (options?.id) {
    invoicePayload.id = options.id;
  }

  const storedItems: StoredInvoiceItem[] = input.items.map((item) => ({
    id: crypto.randomUUID(),
    description: item.description,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    createdAt: new Date().toISOString(),
  }));

  invoicePayload.stripe_payment_link_url = serializeLinkPayload({
    link: options?.stripePaymentLinkUrl ?? null,
    items: storedItems,
  });

  const { data: invoiceRow, error: invoiceError } = await supabase
    .from("invoices")
    .insert(invoicePayload)
    .select(
      `
      id,
      client_name,
      client_email,
      amount,
      currency,
      description,
      status,
      stripe_payment_intent_id,
      stripe_payment_link_url,
      created_at,
      updated_at
    `,
    )
    .single();

  if (invoiceError || !invoiceRow) {
    throw new Error(
      invoiceError?.message ?? "Unable to create invoice record.",
    );
  }

  const invoiceId = invoiceRow.id;

  const invoice = await findInvoiceById(invoiceId);
  if (!invoice) {
    throw new Error("Invoice not found after creation.");
  }

  return invoice;
}

export async function attachStripeDetails(
  id: string,
  details: { paymentIntentId?: string; paymentLinkUrl?: string },
): Promise<Invoice | undefined> {
  const supabase = getSupabaseServerClient();
  const existing = await findInvoiceById(id);
  if (!existing) {
    return undefined;
  }

  const payloadData = {
    link: details.paymentLinkUrl ?? existing.stripePaymentLinkUrl ?? null,
    items: existing.items.map((item) => ({
      id: item.id,
      description: item.description,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      createdAt: item.createdAt,
    })),
  };

  const updatePayload: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
    stripe_payment_link_url: serializeLinkPayload(payloadData),
  };

  if (details.paymentIntentId) {
    updatePayload.stripe_payment_intent_id = details.paymentIntentId;
  }

  const { error } = await supabase
    .from("invoices")
    .update(updatePayload)
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to attach Stripe details: ${error.message}`);
  }

  return findInvoiceById(id);
}

export async function markInvoicePaid(id: string): Promise<Invoice | undefined> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("invoices")
    .update({ status: "paid", updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to mark invoice paid: ${error.message}`);
  }

  return findInvoiceById(id);
}

export async function deleteInvoiceById(id: string): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("invoices").delete().eq("id", id);
  if (error) {
    throw new Error(`Failed to delete invoice: ${error.message}`);
  }
}
