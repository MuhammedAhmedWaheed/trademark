import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  href: string;
  accent: {
    border: string;
    button: string;
    buttonHover: string;
    cardBg: string;
  };
  includes: string[];
};

const PLANS: Plan[] = [
  {
    name: "Basic Package",
    tagline: "\"Just the Essentials to File\"",
    price: "$99",
    priceNote: "+ USPTO filing fees",
    href: "/trademark-registration-form",
    accent: {
      border: "border-[#dfd8f7]",
      cardBg: "bg-white",
      button: "bg-[#1b1b3a] text-white",
      buttonHover: "hover:brightness-110",
    },
    includes: [
      "USPTO Direct-Hit Trademark Search to help ensure your mark is available.",
      "Expert Trademark Classification prepared by seasoned specialists.",
      "Streamlined online process with support throughout your submission.",
    ],
  },
  {
    name: "Standard Package",
    tagline: "\"Enhanced Protection and Trademark Support\"",
    price: "$199",
    priceNote: "+ USPTO filing fees",
    href: "/trademark-registration-form",
    accent: {
      border: "border-[#cabff1]",
      cardBg: "bg-[#f8f6ff]",
      button: "bg-[#6c4cb1] text-white",
      buttonHover: "hover:brightness-110",
    },
    includes: [
      "Everything in the Basic Package.",
      "Personalized guidance from a senior trademark specialist.",
      "Professionally drafted Cease & Desist Letter for use against infringers.",
      "Trademark Monitoring for three months.",
      "Priority communication and responsive support.",
    ],
  },
  {
    name: "Premium Package",
    tagline: "\"Full-Service Protection & Fast-Track Filing\"",
    price: "$399",
    priceNote: "+ USPTO filing fees",
    href: "/trademark-registration-form",
    accent: {
      border: "border-[#ded7f7]",
      cardBg: "bg-white",
      button: "bg-[#333333] text-white",
      buttonHover: "hover:brightness-110",
    },
    includes: [
      "Everything in the Standard Package, plus:",
      "Rush Filing with 24 hour priority processing.",
      "Extended access to our senior trademark team.",
      "Trademark Monitoring Alerts with a free trial to catch potential infringements early.",
      "Trademark Monitoring for one year.",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Start Protecting Your Business Today
          </h2>
          <p className="mt-4 text-base text-[#333333] sm:text-lg font-[var(--font-body)]">
            Select the trademark registration package that matches your brand&apos;s needs. Our experienced trademark specialists and case analysts will guide you through every step with speed, accuracy, and confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {PLANS.map(
            ({ name, tagline, price, priceNote, href, accent, includes }) => (
              <div
                key={name}
                className={`flex h-full flex-col rounded-3xl border p-8 text-left text-[#212121] shadow-[0_22px_40px_-34px_rgba(108,76,177,0.35)] ${accent.border} ${accent.cardBg}`}
              >
                <div>
                  <h3 className="text-xl text-[#212121] font-[var(--font-heading)]">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] font-[var(--font-body)]">
                    {tagline}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl text-[#212121] font-[var(--font-heading)]">
                    {price}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-[#5d5d6f]">
                    {priceNote}
                  </div>
                </div>
                <Link
                  href={href}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${accent.button} ${accent.buttonHover}`}
                >
                  Start {name.split(" ")[0]} Application
                </Link>
                <div className="mt-8 border-t border-[#e0e3ff]" />
                <p className="mt-5 text-sm font-semibold text-[#212121]">
                  Includes:
                </p>
                <ul className="mt-3 space-y-3 text-sm text-[#333333] font-[var(--font-body)]">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6c4cb1]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
