import Image from "next/image";
import Link from "next/link";

export default function TrademarkOfficeActionHero() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex w-full flex-col gap-12 lg:max-w-xl">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-[#ebe2ff] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#6c4cb1] sm:text-sm font-[var(--font-heading)]">
              Office action guidance
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[#212121] sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
              Respond to an <span className="text-[#6c4cb1]">Office Action</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">
              Did you receive an Office action identifying problems with your trademark application? Our attorney-led
              service will help you file an office action response quickly and accurately.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/trademark-revival-form"><button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-[22px] bg-[#6c4cb1] px-8 text-sm font-semibold text-white transition duration-300 hover:bg-[#5a3f96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:h-14 sm:text-base font-[var(--font-heading)]"
              >
                Get Started
              </button></Link>
              <span className="text-xs text-[#333333] sm:text-sm font-[var(--font-body)]">
                Talk to an attorney within one business day.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image src="/inclogo.png" alt="Inc. 500 laurel badge" width={44} height={44} />
              </div>
              <div className="text-sm text-[#212121] sm:text-base font-[var(--font-body)] leading-snug">
                <span className="block font-semibold">Inc500 Company</span>
                <span className="block text-[#333333]">for 4 consecutive years</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image src="/onelogo.png" alt="#1 laurel badge" width={84} height={84} />
              </div>
              <div className="text-sm text-[#212121] sm:text-base font-[var(--font-body)] leading-snug">
                <span className="block font-semibold">No 1 Trademark filing</span>
                <span className="block text-[#333333]">service in the USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:max-w-lg">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[#efe7ff] blur-2xl lg:block" aria-hidden />
          <div className="absolute -right-3 bottom-8 hidden h-20 w-20 rounded-full bg-[#e3d7ff] blur-2xl lg:block" aria-hidden />
          <div className="relative rounded-[40px] shadow-[0_40px_120px_-80px_rgba(108,76,177,0.55)] sm:p-8">
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src="/trademarkofficeaction1.jpg"
                alt="Trademark attorney reviewing an office action letter"
                width={560}
                height={520}
                className="h-auto w-full object-cover"
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
