import Link from "next/link";

import type { Invoice } from "@/lib/invoiceStore";
import { deleteInvoice } from "./actions";

interface InvoiceTableProps {
  invoices: Invoice[];
}

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  if (!invoices.length) {
    return (
      <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-12 text-center text-sm text-white/70">
        No invoices yet. Create one to generate a client payment link.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {invoices.map((invoice) => {
        const statusBadge =
          invoice.status === "paid"
            ? "bg-emerald-400/15 text-emerald-200 border border-emerald-400/30"
            : "bg-amber-300/15 text-amber-100 border border-amber-200/30";

        return (
          <div
            key={invoice.id}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(5,1,18,0.35)] backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/5 via-transparent to-transparent" />
            <div className="relative flex flex-wrap items-start justify-between gap-6 text-white">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/50">
                  Client
                </p>
                <p className="text-lg font-semibold">{invoice.clientName}</p>
                <p className="text-sm text-white/60">{invoice.clientEmail}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wide text-white/50">
                  Amount
                </p>
                <p className="text-2xl font-semibold">
                  {invoice.amount.toLocaleString(undefined, {
                    style: "currency",
                    currency: invoice.currency.toUpperCase(),
                  })}
                </p>
                {invoice.items?.length ? (
                  <p className="text-xs text-white/60">
                    {invoice.items.length} line item
                    {invoice.items.length > 1 ? "s" : ""}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadge}`}>
                  {invoice.status === "paid" ? "Paid" : "Awaiting payment"}
                </span>
                <span>
                  Created {new Date(invoice.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="text-sm font-semibold text-[#f5dfff] underline-offset-4 hover:underline"
                >
                  View invoice
                </Link>
                <form action={deleteInvoice}>
                  <input type="hidden" name="invoiceId" value={invoice.id} />
                  <button
                    type="submit"
                    className="text-xs font-semibold uppercase tracking-wide text-red-200 underline-offset-4 hover:text-red-100"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
