"use client";

import Link from "next/link";
import { Navigation } from "lucide-react";

type RevivalPath = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

const PATHS: RevivalPath[] = [
  {
    title: "Eligible for Revival",
    description:
      "Your trademark might be abandoned, but it is not too late. File a complete response plus a Petition to Revive within the two-month grace period.",
    ctaLabel: "Revive Your Trademark",
    href: "/trademark-revival-form",
  },
  {
    title: "Missed the Revival Window?",
    description:
      "If the revival grace period has passed, a fresh USPTO application safeguards your brand and restores nationwide protection.",
    ctaLabel: "Refile Trademark",
    href: "/trademark-revival-form",
  },
];

export default function TrademarkRevivalMissedDate({
  paths = PATHS,
}: {
  paths?: RevivalPath[];
}) {
  if (!paths.length) return null;

  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold uppercase tracking-[0.28em] text-[#6c4cb1]">
            Missed Your Revival Date?
          </h2>
          <p className="mt-3 text-2xl font-semibold text-[#212121] sm:text-3xl font-[var(--font-heading)]">
            No worries! We have you covered
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {paths.map(({ title, description, ctaLabel, href }) => (
            <article
              key={title}
              className="flex flex-col gap-6 rounded-3xl border border-[#eceff6] bg-white p-6 shadow-[0_20px_45px_-36px_rgba(108,76,177,0.75)] transition hover:-translate-y-1 hover:border-[#dee3f4] hover:shadow-[0_22px_55px_-34px_rgba(108,76,177,0.78)] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <div className="flex flex-1 items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0ecff] text-[#6c4cb1]">
                  <Navigation className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)]">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={href}
                  className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-22px_rgba(108,76,177,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
