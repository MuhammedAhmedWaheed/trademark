"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

import { createInvoice, type ActionState } from "./actions";

const initialState: ActionState = { success: false };

type LineItem = {
  id: string;
  description: string;
  quantity: string;
  unitPrice: string;
};

const buildLineItem = (): LineItem => ({
  id:
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `item-${Math.random().toString(36).slice(2, 10)}`,
  description: "",
  quantity: "1",
  unitPrice: "",
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#f0d2ff] via-[#c796ff] to-[#925bff] px-4 py-3 text-sm font-semibold text-[#1b0f29] shadow-lg shadow-[#6c3bd1]/40 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={pending}
    >
      {pending ? "Creating..." : "Create Invoice"}
    </button>
  );
}

export default function InvoiceCreator() {
  const [state, formAction] = useActionState(createInvoice, initialState);
  const [items, setItems] = useState<LineItem[]>(() => [buildLineItem()]);
  const [currencyPreview, setCurrencyPreview] = useState("usd");

  useEffect(() => {
    if (state?.success) {
      const form = document.getElementById("invoice-form") as HTMLFormElement | null;
      form?.reset();
      setItems([buildLineItem()]);
      setCurrencyPreview("usd");
    }
  }, [state?.success]);

  const lineItemTotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const quantity = Number(item.quantity);
      const unitPrice = Number(item.unitPrice);
      if (Number.isNaN(quantity) || Number.isNaN(unitPrice)) {
        return sum;
      }
      return sum + quantity * unitPrice;
    }, 0);
  }, [items]);

  const invoicePath = useMemo(() => {
    if (!state?.invoiceId) return "";
    return `/invoices/${state.invoiceId}`;
  }, [state?.invoiceId]);

  const handleItemChange = (
    id: string,
    field: keyof Omit<LineItem, "id">,
    value: string,
  ) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const addItem = () => {
    setItems((prev) => [...prev, buildLineItem()]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      if (prev.length === 1) {
        return prev;
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_60px_rgba(5,1,18,0.45)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      <div className="relative space-y-6 text-white">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            New Request
          </p>
          <h2 className="text-2xl font-semibold">Create VIP Invoice</h2>
          <p className="text-sm text-white/70">
            Generate a Stripe-backed payment link. Totals update automatically from the curated line items.
          </p>
        </div>
        <form
          id="invoice-form"
          action={formAction}
          className="grid grid-cols-1 gap-5"
        >
          <input type="hidden" name="item-count" value={items.length} />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="clientName"
                className="block text-xs font-semibold uppercase tracking-wide text-white/60"
              >
                Client Name
              </label>
              <input
                id="clientName"
                name="clientName"
                required
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#c49bff] focus:outline-none focus:ring-2 focus:ring-[#c49bff]/30"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="clientEmail"
                className="block text-xs font-semibold uppercase tracking-wide text-white/60"
              >
                Client Email
              </label>
              <input
                id="clientEmail"
                name="clientEmail"
                type="email"
                required
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#c49bff] focus:outline-none focus:ring-2 focus:ring-[#c49bff]/30"
                placeholder="client@email.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="currency"
              className="block text-xs font-semibold uppercase tracking-wide text-white/60"
            >
              Currency
            </label>
            <input
              id="currency"
              name="currency"
              defaultValue="usd"
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm uppercase text-white placeholder:text-white/60 focus:border-[#c49bff] focus:outline-none focus:ring-2 focus:ring-[#c49bff]/30"
              placeholder="usd"
              onChange={(event) => setCurrencyPreview(event.target.value.toLowerCase() || "usd")}
            />
          </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-white/60">
              Line Items
            </label>
            <p className="text-xs text-white/60">
              Showcase every deliverable with quantity, unit price, and premium descriptors.
            </p>
          </div>

          <div className="space-y-5">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-tr from-[#18052c]/80 via-[#0f031b]/80 to-transparent p-5 shadow-[0_25px_60px_rgba(5,0,20,0.45)] backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Item {String(index + 1).padStart(2, "0")}
                  </div>
                  {items.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-red-300/50 bg-red-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-200 transition hover:bg-red-300/20"
                    >
                      Remove
                    </button>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Primary item
                    </span>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-6 space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                      Item description
                    </label>
                    <input
                      name={`item-description-${index}`}
                      required
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#d3b2ff] focus:outline-none focus:ring-2 focus:ring-[#d3b2ff]/40"
                      placeholder="Trademark filing package"
                      value={item.description}
                      onChange={(event) =>
                        handleItemChange(item.id, "description", event.target.value)
                      }
                    />
                  </div>
                  <div className="md:col-span-3 space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                      Quantity
                    </label>
                    <input
                      name={`item-quantity-${index}`}
                      type="number"
                      min={1}
                      step="1"
                      required
                      className="no-spinner w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#d3b2ff] focus:outline-none focus:ring-2 focus:ring-[#d3b2ff]/40"
                      value={item.quantity}
                      onChange={(event) =>
                        handleItemChange(item.id, "quantity", event.target.value)
                      }
                    />
                  </div>
                  <div className="md:col-span-3 space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-white/50">
                      Unit price
                    </label>
                    <input
                      name={`item-unitPrice-${index}`}
                      type="number"
                      min={0.01}
                      step="0.01"
                      required
                      className="no-spinner w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#d3b2ff] focus:outline-none focus:ring-2 focus:ring-[#d3b2ff]/40"
                      value={item.unitPrice}
                      onChange={(event) =>
                        handleItemChange(item.id, "unitPrice", event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        <div>
          <button
            type="button"
            onClick={addItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            <span className="text-base">+</span> Add another item
          </button>
        </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="description"
            className="block text-xs font-semibold uppercase tracking-wide text-white/60"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#c49bff] focus:outline-none focus:ring-2 focus:ring-[#c49bff]/30"
            placeholder="Add optional invoice notes"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white">
          <div className="flex items-center justify-between">
            <span className="text-white/70">Estimated total</span>
            <span className="text-xl font-semibold text-white">
              {lineItemTotal.toLocaleString(undefined, {
                style: "currency",
                currency: (currencyPreview || "usd").toUpperCase(),
              })}
            </span>
          </div>
          <p className="mt-1 text-xs text-white/50">
            Final totals are recalculated server-side before Stripe processes payment.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <span>Stripe keys must be configured before issuing VIP invoices.</span>
          <SubmitButton />
        </div>
      </form>

      {state?.message ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            state.success
              ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-100"
              : "border-red-400/40 bg-red-400/10 text-red-100"
          }`}
        >
          {state.message}
          {state.success && invoicePath ? (
            <div className="pt-2 text-xs text-white/70">
              Share this link with the client:{" "}
              <Link
                href={invoicePath}
                className="font-semibold text-[#f5dfff] underline"
              >
                {invoicePath}
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
      </div>
    </div>
  );
}
