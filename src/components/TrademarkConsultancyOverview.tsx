import Link from "next/link";

const infoCards = [
  {
    title: "Enhance Chances",
    description:
      "Start with a complimentary clearance scan so you understand potential conflicts before investing in your filing.",
    accent: "#FDEBD2",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 14v10l6 3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Efficient Process",
    description:
      "Receive a tailored advisory within 24 hours and move ahead quickly when your mark is clear to file.",
    accent: "#FCE4EC",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 text-[#6c4cb1]"
        aria-hidden="true"
      >
        <path
          d="M24 8 8 14v10c0 10.493 6.933 18.787 16 20 9.067-1.213 16-9.507 16-20V14Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="m19 24 3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TrademarkConsultancyOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[18rem] -translate-x-1/2 rounded-full bg-[#6c4cb1]/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full space-y-6 lg:max-w-lg">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Free Trademark Search
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            An efficient and reliable free trademark search service.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            We designed this complimentary search to be straightforward and
            empowering—no legal experience required. Our consultants guide you
            through identifying risks so you can take confident next steps.
          </p>
          <div>
            <Link
              href="/services/free-trademark-search"
              className="group inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
            >
              Trademark Search
              <span className="ml-2 h-0.5 w-6 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-xl">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col gap-4 rounded-[32px] bg-white/90 p-6 shadow-[0_28px_80px_-70px_rgba(33,33,33,0.6)] ring-1 ring-[#f0f0f0] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_110px_-70px_rgba(33,33,33,0.65)]"
              style={{ backgroundColor: card.accent }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_18px_40px_-30px_rgba(33,33,33,0.6)]">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#212121] font-[var(--font-heading)]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#333333] font-[var(--font-body)]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
