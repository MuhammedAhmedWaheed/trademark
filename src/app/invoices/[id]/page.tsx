import { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  findInvoiceById,
  markInvoicePaid,
} from "@/lib/invoiceStore";
import { getStripeClient } from "@/lib/stripe";

import InvoicePayment from "./InvoicePayment";

interface InvoicePageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: InvoicePageProps): Promise<Metadata> {
  const { id } = await params;
  const invoice = await findInvoiceById(id);
  if (!invoice) {
    return {
      title: "Invoice not found",
    };
  }

  return {
    title: `Invoice | ${invoice.clientName}`,
    description: `Secure payment page for ${invoice.clientName}`,
  };
}

export default async function InvoicePage({ params }: InvoicePageProps) {
  const { id } = await params;
  const invoice = await findInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  let paymentStatus = invoice.status;

  if (invoice.stripePaymentIntentId) {
    try {
      const stripe = getStripeClient();
      const paymentIntent = await stripe.paymentIntents.retrieve(
        invoice.stripePaymentIntentId,
      );

      if (paymentIntent.status === "succeeded" && invoice.status !== "paid") {
        await markInvoicePaid(invoice.id);
        paymentStatus = "paid";
      } else if (paymentIntent.status !== "succeeded") {
        paymentStatus = "unpaid";
      }
    } catch (error) {
      console.error("Unable to refresh invoice status from Stripe", error);
    }
  }

  const isPaid = paymentStatus === "paid";
  const items = invoice.items ?? [];
  const calculatedTotal = items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0,
  );
  const displayTotal =
    items.length && calculatedTotal > 0 ? calculatedTotal : invoice.amount;
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const issuedOn = dateFormatter.format(new Date(invoice.createdAt));
  const lastUpdated = dateFormatter.format(new Date(invoice.updatedAt));
  const currencyFormatter = (value: number) =>
    value.toLocaleString(undefined, {
      style: "currency",
      currency: invoice.currency.toUpperCase(),
    });

  return (
    <main className="min-h-screen bg-slate-950/[0.02] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-[0_40px_120px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/5 backdrop-blur">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-8 py-10 text-white sm:px-12 sm:py-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  Invoice
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                  #{invoice.id.slice(0, 8)}
                </h1>
                <p className="mt-2 text-sm text-white/75">
                  Issued on {issuedOn}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-xs font-semibold tracking-wide ${
                    isPaid
                      ? "bg-emerald-500/20 text-emerald-100"
                      : "bg-amber-400/10 text-amber-100"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isPaid ? "bg-emerald-300" : "bg-amber-300"
                    }`}
                  />
                  {isPaid ? "Payment complete" : "Awaiting payment"}
                </span>
                <p className="mt-4 text-sm text-white/80">
                  Billed to{" "}
                  <span className="font-semibold text-white">
                    {invoice.clientName}
                  </span>
                  <br />
                  {invoice.clientEmail}
                </p>
                <p className="mt-6 text-4xl font-semibold text-white">
                  {currencyFormatter(displayTotal)}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 px-6 py-10 sm:px-12">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Client
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {invoice.clientName}
                </p>
                <p className="text-sm text-slate-500">{invoice.clientEmail}</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Updated
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {lastUpdated}
                </p>
                <p className="text-sm text-slate-500">
                  Total due {currencyFormatter(displayTotal)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </p>
                <p
                  className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
                    isPaid
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isPaid ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  {isPaid ? "Paid in full" : "Pending payment"}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {isPaid ? "Receipt on file" : "Secure Stripe checkout"}
                </p>
              </div>
            </div>

            {invoice.description ? (
              <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Project / scope
                </p>
                <p className="mt-3 text-base text-slate-700">
                  {invoice.description}
                </p>
              </div>
            ) : null}

            {items.length ? (
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ring-1 ring-slate-900/5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      Invoice items
                    </p>
                    <p className="text-sm text-slate-500">
                      Detailed breakdown of the services billed.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {items.length} item{items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-100 text-sm">
                    <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <tr>
                        <th className="px-6 py-3">Item</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Unit price</th>
                        <th className="px-6 py-3 text-right">Line total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/60">
                          <td className="px-6 py-4 text-base font-medium text-slate-900">
                            {item.description}
                          </td>
                          <td className="px-6 py-4">{item.quantity}</td>
                          <td className="px-6 py-4 text-slate-600">
                            {currencyFormatter(item.unitPrice)}
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-slate-900">
                            {currencyFormatter(item.quantity * item.unitPrice)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 bg-slate-50 px-6 py-4 text-base font-semibold text-slate-900">
                  <span>Total due</span>
                  <span>{currencyFormatter(displayTotal)}</span>
                </div>
              </div>
            ) : null}

            {isPaid ? (
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-sm text-emerald-900">
                Payment received. A receipt has been emailed to {invoice.clientEmail}.
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Secure payment
                    </p>
                    <p className="text-sm text-slate-500">
                      Pay the outstanding balance via Stripe.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Amount due
                    </p>
                    <p className="text-2xl font-semibold text-slate-900">
                      {currencyFormatter(displayTotal)}
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <InvoicePayment
                    invoiceId={invoice.id}
                    amount={displayTotal}
                    currency={invoice.currency}
                    clientName={invoice.clientName}
                  />
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 text-sm text-slate-500">
              Need help? Reply to your invoice email or contact your account
              manager and include Invoice #{invoice.id.slice(0, 8)} in the
              subject line.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
