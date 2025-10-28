"use client";

import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function TrademarkSecureSpotCTA() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 rounded-[36px] bg-[#6c4cb1] px-6 py-8 text-white shadow-[0_48px_90px_-70px_rgba(108,76,177,0.65)] transition hover:shadow-[0_54px_120px_-74px_rgba(108,76,177,0.62)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10 sm:py-9 lg:rounded-[40px]">
          <div className="flex items-start gap-4 sm:items-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6c4cb1] shadow-lg shadow-black/10 sm:h-14 sm:w-14">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold leading-tight font-[var(--font-heading)] sm:text-2xl">
                Secure a spot for your brand today
              </h2>
              <p className="text-sm leading-relaxed text-white/90 font-[var(--font-body)] sm:text-base">
                Don&apos;t let competitors claim your brand. Register your trademark now with hands-on support from trusted attorneys.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#6c4cb1] shadow-lg shadow-black/10 transition hover:translate-x-[2px] hover:shadow-[0_18px_35px_-20px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
