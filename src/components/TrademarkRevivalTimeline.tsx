"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type RevivalStep = {
  title: string;
  description: string;
};

const STEPS: RevivalStep[] = [
  {
    title: "Enter Your Serial Number",
    description:
      "Instantly retrieve your USPTO trademark record to confirm your mark qualifies for revival.",
  },
  {
    title: "Review Your Options",
    description:
      "We evaluate why the mark was abandoned and outline the best revival strategy to pursue.",
  },
  {
    title: "Submit Your Revival",
    description:
      "Our specialists prepare and file the required petition and supporting documents with the USPTO.",
  },
  {
    title: "Get Updates",
    description:
      "Stay informed with timely notifications as your revival progresses through the USPTO.",
  },
];

export default function TrademarkRevivalTimeline({
  steps = STEPS,
}: {
  steps?: RevivalStep[];
}) {
  const data = useMemo(() => (steps.length ? steps : STEPS), [steps]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f5f2ff] via-white to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1]">
                How It Works
              </span>
              <h2 className="mt-4 text-[2.3rem] leading-tight text-[#212121] font-[var(--font-heading)] sm:text-[2.7rem]">
                Get Clarity on Reviving Your Trademark
              </h2>
              <div className="mt-6 h-px w-full bg-[#e2e4f0]" />
            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#4b4b63] sm:text-lg font-[var(--font-body)]">
              Trademark revival doesn&apos;t have to be complicated. Our step-by-step
              process guides you through exactly what you need to restore your trademark
              with confidence and ease.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-28px_rgba(108,76,177,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col items-start gap-6 lg:pl-10">
            <span className="absolute left-[11px] top-[14px] bottom-[14px] hidden w-[1px] bg-gradient-to-b from-[#ccd2ff] via-[#6c4cb1] to-[#ccd2ff] lg:block" />

            {data.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`relative z-[1] flex h-6 w-6 items-center justify-center rounded-full border-2 transition ${
                        isActive
                          ? "border-[#6c4cb1] bg-[#6c4cb1]"
                          : "border-[#d7dcff] bg-white"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          isActive ? "bg-white" : "bg-[#d7dcff]"
                        }`}
                      />
                    </span>
                    {index !== data.length - 1 && (
                      <span className="mt-1 hidden h-full w-px bg-dotted-line lg:block" />
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h3
                      className={`text-sm font-semibold sm:text-base ${
                        isActive ? "text-[#6c4cb1]" : "text-[#212121]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`max-w-sm text-sm leading-relaxed text-[#4b4b63] transition-all ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
