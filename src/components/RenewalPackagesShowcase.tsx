"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Radar, SearchCheck, Star, UserCheck } from "lucide-react";

const FEATURES = [
  {
    Icon: SearchCheck,
    text: "Receive a free comprehensive trademark search report before filing.",
  },
  {
    Icon: UserCheck,
    text: "Get one-on-one pre-filing review from a Senior Case Analyst.",
  },
  {
    Icon: Radar,
    text: "Enjoy full monitoring from filing through registration.",
  },
  {
    Icon: Star,
    text: "Trusted by thousands of U.S. businesses for fast, reliable trademark protection.",
  },
];

const SUPPORT_PACKAGES = [
  {
    title: "Trademark Renewal",
    price: "$799",
    feeNote: "+ Govt Fee*",
    description:
      "Keep Section 8 & 9 filings current without missing a single USPTO deadline.",
    bullets: [
      "Dedicated renewal specialists prepare every filing and specimen.",
      "Deadline tracking with proactive reminders 6, 3, and 1 month out.",
    ],
    ctaLabel: "Renew your trademark",
    href: "/trademark-registration-form",
    gradient:
      "from-[#ede8ff] via-white to-[#d9cef9]",
  },
  {
    title: "Trademark Abandoned Application Revival",
    price: "$299",
    feeNote: "+ Govt Fee*",
    description:
      "Restore an application that lapsed because of a missed office-action or SOU deadline.",
    bullets: [
      "Draft and file your Petition to Revive with supporting evidence.",
      "Re-engage examination quickly so your priority date stays protected.",
    ],
    ctaLabel: "Revive your trademark",
    href: "/trademark-registration-form",
    gradient:
      "from-[#f3f0ff] via-white to-[#e6e0ff]",
  },
];

export default function RenewalPackagesShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <PrimaryTile />
          <SecondaryTiles />
        </div>
      </div>
    </section>
  );
}

function PrimaryTile() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#eef3ff] via-white to-[#dbe7ff] px-6 py-8 shadow-[0_40px_80px_-60px_rgba(27,45,110,0.55)] sm:px-10 sm:py-12">
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#d4c6ff]/55 blur-3xl" />
      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-[#6c4cb1]/25 blur-3xl" />

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,260px)] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)]">
            Trademark registration with watch subscription
          </p>
          <div className="space-y-1">
            <span className="text-4xl text-[#1b1b3a] font-[var(--font-heading)]">
              $499
            </span>
            <span className="text-sm text-[#4b4b63] font-[var(--font-body)]">
              + Govt Fee*
            </span>
          </div>
          <p className="text-sm text-[#40385c] sm:text-base">
            File your U.S. trademark application in minutes with expert guidance.
          </p>
          <Link
            href="/trademark-registration-form"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#6c4cb1] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] whitespace-nowrap"
          >
            Register your trademark
            <ArrowRight className="h-4 w-4" />
          </Link>

          <ul className="space-y-4 pt-4">
            {FEATURES.map(({ Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 text-sm text-[#4b4b63] sm:text-base font-[var(--font-body)]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-md shadow-[#6c4cb1]/10">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[260px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/90 p-3 shadow-[0_30px_60px_-40px_rgba(27,45,110,0.55)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#dfe8ff] via-white to-[#ecf3ff]">
              <Image
                src="/trademarkrenewal-3.jpg"
                alt="Trademark expert assisting a client"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryTiles() {
  return (
    <div className="grid gap-6">
      {SUPPORT_PACKAGES.map(
        ({ title, price, feeNote, description, bullets, ctaLabel, href, gradient }) => (
          <div
            key={title}
            className={`rounded-[28px] bg-gradient-to-br ${gradient} px-6 py-8 shadow-[0_30px_65px_-55px_rgba(27,45,110,0.45)] sm:px-8`}
          >
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-center sm:text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-[#6c4cb1] font-[var(--font-heading)]">
                  {title}
                </p>
                <div className="text-3xl text-[#1b1b3a] font-[var(--font-heading)]">
                  {price}
                </div>
                <span className="text-sm text-[#4b4b63] font-[var(--font-body)]">
                  {feeNote}
                </span>
                <p className="text-sm text-[#4a3a6a] sm:text-base">{description}</p>
              </div>

              <ul className="space-y-3 text-sm text-[#4a3a6a] sm:text-base">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
