import type { Metadata } from "next";
import Link from "next/link";
import { Filter, Layers, Shield, Sparkles } from "lucide-react";

import {
  GOODS_COUNT,
  SERVICES_COUNT,
  TRADEMARK_CATEGORIES,
  type TrademarkCategory,
} from "@/data/trademarkCategories";

export const metadata: Metadata = {
  title: "Trademark Categories Guide | Legal Mark Experts",
  description:
    "Explore trademark categories from Nice Classes 001-045. Learn which class fits your products or services and plan a confident USPTO filing.",
};

const GOODS = TRADEMARK_CATEGORIES.filter((category) => category.type === "goods");
const SERVICES = TRADEMARK_CATEGORIES.filter((category) => category.type === "services");

export default function TrademarkCategoriesPage() {
  return (
    <main className="bg-white text-[#212121]">
      <Hero />

      <section className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">Product Classes</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#4a4a4a] sm:text-base">
                There are 34 goods classes. Every physical product you sell must align with at least one class in order to secure protection.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6c4cb1] shadow-sm shadow-black/5">
              <Layers className="h-4 w-4" />
              {GOODS_COUNT} Goods Classes
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GOODS.map((category) => (
              <CategoryCard key={category.classCode} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">Service Classes</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#4a4a4a] sm:text-base">
                There are 11 service classes covering professional, technical, and hospitality services. Most service brands file in one to three of these categories.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6c4cb1] shadow-sm shadow-black/5">
              <Sparkles className="h-4 w-4" />
              {SERVICES_COUNT} Service Classes
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((category) => (
              <CategoryCard key={category.classCode} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f2ff] to-[#ebe5ff]" />
      <div className="absolute -top-24 right-24 h-48 w-48 rounded-full bg-[#6c4cb1]/10 blur-3xl" />
      <div className="absolute -bottom-20 left-16 h-64 w-64 rounded-full bg-[#6c4cb1]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] shadow-sm shadow-black/5">
            <Filter className="h-4 w-4" />
            Trademark Classes
          </span>
          <h1 className="text-3xl font-semibold text-[#212121] sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
            Understand Exactly Where Your Trademark Belongs
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#333333] sm:text-lg lg:mx-0">
            Each class represents a specific scope of goods or services. Choosing correctly keeps your filing compliant and strengthens the protection you can enforce.
          </p>

          <div className="grid gap-4 sm:flex sm:items-center sm:gap-5">
            <StatPill icon={Layers} label="Goods Classes" value={GOODS_COUNT.toString()} />
            <StatPill icon={Sparkles} label="Service Classes" value={SERVICES_COUNT.toString()} />
            <StatPill icon={Shield} label="Global Standard" value="Nice Agreement" />
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-[360px] rounded-[32px] border border-white/70 bg-white p-5 shadow-[0_40px_75px_-45px_rgba(48,32,92,0.45)]">
            <ul className="space-y-4 text-sm text-[#4a4a4a]">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                Every filing must list each class that aligns with your goods or services.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                Fees apply per class, so plan coverage that matches your current and near-future offerings.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                Nice Classes 001–034 cover goods, while 035–045 primarily cover services.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-[#f5f5f5] p-4 text-xs text-[#4a4a4a]">
              Not sure which classes to select? Our trademark analysts map each product or service to a compliant description so you never overpay or under-protect.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex min-w-[180px] items-center justify-start gap-3 rounded-2xl border border-[#d8ccff] bg-white px-5 py-3 text-sm font-semibold text-[#6c4cb1] shadow-sm shadow-black/5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f1ff] text-[#6c4cb1]">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold">{value}</span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#6c4cb1]/80">
          {label}
        </span>
      </div>
    </span>
  );
}

function CategoryCard({ category }: { category: TrademarkCategory }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[#e1e1f5] bg-white p-6 shadow-[0_22px_45px_-32px_rgba(108,76,177,0.4)] transition hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(108,76,177,0.45)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6c4cb1]">
            Class {category.classCode}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#212121]">{category.title}</h3>
        </div>
        <span className="rounded-full bg-[#f5f5f5] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6c4cb1]">
          {category.type === "goods" ? "Goods" : "Services"}
        </span>
      </div>
      <p className="mt-4 text-sm text-[#333333] leading-relaxed">{category.summary}</p>
      <div className="mt-4 rounded-2xl bg-[#f9f9fb] p-4 text-xs text-[#4a4a4a]">
        <span className="font-semibold text-[#6c4cb1]">Examples</span>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          {category.examples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex items-center gap-3 text-xs text-[#6c4cb1]">
        <Link href="/trademark-registration-form" className="font-semibold text-[#6c4cb1] underline-offset-4 hover:underline">
          Start a filing
        </Link>
        <span aria-hidden className="text-[#d0c6f7]">
          |
        </span>
        <Link href="/services/trademark-consultancy" className="font-semibold text-[#6c4cb1] underline-offset-4 hover:underline">
          Talk to a strategist
        </Link>
      </div>
    </article>
  );
}

function CTA() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[32px] border border-[#dcd2ff] bg-white px-6 py-12 text-center shadow-[0_30px_60px_-45px_rgba(108,76,177,0.35)] sm:px-12">
        <h2 className="text-2xl font-semibold text-[#212121] sm:text-3xl">
          Ready to file with confidence?
        </h2>
        <p className="max-w-3xl text-sm text-[#4a4a4a] sm:text-base">
          Legal Mark Experts translates your product roadmap into the right class coverage, drafts USPTO-approved identifications, and keeps you on schedule from first filing through registration.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/trademark-registration-form"
            className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
          >
            Start My Application
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#333333] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
