"use client";

import Image from "next/image";
import Link from "next/link";

export default function Ownership() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#212121]">
          Transfer Your{" "}
          <span className="text-[#6c4cb1]">Trademark Ownership</span>{" "}
          the Right Way
        </h1>

        <p className="text-[#333] text-base md:text-lg mb-6 leading-relaxed">
          Whether you are selling a business or moving assets to an LLC, we will help you
          legally transfer your trademark with ease—prepared and filed by experienced
          attorneys.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-[#6c4cb1] px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#5b3d9d]"
        >
          Get Started
        </Link>

        {/* Ratings Section */}
        <div className="flex flex-wrap gap-6 mt-8">
          {/* Rating Block 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">
                Rated 4.6/5 by 1000+ users
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Satisfaction Guaranteed
              </p>
            </div>
            <div className="mt-1 sm:mt-0">
              <div className="inline-flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-white px-2 py-1">
                <Image
                  src="/logo1.png"
                  alt="Review Rating"
                  width={120}
                  height={40}
                  className="h-7 w-auto sm:h-8 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Rating Block 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">
                100% Satisfaction Guaranteed
              </p>
            </div>
            <div className="mt-1 sm:mt-0">
              <div className="inline-flex items-center justify-center rounded-md ring-1 ring-gray-200 bg-white px-2 py-1">
                <Image
                  src="/logo4.png"
                  alt="Guarantee Logo"
                  width={110}
                  height={40}
                  className="h-7 w-auto sm:h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative md:w-1/2 flex justify-center">
        <Image
          src="/ownership.jpg"
          alt="Trademark Ownership Transfer"
          width={450}
          height={450}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}
