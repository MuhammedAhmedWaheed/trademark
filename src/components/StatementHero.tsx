"use client";

import Image from "next/image";

export default function StatementHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-[#F5F5F5]">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#212121]">
          File <span className="text-[#6c4cb1]">Statement of Use</span> For Your Trademark
        </h1>
        <p className="text-[#333] text-base md:text-lg mb-6 leading-relaxed">
          If your application is based on Intent to Use, you will need to submit
          evidence of using your mark to the USPTO after you receive a Notice of Allowance.
        </p>

        {/* Ratings */}
        <div className="mt-6 flex flex-wrap gap-6">
          {/* Shopper Approved */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">Shopper Approved</p>
              <p className="text-xs sm:text-sm text-gray-500">
                Rated 4.7/5 by 1000+ users
              </p>
            </div>
            <div className="mt-1 sm:mt-0">
              <div className="inline-flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-white px-2 py-1">
                <Image
                  src="/logo1.png"
                  alt="Shopper Approved"
                  width={120}
                  height={40}
                  className="h-7 w-auto sm:h-8 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">Trustpilot</p>
              <p className="text-xs sm:text-sm text-gray-500">
                Rated 4.6/5 by 1000+ users
              </p>
            </div>
            <div className="mt-1 sm:mt-0">
              <div className="inline-flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-white px-2 py-1">
                <Image
                  src="/logo2.png"
                  alt="Trustpilot"
                  width={110}
                  height={40}
                  className="h-7 w-auto sm:h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          src="/extension4.png"
          alt="Statement of Use Hero"
          width={420}
          height={420}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-lg px-4 py-2 flex items-center gap-2">
          <span className="text-[#6c4cb1] text-lg font-semibold">⏱</span>
          <div>
            <p className="text-sm font-semibold text-[#212121]">Your Brand</p>
            <p className="text-xs text-gray-500">Our Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
