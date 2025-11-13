import { cookies } from "next/headers";

import { listInvoices } from "@/lib/invoiceStore";

import AdminLoginForm from "./AdminLoginForm";
import InvoiceCreator from "./InvoiceCreator";
import InvoiceTable from "./InvoiceTable";
import { logout } from "./actions";
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE } from "./constants";

function formatCurrency(amount: number, currency = "usd") {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: 2,
  });
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const isAuthenticated = sessionCookie === ADMIN_SESSION_VALUE;

  if (!isAuthenticated) {
    return (
      <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#04000f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060015] via-[#0d0227] to-[#1c073d]" />
        <div className="absolute -top-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#b47bff]/30 blur-[140px]" />
        <div className="relative w-full max-w-md px-4 py-16">
          <AdminLoginForm />
        </div>
      </main>
    );
  }

  const invoices = await listInvoices();
  const paidInvoices = invoices.filter((invoice) => invoice.status === "paid");
  const openInvoices = invoices.filter(
    (invoice) => invoice.status === "unpaid",
  );

  const collectedTotal = paidInvoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0,
  );
  const outstandingTotal = openInvoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0,
  );

  const highlightInvoice = openInvoices[0] ?? invoices[0];

  const stats = [
    {
      label: "Outstanding",
      value: formatCurrency(outstandingTotal),
      sublabel: `${openInvoices.length} open invoice${
        openInvoices.length === 1 ? "" : "s"
      }`,
    },
    {
      label: "Collected",
      value: formatCurrency(collectedTotal),
      sublabel: `${paidInvoices.length} payment${
        paidInvoices.length === 1 ? "" : "s"
      } posted`,
    },
    {
      label: "Total invoices",
      value: invoices.length.toString().padStart(2, "0"),
      sublabel: highlightInvoice
        ? `Latest: ${new Date(highlightInvoice.createdAt).toLocaleDateString()}`
        : "Create your first invoice",
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#03000d]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050016] via-[#090424] to-[#160537]" />
      <div className="pointer-events-none absolute -top-40 left-16 h-72 w-72 rounded-full bg-[#9f68ff]/30 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#6a4bff]/20 blur-[180px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 text-white sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_120px_rgba(4,0,20,0.65)] backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Legal Mark Command Deck
              </p>
              <h1 className="text-3xl font-semibold">VIP Invoice Dashboard</h1>
              <p className="text-sm text-white/70">
                Issue boutique invoices, monitor live payment states, and share
                Stripe-secured links without ever leaving this suite.
              </p>
            </div>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Sign out
              </button>
            </form>
          </div>
          {highlightInvoice ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/80">
              <p className="text-xs uppercase tracking-wide text-white/50">
                Spotlight
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-base">
                <span className="font-semibold">
                  {highlightInvoice.clientName}
                </span>
                <span className="text-white/60">
                  {formatCurrency(
                    highlightInvoice.amount,
                    highlightInvoice.currency,
                  )}
                </span>
                <span className="text-white/60">
                  {new Date(highlightInvoice.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          ) : null}
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_45px_rgba(4,0,20,0.35)] backdrop-blur"
            >
              <p className="text-xs uppercase tracking-wide text-white/50">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-white/60">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Activity
              </p>
              <h2 className="text-xl font-semibold">Recent invoices</h2>
            </div>
            <InvoiceTable invoices={invoices} />
          </section>
          <section>
            <InvoiceCreator />
          </section>
        </div>
      </div>
    </main>
  );
}
