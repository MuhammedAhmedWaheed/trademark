import Link from "next/link";

const benefits = [
  {
    title: "New Trademark Filings Can Conflict with Yours",
    description:
      "Catch competitive filings early, assess conflicts, and take swift action to safeguard your trademark rights.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M16 20V14a8 8 0 0 1 16 0v6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="12"
          y="20"
          width="24"
          height="22"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M23 31h2"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Unregistered Marks May Infringe on Your Brand",
    description:
      "Identify common-law usage online and in marketplaces to prevent unauthorized parties from diluting your brand.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M24 8 10 15v10c0 9.389 6.268 17.338 14 18 7.732-.662 14-8.611 14-18V15Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 24h8M20 30h5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Avoid Losing Your Exclusive Rights",
    description:
      "Maintain continuous vigilance so you can prove enforcement efforts and preserve exclusivity in every class.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M24 16a8 8 0 0 0-8 8h-6l6 6M24 32a8 8 0 0 0 8-8h6l-6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
];

export default function TrademarkMonitoringBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(108,76,177,0.12),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
          Why Monitoring Your Trademark Is Critical After Registration?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex h-full flex-col gap-5 rounded-[32px] bg-white p-6 text-left shadow-[0_28px_90px_-70px_rgba(33,33,33,0.6)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4cb1]/10 text-[#6c4cb1]">
                {benefit.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
