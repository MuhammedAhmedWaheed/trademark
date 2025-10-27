import Image from "next/image";
import Link from "next/link";

export default function RenewalPromptCTA() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-[28px] border border-[#dad0f5] bg-gradient-to-br from-white via-[#f8f6ff] to-[#ede8ff] px-6 py-8 shadow-[0_28px_60px_-50px_rgba(61,45,120,0.45)] sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-10">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[#dad0f5]/70 bg-white shadow-[0_20px_45px_-28px_rgba(47,33,98,0.35)] sm:h-44 sm:w-44">
            <Image
              src="/trademarkrenewal-2.png"
              alt="Professional reviewing trademark documents"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col items-center gap-4 text-center sm:items-start sm:text-left">
            <h2 className="text-xl text-[#212121] sm:text-2xl font-[var(--font-heading)]">
              Keep Your Trademark <span className="text-[#6c4cb1]">Active &amp; Protected</span>
            </h2>
            <p className="text-sm text-[#333333] sm:text-base font-[var(--font-body)]">
              Stay ahead of maintenance deadlines and ensure your registration remains enforceable with proactive renewal support from our specialists.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6c4cb1]/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
