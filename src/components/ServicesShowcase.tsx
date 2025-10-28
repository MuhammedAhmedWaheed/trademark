"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

const SERVICES: ServiceItem[] = [
  {
    title: "Trademark Registration \u2192 USPTO Filings",
    description:
      "Secure your brand name, logo, or slogan with confidence through our efficient and affordable U.S. trademark registration services. Submit your information online and our specialists handle preparation, classification, and USPTO filing from start to finish.",
    ctaLabel: "Explore Trademark Registration Services",
    ctaHref: "/services/trademark-registration",
  },
  {
    title: "Trademark Filings & Legal Documents \u2192 Office Actions, Assignments & More",
    description:
      "Facing a USPTO Office Action or managing a transfer? We prepare and submit responses, Section 8 filings, Statements of Use, Certified Copies, and trademark assignments with precision and on-time delivery.",
    ctaLabel: "Get Help With USPTO Filings",
    ctaHref: "/services/trademark-office-action",
  },
  {
    title: "Trademark Revival \u2192 Reclaim Abandoned Applications",
    description:
      "Missed a deadline or received a refusal? We assess why your application went abandoned, prepare the right petition, and guide it back onto the USPTO path so your brand regains legal protection.",
    ctaLabel: "Revive Your Trademark",
    ctaHref: "/services/trademark-revival",
  },
  {
    title: "Trademark Monitoring & Maintenance",
    description:
      "Stay protected after registration with proactive USPTO monitoring and maintenance support. We notify you of conflicting filings and handle renewals, Statements of Use, and ownership updates without the stress.",
    ctaLabel: "Protect Your Trademark Long-Term",
    ctaHref: "/services/trademark-monitoring",
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  return (
    <section className="bg-white py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1]">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl text-[#212121] sm:text-4xl font-[var(--font-heading)]">
              What Can Legal Mark Experts Do for Your Brand?
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-full flex-col items-start gap-1 text-left transition hover:opacity-90 focus:outline-none cursor-pointer"
                  aria-pressed={isActive}
                  aria-current={isActive}
                >
                  <span
                    className={`text-[32px] leading-none font-[var(--font-heading)] ${
                      isActive ? "text-[#6c4cb1]" : "text-[#c1c4d6]"
                    }`}
                  >
                    {index + 1}.
                  </span>
                  <span
                    className={`max-w-[220px] text-sm leading-snug font-[var(--font-heading)] ${
                      isActive ? "text-[#212121]" : "text-[#9195a8]"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`mt-3 h-0.5 w-12 rounded-full md:w-16 ${
                      isActive ? "bg-[#6c4cb1]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] md:items-center">
            <div className="max-w-2xl space-y-3">
              <p className="text-base leading-relaxed text-[#333333] font-[var(--font-body)]">
                {active.description}
              </p>
              <Link
                href={active.ctaHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6c4cb1] transition hover:text-[#5537a0]"
              >
                {active.ctaLabel}
                <span aria-hidden="true">{"\u203a"}</span>
              </Link>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-[420px] md:max-w-[460px]">
                <div className="rounded-[32px] border border-[#d7dcff] bg-[#f5f5f5]">
                  <div className="rounded-3xl border border-[#dad4ff] bg-white ">
                    <Image
                      src="/services-showcase-illustration.svg"
                      alt=""
                      width={480}
                      height={360}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
