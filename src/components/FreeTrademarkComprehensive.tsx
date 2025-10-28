import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

const BENEFITS = [
  "It highlights marks that may not be identical but could still trigger conflicts because of close similarity.",
  "You gain insight into potential issues like similar names, logos, or phonetic matches before submitting to the USPTO.",
];

export default function FreeTrademarkComprehensive() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <div className="relative flex flex-1 justify-center">
          <div className="w-full max-w-[420px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_42px_120px_-78px_rgba(33,33,33,0.45)]">
              <Image
                src="/new1.png"
                alt="Attorney reviewing comprehensive trademark search matches"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c4cb1] font-[var(--font-heading)] sm:text-sm">
              Deep USPTO Coverage
            </p>
            <h2 className="text-2xl font-semibold text-[#212121] sm:text-[2.35rem] font-[var(--font-heading)]">
              Comprehensive USPTO trademark search
            </h2>
          </div>

          <ul className="space-y-4">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-4 text-left">
                <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-[#eae3ff] text-[#6c4cb1] shadow-[0_16px_44px_-30px_rgba(108,76,177,0.75)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <p className="text-sm leading-relaxed text-[#333333] sm:text-base font-[var(--font-body)]">{item}</p>
              </li>
            ))}
          </ul>

          <Link href="/services/comprehensive-trademark-search">
            <button className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/35 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1] sm:px-10 sm:py-3.5">
              Comprehensive Search
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
