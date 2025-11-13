import { NextResponse } from "next/server";

import {
  findInvoiceById,
  markInvoicePaid,
} from "@/lib/invoiceStore";
import { getStripeClient } from "@/lib/stripe";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Invoice id is required." }, { status: 400 });
  }

  try {
    const invoice = await findInvoiceById(id);
    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404 });
    }

    if (!invoice.stripePaymentIntentId) {
      return NextResponse.json(
        { error: "Payment intent not configured for this invoice." },
        { status: 400 },
      );
    }

    const stripe = getStripeClient();
    const paymentIntent = await stripe.paymentIntents.retrieve(
      invoice.stripePaymentIntentId,
    );

    if (paymentIntent.status === "succeeded" && invoice.status !== "paid") {
      await markInvoicePaid(invoice.id);
    }

    if (!paymentIntent.client_secret) {
      return NextResponse.json(
        { error: "Payment intent client secret unavailable." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });
  } catch (error) {
    console.error("Failed to load payment intent", error);
    return NextResponse.json(
      { error: "Unable to load Stripe payment intent." },
      { status: 500 },
    );
  }
}
