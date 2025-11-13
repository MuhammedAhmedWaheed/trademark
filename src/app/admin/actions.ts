"use server";

import crypto from "node:crypto";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  createInvoiceEntry,
  deleteInvoiceById,
  InvoiceInput,
  listInvoices,
} from "@/lib/invoiceStore";
import { getStripeClient } from "@/lib/stripe";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_VALUE,
} from "./constants";

export type ActionState = {
  success: boolean;
  message?: string;
  invoiceId?: string;
};

export async function login(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const password = (formData.get("password") ?? "").toString();
  if (!password) {
    return { success: false, message: "Password is required." };
  }

  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    return {
      success: false,
      message:
        "ADMIN_PASSWORD is not configured. Add it to your environment variables.",
    };
  }

  if (password !== expectedPassword) {
    return { success: false, message: "Invalid password." };
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: ADMIN_SESSION_COOKIE,
    value: ADMIN_SESSION_VALUE,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 12, // 12 hours
  });

  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin");
}

export async function createInvoice(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (sessionValue !== ADMIN_SESSION_VALUE) {
    return { success: false, message: "Unauthorized." };
  }

  const clientName = formData.get("clientName")?.toString().trim() ?? "";
  const clientEmail = formData.get("clientEmail")?.toString().trim() ?? "";
  const description = formData.get("description")?.toString().trim() ?? "";
  const currency =
    formData.get("currency")?.toString().trim().toLowerCase() ?? "usd";
  const itemCount = Number(formData.get("item-count") ?? 0);

  if (!clientName || !clientEmail) {
    return {
      success: false,
      message: "Client name and email are required.",
    };
  }

  if (!Number.isInteger(itemCount) || itemCount <= 0) {
    return {
      success: false,
      message: "Add at least one line item to create an invoice.",
    };
  }

  const items: InvoiceInput["items"] = [];

  for (let index = 0; index < itemCount; index += 1) {
    const descriptionValue =
      formData.get(`item-description-${index}`)?.toString().trim() ?? "";
    const quantityRaw = formData.get(`item-quantity-${index}`)?.toString() ?? "";
    const unitPriceRaw =
      formData.get(`item-unitPrice-${index}`)?.toString() ?? "";

    const quantity = Number(quantityRaw);
    const unitPrice = Number(unitPriceRaw);

    if (!descriptionValue) {
      return {
        success: false,
        message: "Each line item needs a description.",
      };
    }

    if (!Number.isFinite(quantity) || quantity <= 0) {
      return {
        success: false,
        message: "Item quantities must be positive numbers.",
      };
    }

    if (!Number.isFinite(unitPrice) || unitPrice <= 0) {
      return {
        success: false,
        message: "Item prices must be positive numbers.",
      };
    }

    items.push({
      description: descriptionValue,
      quantity,
      unitPrice,
    });
  }

  if (!items.length) {
    return {
      success: false,
      message: "Add at least one valid line item before submitting.",
    };
  }

  const amountInMinorUnits = items.reduce((total, item) => {
    const cents = Math.round(item.quantity * item.unitPrice * 100);
    return total + cents;
  }, 0);

  if (!Number.isInteger(amountInMinorUnits) || amountInMinorUnits <= 0) {
    return {
      success: false,
      message: "Unable to calculate invoice total. Check the line items.",
    };
  }

  const amount = amountInMinorUnits / 100;

  const invoiceInput: InvoiceInput = {
    clientName,
    clientEmail,
    amount,
    description,
    currency,
    items,
  };

  try {
    const stripe = getStripeClient();
    const invoiceId = crypto.randomUUID();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInMinorUnits,
      currency,
      receipt_email: clientEmail,
      metadata: {
        invoiceId,
        clientName,
        clientEmail,
      },
      automatic_payment_methods: { enabled: true },
    });

    const invoice = await createInvoiceEntry(invoiceInput, {
      id: invoiceId,
      stripePaymentIntentId: paymentIntent.id,
    });
    await revalidatePath("/admin");
    return {
      success: true,
      message: "Invoice created successfully.",
      invoiceId: invoice.id,
    };
  } catch (error) {
    console.error("Failed to create invoice", error);
    const message =
      error instanceof Error && error.message.includes("STRIPE_SECRET_KEY")
        ? "Stripe secret key missing. Add STRIPE_SECRET_KEY to your environment."
        : "An unexpected error occurred while creating the invoice.";
    return {
      success: false,
      message,
    };
  }
}

export async function fetchInvoices() {
  return listInvoices();
}

export async function deleteInvoice(
  formData: FormData,
): Promise<{ success: boolean; message?: string }> {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (sessionValue !== ADMIN_SESSION_VALUE) {
    return { success: false, message: "Unauthorized." };
  }

  const invoiceId = formData.get("invoiceId")?.toString().trim() ?? "";
  if (!invoiceId) {
    return { success: false, message: "Invoice id missing." };
  }

  try {
    await deleteInvoiceById(invoiceId);
    await revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete invoice", error);
    return { success: false, message: "Could not delete invoice." };
  }
}
