import Image from "next/image";
import { Search as SearchIcon } from "lucide-react";

export default function FreeTrademarkSearchSimilar() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="relative flex flex-1 justify-center">
          <div className="relative w-full max-w-[560px]">
            <div className="relative aspect-[1120/928] overflow-hidden rounded-[36px]">
              <Image
                src="/freetrademark3.png"
                alt="Competitor trademark search workflow showcasing filings"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
            Competitive Insights
          </p>
          <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.4rem] font-[var(--font-heading)]">
            Search trademarks filed by <span className="text-[#6c4cb1]">competing companies</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Browse millions of filings to stay ahead. Track competitor registrations, renewals, and abandonments to plan smarter brand moves before conflicts hit your desk.
          </p>
          <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
            Legal Mark Experts makes monitoring effortless with alerts and curated intel tailored to the marks and industries you care about most.
          </p>

          <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex flex-1 items-center rounded-full border border-[#e0e0e0] bg-white px-4 py-3 shadow-[0_26px_70px_-60px_rgba(33,33,33,0.38)] sm:py-3.5">
              <SearchIcon className="mr-3 h-5 w-5 text-[#6c4cb1]" strokeWidth={1.8} />
              <input
                type="text"
                placeholder="Enter owner name e.g. Nike"
                className="w-full border-none bg-transparent text-sm text-[#212121] outline-none placeholder:text-[#8d8fa3] sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-10 sm:py-3.5"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
