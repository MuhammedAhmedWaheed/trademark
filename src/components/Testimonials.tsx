"use client";

import { BadgeCheck, Quote, Sparkles, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  rating: number;
  badge: string;
  initials: string;
  accent: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Legal Mark team handled our entire filing with zero stress. Their roadmap made it easy to secure our brand before launch.",
    name: "Avery L.",
    title: "Founder, Luminous Labs",
    rating: 5,
    badge: "Verified Partner",
    initials: "AL",
    accent: "bg-[#e9dbff]",
  },
  {
    quote:
      "They guided us through an office action response in record time. The advice was practical, friendly, and on-brand with our values.",
    name: "Marcus T.",
    title: "COO, Urban Thread Co.",
    rating: 5,
    badge: "Verified Client",
    initials: "MT",
    accent: "bg-[#dfe8ff]",
  },
  {
    quote:
      "From search to filing, every detail was explained clearly. I finally felt confident protecting our product line nationwide.",
    name: "Priya D.",
    title: "Product Lead, Stellar Biotics",
    rating: 5,
    badge: "Verified Entrepreneur",
    initials: "PD",
    accent: "bg-[#fce7ff]",
  },
  {
    quote:
      "Their attorneys are approachable and fast to respond. We now have a trademark plan that scales with our marketplace growth.",
    name: "Nina R.",
    title: "CEO, MarketFuse",
    rating: 5,
    badge: "Verified Founder",
    initials: "NR",
    accent: "bg-[#e8f5ff]",
  },
  {
    quote:
      "Our international expansion depended on a clean filing. Legal Mark delivered everything ahead of schedule and under budget.",
    name: "Jalen C.",
    title: "Head of Ops, Echo Devices",
    rating: 5,
    badge: "Verified Customer",
    initials: "JC",
    accent: "bg-[#f7e6ff]",
  },
  {
    quote:
      "The dashboard updates and reminders are a lifesaver. We never miss a deadline and always know the status of our filings.",
    name: "Selena K.",
    title: "Brand Manager, Halo Skin",
    rating: 5,
    badge: "Verified Partner",
    initials: "SK",
    accent: "bg-[#e5ecff]",
  },
  {
    quote:
      "I appreciated the human touch. Every conversation felt collaborative, and the strategy session saved us from costly mistakes.",
    name: "Diego M.",
    title: "Creative Director, Northwind",
    rating: 5,
    badge: "Verified Client",
    initials: "DM",
    accent: "bg-[#f4f0ff]",
  },
  {
    quote:
      "Their portfolio review uncovered conflicts we never saw. Within days, we had a new name secured and cleared for commerce.",
    name: "Emily F.",
    title: "Co-Founder, River & Row",
    rating: 5,
    badge: "Verified Entrepreneur",
    initials: "EF",
    accent: "bg-[#f1e3ff]",
  },
  {
    quote:
      "We juggle multiple trademarks, and their monitoring team keeps everything compliant. The reports are polished and actionable.",
    name: "Omar G.",
    title: "Legal Counsel, Stratos Labs",
    rating: 5,
    badge: "Verified Counsel",
    initials: "OG",
    accent: "bg-[#eaf7ff]",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f3ff] to-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ede5ff] via-transparent to-transparent opacity-90" />
      <div className="absolute -left-24 top-10 hidden h-64 w-64 rounded-full bg-[#6c4cb1]/15 blur-3xl lg:block" />
      <div className="absolute right-[-120px] bottom-16 hidden h-72 w-72 rounded-full bg-[#6c4cb1]/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs text-[#6c4cb1] font-semibold uppercase tracking-[0.22em] shadow-[0_12px_24px_-18px_rgba(108,76,177,0.65)]">
            <BadgeCheck className="h-7 w-7" />
            <p className="text-[14px]">Customer Feedback</p>
          </div>
          <h2 className="mt-6 text-[2rem] font-semibold text-[#212121] sm:text-[2.5rem] font-[var(--font-heading)]">
            See What Our Customers Think About Us
          </h2>
          <p className="mt-4 text-base text-[#4b4b63] sm:text-lg font-[var(--font-body)]">
            Every testimonial is a trademark win fueled by purple-powered
            strategy, responsive counsel, and filings that launch on schedule.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[#5c5c76]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-[0_16px_32px_-26px_rgba(108,76,177,0.75)]">
              <Star className="h-4 w-4 text-[#f6b949]" fill="currentColor" />
              4.9 average rating
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-[0_16px_32px_-26px_rgba(108,76,177,0.75)]">
              <Sparkles className="h-4 w-4 text-[#6c4cb1]" />
              1,000+ glowing reviews
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-[0_16px_32px_-26px_rgba(108,76,177,0.75)]">
              <Quote className="h-4 w-4 text-[#6c4cb1]" />
              Updated monthly
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map(
            ({ quote, name, title, rating, badge, initials, accent }) => (
              <article
                key={`${name}-${title}`}
                className="group relative flex h-full flex-col rounded-[26px] border border-white/60 bg-white/90 p-7 shadow-[0_24px_45px_-32px_rgba(108,76,177,0.75)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_35px_55px_-28px_rgba(108,76,177,0.75)]"
              >
                <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-[#6c4cb1] via-[#9e84de] to-[#6c4cb1]" />
                <Quote className="absolute -top-4 right-6 h-9 w-9 text-[#6c4cb1]/15" />

                <p className="mt-6 text-sm leading-relaxed text-[#333333]">
                  {quote}
                </p>

                <div className="mt-7 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-[#6c4cb1] ${accent} shadow-inner shadow-[#6c4cb1]/20`}
                    >
                      {initials}
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-[#212121]">
                        {name}
                      </div>
                      <div className="text-xs text-[#5c5c76]">{title}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-[#f6b949]">
                      {Array.from({ length: rating }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4"
                          strokeWidth={1.5}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-wide text-[#6c4cb1]">
                      {badge}
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-6 hidden h-12 w-12 rounded-full bg-gradient-to-br from-[#6c4cb1]/12 via-transparent to-transparent blur-xl transition duration-300 group-hover:opacity-0 sm:block" />
                <div className="absolute -bottom-8 right-4 hidden h-16 w-16 rounded-full bg-[#6c4cb1]/12 blur-3xl transition duration-300 group-hover:scale-110 md:block" />
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
