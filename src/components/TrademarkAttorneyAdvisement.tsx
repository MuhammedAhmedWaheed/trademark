"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function TrademarkAttorneyAdvisement() {
  return (
    <section className="bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#e0e0e0] bg-white p-6 shadow-[0_34px_80px_-68px_rgba(33,33,33,0.6)] transition hover:shadow-[0_44px_110px_-82px_rgba(33,33,33,0.55)] sm:rounded-[32px] sm:p-10 lg:rounded-[36px] lg:p-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
            <span className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#ede8fb] text-[#6c4cb1] shadow-inner shadow-[#d8cffa]/60 sm:h-[88px] sm:w-[88px] sm:rounded-[26px] lg:h-[96px] lg:w-[96px] lg:rounded-[28px]">
              <Search className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11" strokeWidth={1.8} />
            </span>

            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#212121] sm:text-[1.9rem] font-[var(--font-heading)]">
                  Comprehensive Trademark Search &amp; Legal Advisement Included
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
                  In-Depth Trademark Search
                </p>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-[#333333] sm:text-base sm:leading-7 font-[var(--font-body)]">
                We conduct a comprehensive trademark search across U.S. databases to identify potential conflicts and assess the strength of your proposed mark. This is essential for a successful USPTO filing.
              </p>

              <Link
                href="/trademark-registration-form"
                className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:translate-y-[-1px] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:min-w-[180px] sm:px-7 sm:py-3.5"
              >
                Start My Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
