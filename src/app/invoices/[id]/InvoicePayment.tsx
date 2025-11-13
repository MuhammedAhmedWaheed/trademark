"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { PaymentIntent } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

interface InvoicePaymentProps {
  invoiceId: string;
  amount: number;
  currency: string;
  clientName: string;
}

type StripeStatus =
  | "requires_payment_method"
  | "requires_confirmation"
  | "requires_action"
  | "processing"
  | "requires_capture"
  | "canceled"
  | "succeeded"
  | "requires_source"
  | "requires_source_action"
  | string;

function statusCopy(status: StripeStatus) {
  switch (status) {
    case "succeeded":
      return "Payment completed.";
    case "processing":
      return "Payment is processing. Refresh this page shortly.";
    case "requires_payment_method":
      return "Payment failed. Try another payment method.";
    case "requires_action":
      return "Additional authentication is required to complete payment.";
    default:
      return "Complete your payment using the secure form below.";
  }
}

function PaymentForm({
  invoiceId,
  onPaymentFinished,
}: {
  invoiceId: string;
  onPaymentFinished: (status: StripeStatus) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }

      setIsSubmitting(true);
      setMessage(null);

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/invoices/${invoiceId}?redirect=1`,
        },
      });

      if ("error" in result && result.error) {
        setMessage(result.error.message ?? "Payment failed. Please try again.");
        onPaymentFinished(
          result.error.type === "card_error"
            ? "requires_payment_method"
            : "requires_action",
        );
        setIsSubmitting(false);
        return;
      }

      const paymentIntent =
        ("paymentIntent" in result ? result.paymentIntent : undefined) as
          | PaymentIntent
          | undefined;
      if (!paymentIntent) {
        setIsSubmitting(false);
        return;
      }
      onPaymentFinished(paymentIntent.status);
      if (paymentIntent.status === "succeeded") {
        setMessage("Payment successful. Thank you!");
      } else if (paymentIntent.status === "processing") {
        setMessage("Payment is processing. Refresh this page in a moment.");
      }

      setIsSubmitting(false);
    },
    [stripe, elements, invoiceId, onPaymentFinished],
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
        <PaymentElement options={{ layout: "tabs" }} />
      </div>
      <button
        type="submit"
        disabled={!stripe || isSubmitting}
        className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Processing..." : "Pay with Stripe"}
      </button>
      {message ? (
        <div
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
          aria-live="polite"
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

export default function InvoicePayment({
  invoiceId,
  amount,
  currency,
  clientName,
}: InvoicePaymentProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [status, setStatus] = useState<StripeStatus>("processing");
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchIntent = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch(`/api/invoices/${invoiceId}/intent?ts=${Date.now()}`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Unable to load payment intent.");
      }

      setClientSecret(data.clientSecret);
      setStatus(data.status ?? "requires_payment_method");
    } catch (fetchError) {
      console.error(fetchError);
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Unable to load Stripe payment details.",
      );
    }
  }, [invoiceId]);

  useEffect(() => {
    fetchIntent();
  }, [fetchIntent, refreshKey]);

  const handlePaymentFinished = useCallback(
    (currentStatus: StripeStatus) => {
      setStatus(currentStatus);
      setRefreshKey((prev) => prev + 1);
    },
    [],
  );

  const options = useMemo(
    () => ({
      clientSecret: clientSecret ?? undefined,
      appearance: {
        theme: "stripe" as const,
      },
    }),
    [clientSecret],
  );

  if (!publishableKey || !stripePromise) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 shadow-sm">
        Stripe publishable key missing. Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to enable this payment form.
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          {error}
        </div>
        <button
          type="button"
          onClick={() => setRefreshKey((prev) => prev + 1)}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Retry loading payment form
        </button>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
        Preparing secure payment form...
      </div>
    );
  }

  if (status === "succeeded") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
        Payment received. Thank you!
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
        <p className="font-medium text-slate-900">
          {amount.toLocaleString(undefined, {
            style: "currency",
            currency: currency.toUpperCase(),
          })}{" "}
          due
        </p>
        <p className="mt-1 text-slate-600">{statusCopy(status)}</p>
      </div>
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm
          invoiceId={invoiceId}
          onPaymentFinished={handlePaymentFinished}
        />
      </Elements>
    </div>
  );
}
