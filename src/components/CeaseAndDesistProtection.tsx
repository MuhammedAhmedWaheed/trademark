const safeguards = [
  "Creates a documented record showing you actively police your trademark.",
  "Articulates the legal grounds and consequences in language infringers must take seriously.",
  "Puts the burden on the offender to prove compliance without escalating to court.",
];

export default function CeaseAndDesistProtection() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="mx-auto w-full max-w-5xl rounded-[40px] border border-[#E0E0E0] bg-white px-6 py-12 shadow-[0_32px_110px_-80px_rgba(33,33,33,0.65)] sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
              How a Cease &amp; Desist Letter Protects Your Trademark
            </h2>
            <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              A professionally drafted cease &amp; desist letter compels infringers to stop using your mark while preserving proof that you defend your brand. It often resolves conflicts before they escalate into costly disputes.
            </p>
            <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              DIY notices can weaken your claim or leave loopholes. Our attorneys tailor every letter to your industry, including the right legal authority and tone to secure fast compliance.
            </p>
          </div>
          <div className="space-y-6 rounded-[32px] bg-[#6c4cb1]/6 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6c4cb1] font-[var(--font-heading)]">
              What you gain
            </p>
            <ul className="space-y-4 text-left">
              {safeguards.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#333333] font-[var(--font-body)]">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6c4cb1] shadow-sm">
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                      <path
                        d="m3.5 8.5 2.5 2.5 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
              >
                Discuss My Situation
                <span className="ml-2 h-0.5 w-6 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
