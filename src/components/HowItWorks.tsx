"use client";

import { MessageCircle, Search, ThumbsUp } from "lucide-react";

type Step = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const STEPS: Step[] = [
  {
    title: "Complete a Brief Questionnaire",
    description:
      "Tell us about your business and brand through our secure online form. This helps our trademark team customize the filing process to match your goals and industry.",
    Icon: Search,
  },
  {
    title: "Search & Application Preparation",
    description:
      "Our experienced case analysts and paralegals conduct a comprehensive trademark search and professionally prepare your application to ensure accuracy and compliance with USPTO standards.",
    Icon: MessageCircle,
  },
  {
    title: "File with the USPTO",
    description:
      "We file your application directly with the United States Patent and Trademark Office (USPTO). Your trademark will appear in the official USPTO database within 24 hours, and we'll keep you informed every step of the way.",
    Icon: ThumbsUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#333333] sm:text-lg font-[var(--font-body)]">
            Register your trademark in just three simple steps with our streamlined, expert-guided online process.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className="group relative flex h-full flex-col rounded-3xl border border-[#dcd7f4] bg-white p-8 shadow-[0_18px_35px_-24px_rgba(108,76,177,0.35)] transition hover:-translate-y-1 hover:border-[#bcb0eb] hover:shadow-[0_30px_45px_-26px_rgba(108,76,177,0.4)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6c4cb1] text-white shadow-lg shadow-[#6c4cb1]/35">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#6c4cb1]">
                Step {index + 1}
              </div>
              <h3 className="mt-2 text-xl text-[#212121] font-[var(--font-heading)]">
                {title}
              </h3>
              <p className="mt-4 text-sm text-[#333333] leading-relaxed font-[var(--font-body)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
