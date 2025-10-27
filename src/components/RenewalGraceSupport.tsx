"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, SendHorizontal } from "lucide-react";

type Option = {
  id: "grace" | "outside";
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  accent: "primary" | "secondary";
};

const OPTIONS: Option[] = [
  {
    id: "grace",
    title: "In Grace Period",
    description:
      "If your trademark renewal is within the grace period, we can expedite filings and proof of use so your mark stays active without penalties.",
    ctaLabel: "Renew Now",
    href: "/trademark-registration-form",
    accent: "primary",
  },
  {
    id: "outside",
    title: "If you're outside the grace period...",
    description:
      "Missed the window? We'll prepare a refiling strategy, restore protection, and manage deadlines to get your mark back on track.",
    ctaLabel: "Refile Now",
    href: "/trademark-registration-form",
    accent: "secondary",
  },
];

export default function RenewalGraceSupport() {
  const [open, setOpen] = useState<"grace" | "outside">("grace");

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 sm:px-6">
        <header className="text-center">
          <p className="text-base font-semibold text-[#6c4cb1] font-[var(--font-heading)]">
            Missed Your Renewal Date?
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#212121] sm:text-[2rem] font-[var(--font-heading)]">
            Don&apos;t worry! We&apos;ve got you covered
          </h2>
        </header>

        <div className="space-y-4">
          {OPTIONS.map((option) => {
            const isOpen = open === option.id;
            return (
              <div
                key={option.id}
                className="rounded-3xl border border-[#e1e6f4] bg-white px-5 py-4 shadow-[0_18px_40px_-35px_rgba(29,38,78,0.25)] transition hover:-translate-y-0.5 sm:px-6 sm:py-5"
              >
                <button
                  type="button"
                  onClick={() => setOpen(option.id)}
                  className="flex w-full items-center gap-4 text-left"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${
                      option.accent === "primary"
                        ? "bg-gradient-to-br from-[#6c4cb1] to-[#4f2f92]"
                        : "bg-gradient-to-br from-[#5c5c76] to-[#333333]"
                    }`}
                  >
                    <SendHorizontal className="h-5 w-5 rotate-[-15deg]" />
                  </span>

                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#212121] sm:text-base font-[var(--font-heading)]">
                        {option.title}
                        {isOpen ? (
                          <ChevronDown className="h-4 w-4 text-[#6c4cb1]" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-[#6c4cb1]" />
                        )}
                      </div>
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <p className="min-h-0 overflow-hidden text-xs text-[#333333] sm:text-sm font-[var(--font-body)]">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={option.href}
                      className={`hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        option.accent === "primary"
                          ? "bg-[#6c4cb1] shadow-md shadow-[#6c4cb1]/35 hover:brightness-110 focus-visible:outline-[#6c4cb1]"
                          : "bg-[#333333] shadow-md shadow-[#333333]/35 hover:brightness-110 focus-visible:outline-[#333333]"
                      }`}
                    >
                      {option.ctaLabel}
                    </Link>
                  </div>
                </button>

                <div
                  className={`sm:hidden ${isOpen ? "mt-4" : "mt-0 h-0 overflow-hidden"}`}
                >
                  <Link
                    href={option.href}
                    className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      option.accent === "primary"
                        ? "bg-[#6c4cb1] shadow-md shadow-[#6c4cb1]/35 hover:brightness-110 focus-visible:outline-[#6c4cb1]"
                        : "bg-[#333333] shadow-md shadow-[#333333]/35 hover:brightness-110 focus-visible:outline-[#333333]"
                    }`}
                  >
                    {option.ctaLabel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
