import Image from "next/image";

function SatisfactionBadge() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      <circle cx="32" cy="32" r="30" fill="#F3ECFF" stroke="#6c4cb1" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="22" stroke="#6c4cb1" strokeWidth="1" strokeDasharray="5 5" />
      <path
        d="m23 32.5 6 6 12-12"
        stroke="#6c4cb1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewStars() {
  return (
    <svg viewBox="0 0 120 32" fill="none" className="h-10 w-auto">
      <path
        d="m16 2 4.04 8.18 9.03 1.31-6.54 6.38 1.54 9-8.07-4.25-8.07 4.25 1.54-9-6.54-6.38 9.03-1.31L16 2Z"
        fill="#6c4cb1"
      />
      <g fill="#6c4cb1">
        <rect x="48" y="8" width="10" height="10" rx="1.5" />
        <rect x="62" y="8" width="10" height="10" rx="1.5" />
        <rect x="76" y="8" width="10" height="10" rx="1.5" />
        <rect x="90" y="8" width="10" height="10" rx="1.5" />
        <rect x="104" y="8" width="10" height="10" rx="1.5" />
      </g>
    </svg>
  );
}

export default function CeaseAndDesistHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,76,177,0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Cease &amp; Desist Services
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl lg:text-[3.2rem] lg:leading-[1.1] font-[var(--font-heading)]">
              Protect Your Brand with a{" "}
              <span className="text-[#6c4cb1]">Professionally Drafted</span>{" "}
              Cease &amp; Desist Letter
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Take the first step against infringement with clear, attorney-backed
              correspondence that compels infringers to stop without escalating
              to litigation.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] font-[var(--font-heading)]"
            >
              Get My Letter Now
            </a>
          </div>
          <div className="flex flex-col gap-6 rounded-[28px] border border-[#E0E0E0] bg-[#F7F4FE] p-6 shadow-[0_16px_70px_-60px_rgba(33,33,33,0.6)] sm:flex-row sm:items-center sm:gap-10">
            <div className="flex items-center gap-4">
              <SatisfactionBadge />
              <div>
                <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  100% Satisfaction
                </p>
                <p className="text-xs text-[#333333] font-[var(--font-body)]">Guaranteed</p>
              </div>
            </div>
            <div className="hidden h-12 w-px bg-[#E0E0E0] sm:block" aria-hidden="true" />
            <div className="flex items-center gap-4">
              <ReviewStars />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#212121] font-[var(--font-heading)]">
                  Rated 4.8 / 5
                </p>
                <p className="text-xs text-[#333333] font-[var(--font-body)]">
                  by 1,000+ business owners
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full justify-center">
          <div className="relative w-full max-w-lg">
            <div className="relative overflow-hidden rounded-[44px] border border-[#E0E0E0] bg-white shadow-[0_30px_100px_-80px_rgba(33,33,33,0.65)]">
              <Image
                src="/ceaseanddesist.jpg"
                alt="Attorney preparing cease and desist letter"
                width={620}
                height={520}
                sizes="(max-width: 1024px) 100vw, 620px"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
