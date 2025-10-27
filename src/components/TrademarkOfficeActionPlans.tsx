const plans = [
  {
    name: "Simple",
    price: "$499",
    items: [
      "Disclaimer issues",
      "Specimen refusal or substitute specimen submission",
      "Request for information or clarifying ownership details",
      "Color claims",
      "U.S. trademark attorney prepares your response",
    ],
  },
  {
    name: "Medium",
    price: "$799",
    items: [
      "Issues with descriptions or classifications",
      "Amendments to identification of goods and services",
      "Requests for information needing limited business research",
      "Merely decorative feature refusals",
      "U.S. trademark attorney prepares your response",
    ],
  },
  {
    name: "Complex",
    price: "$1299",
    items: [
      "Likelihood of confusion refusals",
      "Refusals based on descriptiveness or genericness",
      "Primarily geographically descriptive issues",
      "Representing a flag, living person, or surname",
      "U.S. trademark attorney prepares your response",
    ],
  },
];

export default function TrademarkOfficeActionPlans() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold leading-tight text-[#212121] sm:text-3xl lg:text-4xl font-[var(--font-heading)]">
            We offer <span className="text-[#6c4cb1]">3 plans</span> for drafting your office action response
          </h2>
          <p className="mt-4 text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
            Choose the level that matches the complexity of your office action. Every plan includes direct guidance from a licensed attorney.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full flex-col rounded-[28px] border border-transparent bg-white p-6 shadow-[0_50px_120px_-90px_rgba(108,76,177,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_60px_140px_-80px_rgba(108,76,177,0.55)] sm:p-7"
            >
              <header className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-[#212121] font-[var(--font-heading)]">{plan.name}</h3>
                <span className="text-lg font-semibold text-[#6c4cb1] font-[var(--font-heading)]">{plan.price}</span>
              </header>
              <ul className="mt-6 space-y-3 text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#ebe2ff] text-[#6c4cb1]">
                      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                        <path d="m4 8 2.5 2.5L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
