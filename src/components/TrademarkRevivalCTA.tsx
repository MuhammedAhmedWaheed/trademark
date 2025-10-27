"use client";

import Link from "next/link";

export default function TrademarkRevivalCTA() {
  return (
    <section className="bg-[#f5f5f7] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
          Revive Your Trademark{" "}
          <span className="text-[#6c4cb1]">with Confidence</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4b4b63] sm:text-lg font-[var(--font-body)]">
          Missed a deadline? Unsure what went wrong? We&apos;ll review your
          status, explain your options, and guide you through the revival
          process swiftly, clearly, and with expert support.
        </p>
        <p className="mt-5 text-sm font-semibold text-[#212121]">
          Don&apos;t lose your brand. Let&apos;s bring it back.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/trademark-registration-form"
            className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_-25px_rgba(108,76,177,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
          >
            Revive Your Trademark
          </Link>
        </div>
      </div>
    </section>
  );
}
