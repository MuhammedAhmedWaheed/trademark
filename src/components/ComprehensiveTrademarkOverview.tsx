import Image from "next/image";

export default function ComprehensiveTrademarkOverview() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-16 sm:py-20">
      <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-80 w-80 rounded-full bg-[#6c4cb1]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] left-[-80px] h-72 w-72 rounded-full bg-[#6c4cb1]/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20">
        <div className="relative w-full max-w-lg lg:flex-1">
          <div className="absolute left-6 top-2 h-20 w-20 rounded-full bg-white/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_32px_90px_-60px_rgba(33,33,33,0.55)]">
            <Image
              src="/comprehensive.png"
              alt="Comprehensive trademark search dashboard preview"
              width={720}
              height={480}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
        <div className="w-full space-y-6 text-left lg:flex-1">
          <h2 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            What is a <span className="text-[#6c4cb1]">Comprehensive</span>{" "}
            Trademark Search?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            A comprehensive trademark search goes far beyond a quick identical
            match lookup. Our legal team reviews USPTO filings, pending
            applications, and common law usage to uncover conflicts that could
            block your registration before you invest in filing.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            We identify sound-alike marks, similar visuals, and related
            categories to highlight real risks. You receive a guided report with
            attorney commentary so you can file with confidence or pivot your
            brand strategy.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-28px_rgba(33,33,33,0.65)] transition hover:bg-[#5a3aa4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:text-base font-[var(--font-heading)]"
          >
            Get Search Report
          </button>
        </div>
      </div>
    </section>
  );
}
