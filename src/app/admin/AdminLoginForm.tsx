"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { login, type ActionState } from "./actions";

const initialState: ActionState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full rounded-2xl bg-gradient-to-r from-[#cfa7ff] via-[#b47bff] to-[#8b5bff] px-4 py-3 text-sm font-semibold text-[#1c0f2d] shadow-lg shadow-[#5f3ab2]/40 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Checking..." : "Login"}
    </button>
  );
}

export default function AdminLoginForm() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(5,2,23,0.65)] backdrop-blur">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#b47bff]/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />
      <div className="relative space-y-6 text-white">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Legal Mark Experts
          </p>
          <h1 className="text-3xl font-semibold">VIP Admin Suite</h1>
          <p className="text-sm text-white/70">
            Enter the secure key to unlock invoices, Stripe links, and status reports.
          </p>
        </div>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-xs font-semibold uppercase tracking-wide text-white/70"
            >
              Access Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#c49bff] focus:outline-none focus:ring-2 focus:ring-[#c49bff]/40"
              placeholder="Enter admin password"
            />
          </div>
          <SubmitButton />
        </form>
        {state?.message ? (
          <p className="text-center text-sm text-red-300">{state.message}</p>
        ) : (
          <p className="text-center text-xs text-white/50">
            Need help? Contact the Legal Mark support desk.
          </p>
        )}
      </div>
    </div>
  );
}
