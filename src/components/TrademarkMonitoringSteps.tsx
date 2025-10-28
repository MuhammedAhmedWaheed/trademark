import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Enter your mark name",
    description:
      "Tell us which trademarks, classes, and key terms you need us to watch.",
  },
  {
    number: "02",
    title: "Select a monitoring plan",
    description:
      "Pick the coverage tier that fits your portfolio and industry reach.",
    accent: true,
  },
  {
    number: "03",
    title: "Launch ongoing protection",
    description:
      "Our specialists track filings and marketplace use, sending you concise alerts.",
  },
];

export default function TrademarkMonitoringSteps() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 text-center sm:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)]">
            How it works
          </p>
          <h2 className="text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            3 Steps to Secure Your Brand
          </h2>
          <p className="text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
            Set trademark monitoring in motion in minutes and stay ahead of unauthorized use.
          </p>
        </div>
        <div className="rounded-[32px] border border-[#E0E0E0] bg-white px-6 py-10 shadow-[0_24px_90px_-70px_rgba(33,33,33,0.6)]">
          <ol className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.title}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-2 text-lg font-semibold font-[var(--font-heading)] ${
                    step.accent
                      ? "border-[#6c4cb1] bg-[#6c4cb1]/10 text-[#6c4cb1]"
                      : "border-[#212121]/15 bg-[#F5F5F5] text-[#212121]"
                  }`}
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-semibold text-[#212121] font-[var(--font-heading)] sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <Link
              href="/trademark-registration-form"
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
            >
              Secure Your Brand Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
