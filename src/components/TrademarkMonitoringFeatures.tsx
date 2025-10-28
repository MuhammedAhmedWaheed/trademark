import Image from "next/image";

const featureList = [
  {
    title: "Streamlined Monthly Reports",
    description:
      "Receive concise summaries highlighting conflicts, deadlines, and recommended actions so you can respond quickly.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="8"
          width="28"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 16h16M16 24h16M16 32h10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Affordable Multi-Mark Protection",
    description:
      "Monitor several marks under one plan with tiered pricing starting at $99/month, tailored to your portfolio.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M16 18h16v20H16z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 22h-4v16h8M36 26h4v12h-8M20 12V8h8v4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Professional Attorney Support",
    description:
      "Access experienced attorneys for escalation, dispute strategy, and personalized guidance on high-risk matters.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="17"
          r="6"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M12 36c0-6.627 5.373-12 12-12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M36 36c0-6.627-5.373-12-12-12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const subscriberPerks = [
  { title: "1000+", description: "Legal forms included at no additional cost" },
  { title: "Free 15 min call", description: "Speak with a U.S. attorney" },
];

export default function TrademarkMonitoringFeatures() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20">
        <div className="relative flex w-full max-w-xl flex-col gap-6">
          <div className="relative overflow-hidden rounded-[36px] shadow-[0_40px_120px_-80px_rgba(33,33,33,0.7)]">
            <Image
              src="/monitoring.png"
              alt="Illustration of brand guardianship in progress"
              width={520}
              height={520}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full space-y-10">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)]">
              Secure Your Trademark Today
            </p>
            <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
              Start Monitoring Now!
            </h2>
          </div>
          <div className="space-y-4">
            {featureList.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-[28px] border border-[#E0E0E0] bg-white px-6 py-5 shadow-[0_20px_80px_-70px_rgba(33,33,33,0.6)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6c4cb1]/12 text-[#6c4cb1]">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                    {feature.title}
                  </h3>
                </div>
                <p className="pl-16 text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-6 rounded-[32px] bg-[#F5F5F5] p-6">
            <p className="text-center text-lg font-semibold text-[#6c4cb1] font-[var(--font-heading)] sm:text-xl">
              FREE Benefits for Trademark Monitoring Subscribers
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {subscriberPerks.map((perk) => (
                <div
                  key={perk.title}
                  className="flex flex-col items-center gap-2 rounded-[24px] border border-[#6c4cb1]/25 bg-white px-4 py-5 text-center shadow-[0_18px_70px_-70px_rgba(33,33,33,0.6)]"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#6c4cb1]/15 text-[#6c4cb1]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="m8.293 13.293 5-5a1 1 0 0 1 1.414 1.414l-5.707 5.707a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 5.414 10.293l2.879 2.879Z" />
                    </svg>
                  </span>
                  <p className="text-base font-semibold text-[#212121] font-[var(--font-heading)]">
                    {perk.title}
                  </p>
                  <p className="text-sm text-[#333333] font-[var(--font-body)]">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
