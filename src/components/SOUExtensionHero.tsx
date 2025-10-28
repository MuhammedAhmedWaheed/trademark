"use client";

import Image from "next/image";
import Link from "next/link";

export default function SOUExtensionHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-[#F5F5F5]">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#212121]">
          Not Started Using Your Trademark?
        </h2>

        <p className="text-[#333] text-base md:text-lg mb-6 leading-relaxed">
          You could file for a <span className="text-[#6c4cb1] font-semibold">Trademark Statement of Use (SOU) Extension</span>.
          If you need more time to use your mark, develop your product, or start
          your service, you can apply for an extension. Each extension grants 6
          months, and you can request up to five extensions — totaling{" "}
          <strong>30 months (2.5 years)</strong> from the date of your Notice of
          Allowance.
        </p>

        <Link href="/contact"><button className="bg-[#6c4cb1] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5b3d9d] transition-all">
          File SOU Extension Now
        </button></Link>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          src="/statement10.png"
          alt="Not Started Image"
          width={420}
          height={420}
          className="rounded-2xl shadow-lg object-cover"
        />

        <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2">
          <span className="text-[#6c4cb1] text-lg font-semibold">⏱</span>
          <div>
            <p className="text-sm font-semibold text-[#212121]">
              Extend Your Time!
            </p>
            <p className="text-xs text-gray-500">Up to 5 SOU Extensions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
