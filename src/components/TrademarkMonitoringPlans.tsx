import Link from "next/link";
const plans = [
  {
    name: "Basic Monitor",
    description: "Ideal for a single mark coverage with essential alerts.",
    price: "$49",
    highlight: false,
    accent: "border-[#E0E0E0]",
    buttonColor: "bg-[#212121] hover:bg-[#333333]",
    features: [
      "USPTO new-filing alerts for your mark and confusingly similar terms.",
      "Monthly summary recaps delivered by email.",
      "Attorney review of top conflicts with recommended next steps.",
    ],
  },
  {
    name: "Standard Monitor",
    description: "Expanded protection for growing portfolios and online use.",
    price: "$299",
    highlight: true,
    accent: "border-[#6c4cb1]",
    buttonColor: "bg-[#6c4cb1] hover:bg-[#5a3aa4]",
    features: [
      "Includes all Basic features plus marketplace and domain watch.",
      "Quarterly strategy call with a trademark attorney.",
      "Draft response templates for common infringements.",
    ],
  },
  {
    name: "Premium Monitor",
    description: "Comprehensive monitoring with proactive legal support.",
    price: "$539",
    highlight: false,
    accent: "border-[#433079]",
    buttonColor: "bg-[#433079] hover:bg-[#37266a]",
    features: [
      "Includes Standard features plus international watch coverage.",
      "Rush escalation with 48-hour attorney analysis.",
      "Cease & desist drafting assistance for high-risk conflicts.",
    ],
  },
];

export default function TrademarkMonitoringPlans() {
  return (
    <section className="relative overflow-hidden bg-[#6c4cb1] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_65%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 text-center text-white sm:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70 font-[var(--font-heading)]">
            Plans & Pricing
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl font-[var(--font-heading)]">
            Choose the Monitoring Package that fits your brand
          </h2>
        </div>
        <div className="grid gap-6 text-left lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col gap-6 rounded-[32px] border bg-white p-8 shadow-[0_32px_110px_-80px_rgba(15,28,63,0.75)] transition-transform duration-300 ${
                plan.highlight
                  ? "translate-y-[-12px] ring-2 ring-[#6c4cb1]/60 ring-offset-2 ring-offset-white"
                  : "ring-1 ring-transparent"
              } ${plan.accent}`}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6c4cb1] font-[var(--font-heading)]">
                    {plan.name}
                  </p>
                  {plan.highlight ? (
                    <span className="rounded-full bg-[#6c4cb1]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6c4cb1]">
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <p className="text-xs text-[#333333] font-[var(--font-body)]">
                  {plan.description}
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#212121] font-[var(--font-heading)]">
                  {plan.price}
                </p>
                <p className="text-xs text-[#333333] font-[var(--font-body)]">
                  per month + any applicable filing fees
                </p>
              </div>
              <Link href="/contact">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)] ${plan.buttonColor}`}
                >
                  {plan.highlight ? "Choose Standard" : `Choose ${plan.name.split(" ")[0]}`}
                </button>
              </Link>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Includes:
                </p>
                <ul className="space-y-2 text-sm text-[#333333] font-[var(--font-body)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#6c4cb1]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
