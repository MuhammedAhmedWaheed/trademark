"use client";

import { ShieldCheck, Monitor, ClipboardCheck, ThumbsUp, BadgeCheck, Users } from "lucide-react";

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Nationwide Legal Ownership",
    description: "Grants you the exclusive right to use your mark across the United States.",
  },
  {
    Icon: Monitor,
    title: "Powerful Legal Protection",
    description: "Provides the legal standing to sue for trademark infringement in federal court.",
  },
  {
    Icon: ClipboardCheck,
    title: "Deters Competitors",
    description: "Puts the public on notice of your ownership, discouraging others from using a similar mark.",
  },
  {
    Icon: ThumbsUp,
    title: "Builds Brand Value",
    description: "A registered trademark is a valuable business asset that can be licensed, sold, and used to build equity.",
  },
  {
    Icon: BadgeCheck,
    title: "Prevents Costly Disputes",
    description: "Securing your rights early can prevent expensive rebranding efforts and legal battles down the line.",
  },
  {
    Icon: Users,
    title: "Establishes Legal Presumption & Priority",
    description: "The registration creates a public record and a legal presumption of validity and your ownership right.",
  },
];

export default function TrademarkWhyChoose() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
            Why it's Important
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#212121] sm:mt-3 sm:text-4xl font-[var(--font-heading)]">
           What is a Registered Trademark and Why is it Essential?
          </h2>
          <span className="mt-4 inline-flex h-[3px] w-20 rounded-full bg-[#6c4cb1]/40 sm:w-24" />
        </header>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col gap-3 rounded-[22px] border border-[#e5e5e5] bg-[#f9f9f9] p-5 transition hover:border-[#6c4cb1]/60 hover:bg-white hover:shadow-[0_28px_60px_-46px_rgba(108,76,177,0.55)] sm:rounded-[26px] sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#6c4cb1] shadow-inner shadow-[#dcd6f4]/70 group-hover:text-[#5a3fa3] sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </span>
              <h3 className="text-base font-semibold text-[#212121] sm:text-lg font-[var(--font-heading)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#4b4b63] font-[var(--font-body)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
