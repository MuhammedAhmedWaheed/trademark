"use client";

import {
  ShieldCheck,
  Search,
  Sparkles,
  BadgeCheck,
  Crown,
  ShieldAlert,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const BENEFITS: Benefit[] = [
  {
    title: "Stop Copycats Before They Profit",
    description:
      "Trademark registration gives you the legal tools to prevent competitors from using similar names, logos, or branding that could confuse customers or dilute your reputation.",
    Icon: ShieldAlert,
  },
  {
    title: "Stand Out in a Crowded Market",
    description:
      "A registered trademark helps you build a brand identity that's truly your own, and protects it. It ensures your name, slogan, or design remains uniquely tied to your business.",
    Icon: Sparkles,
  },
  {
    title: "Own Your Brand, Legally",
    description:
      "Secure exclusive rights to your trademarks nationwide. With federal registration, you gain priority protection in every U.S. market where you do business.",
    Icon: Crown,
  },
  {
    title: "Add Legitimacy With \u00AE Status",
    description:
      "The \u00AE symbol isn't just a badge, it's a statement. It signals to customers and competitors that your brand is officially recognized and protected under U.S. law.",
    Icon: BadgeCheck,
  },
  {
    title: "Enforce Your Rights with Confidence",
    description:
      "Trademark registration gives you the legal standing to take action against infringers, including cease-and-desist letters, takedown notices, and formal legal claims if needed.",
    Icon: ShieldCheck,
  },
  {
    title: "Monitor and Defend What's Yours",
    description:
      "With active monitoring and proper USPTO documentation, you'll be able to detect and respond to infringement quickly, before it threatens your brand's value or trust.",
    Icon: Search,
  },
];

export default function WhyRegistrationMatters() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Why Trademark Registration Matters
          </h2>
          <p className="mt-4 text-base text-[#333333] sm:text-lg font-[var(--font-body)]">
            Protect your brand, reputation, and future with a registered trademark.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex h-full flex-col rounded-2xl border border-[#d9d3f2] bg-white p-6 text-left shadow-[0_18px_40px_-28px_rgba(108,76,177,0.3)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_-26px_rgba(108,76,177,0.35)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6c4cb1]/12 text-[#6c4cb1]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg text-[#212121] font-[var(--font-heading)]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed font-[var(--font-body)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






