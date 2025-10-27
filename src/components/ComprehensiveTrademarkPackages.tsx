import { CheckCircle2, Globe2, Layers3, Search } from "lucide-react";

type PackageFeature = {
  title: string;
  description: string;
};

type PackageItem = {
  id: string;
  name: string;
  headline: string;
  price: string;
  badge?: string;
  primaryFeature?: string;
  features: PackageFeature[];
};

const packages: PackageItem[] = [
  {
    id: "federal",
    name: "Federal Search",
    headline: "Federal Search",
    price: "$199",
    primaryFeature: undefined,
    features: [
      {
        title: "Federal Search",
        description:
          "We scan USPTO filings for identical and similar trademarks across classes using attorney-reviewed filters.",
      },
      {
        title: "Legal Expertise",
        description:
          "Our licensed practitioners interpret the results to flag real conflicts and likelihood-of-confusion issues.",
      },
    ],
  },
  {
    id: "recommended",
    name: "Federal and Common Law Search",
    headline: "Federal + Common Law Search",
    price: "$299",
    badge: "Recommended",
    primaryFeature: "Everything from Federal Search",
    features: [
      {
        title: "Common Law Search",
        description:
          "We extend coverage to marketplace usage, domain registrations, and social platforms to uncover unregistered conflicts.",
      },
      {
        title: "Domain Search",
        description:
          "We review matching and confusingly similar domains so you can secure brand assets before launch.",
      },
    ],
  },
  {
    id: "global",
    name: "Global Comprehensive Search",
    headline: "Global Comprehensive Search",
    price: "$1599",
    primaryFeature: "Everything from Federal and Common Law Search",
    features: [
      {
        title: "Global Coverage",
        description:
          "Attorneys review Canadian, UK, EUIPO, WIPO, and additional international registries for conflicts across borders.",
      },
    ],
  },
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  federal: Search,
  recommended: Layers3,
  global: Globe2,
};

export default function ComprehensiveTrademarkPackages() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            We offer <span className="text-[#6c4cb1]">3 packages</span> for Comprehensive Search
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Choose the right level of clearance for your brand. Every package includes attorney insight, transparent
            pricing, and fast turnaround.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} item={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ item }: { item: PackageItem }) {
  const Icon = ICON_MAP[item.id] ?? Search;
  const isFeatured = item.id === "recommended";

  return (
    <article
      className={`flex h-full flex-col gap-6 rounded-3xl border border-[#ded8f5] bg-white p-8 text-left shadow-[0_22px_60px_-40px_rgba(108,76,177,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(108,76,177,0.4)] ${
        isFeatured ? "border-[#6c4cb1] shadow-[0_32px_80px_-38px_rgba(108,76,177,0.45)] lg:-translate-y-2" : ""
      }`}
    >
      <header className="flex items-center justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f1ff] text-[#6c4cb1]">
          <Icon className="h-7 w-7" />
        </span>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6c4cb1]/80">{item.name}</p>
          <p className="mt-1 text-3xl font-semibold text-[#212121] font-[var(--font-heading)]">{item.price}</p>
        </div>
      </header>

      <div>
        <h3 className="text-lg font-semibold text-[#212121] sm:text-xl font-[var(--font-heading)]">{item.headline}</h3>
        {item.badge ? (
          <span className="mt-2 inline-flex rounded-full bg-[#f4ecff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6c4cb1] font-[var(--font-heading)]">
            {item.badge}
          </span>
        ) : null}
      </div>

      {item.primaryFeature && (
        <div className="rounded-2xl bg-[#f5f5f5] px-4 py-3 text-sm font-semibold text-[#333333] font-[var(--font-body)]">
          <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#e9f5ee] text-[#2e7d32]">
            <CheckCircle2 className="h-3 w-3" />
          </span>
          {item.primaryFeature}
        </div>
      )}

      <ul className="space-y-5">
        {item.features.map((feature) => (
          <li key={feature.title} className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f1ff] text-[#6c4cb1]">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">{feature.title}</p>
              <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button
          type="button"
          className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-[var(--font-heading)] ${
            isFeatured
              ? "bg-[#6c4cb1] shadow-lg shadow-[#6c4cb1]/30 hover:brightness-110 focus-visible:outline-[#6c4cb1]"
              : "bg-[#333333] shadow-lg shadow-black/20 hover:brightness-110 focus-visible:outline-[#333333]"
          }`}
        >
          Get Started
        </button>
      </div>
    </article>
  );
}
