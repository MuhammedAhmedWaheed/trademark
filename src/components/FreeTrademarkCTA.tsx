import Image from "next/image";
import Link from "next/link";

export default function FreeTrademarkCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[32px] border border-[#e9e9f1] bg-white px-6 py-8 shadow-[0_38px_110px_-72px_rgba(33,33,33,0.35)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="space-y-4 text-center sm:text-left">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#212121] sm:text-2xl font-[var(--font-heading)]">
                Know your <span className="text-[#6c4cb1]">trademark</span> before you file
              </h2>
              <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
                Get an attorney-guided search and risk analysis from Legal Mark Experts starting at just <span className="text-[#6c4cb1] font-semibold">$199</span>.
              </p>
            </div>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-8">
                Get Search Report
              </button>
            </Link>
          </div>

          <div className="relative flex justify-center sm:justify-end">
            <div className="relative h-[140px] w-[280px] overflow-hidden rounded-[24px] border border-[#edf0f8] shadow-[0_32px_110px_-80px_rgba(33,33,33,0.5)] sm:h-[160px] sm:w-[340px] lg:h-[180px] lg:w-[380px]">
              <Image
                src="/employee.png"
                alt="Legal Mark Experts team ready to deliver trademark search support"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
