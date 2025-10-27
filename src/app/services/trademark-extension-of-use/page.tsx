"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function ExtensionOfUsePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndexAbout, setOpenIndexAbout] = useState<number | null>(0);

  const faqsAbout = [
    {
      question: "What happens if you do not file an extension?",
      answer:
        "If you do not file an extension before the deadline, the USPTO will treat your application as abandoned and you may lose your original filing date.",
    },
    {
      question: "What is Intent to Use in Trademark extension?",
      answer:
        "An Intent to Use (ITU) application reserves rights to a mark you plan to use. If usage is not ready by your deadline, you can request an extension to maintain your application.",
    },
    {
      question: "What is USPTO Extension of Time?",
      answer:
        "It’s a six-month extension to file your Statement of Use (SOU). You can request up to five extensions (maximum 30 additional months).",
    },
  ];

  const faqsBottom = [
    {
      question: "What is an extension of time?",
      answer:
        "Extra time granted by the USPTO before filing your Statement of Use. Each extension adds six months so you can show use in commerce later.",
    },
    {
      question: "When should I file an extension?",
      answer:
        "By your current deadline—six months after you receive the Notice of Allowance—if you are not yet using the mark in commerce.",
    },
    {
      question: "How many extensions can I get?",
      answer:
        "You can request up to five extensions for a total of 30 additional months, as long as you submit on time each period.",
    },
    {
      question: "What happens if I miss the extension deadline?",
      answer:
        "Your application will be abandoned and you would need to start over, potentially losing your original priority date.",
    },
  ];

  return (
    <main className="font-[var(--font-body)] text-[#212121] bg-white">
      {/* ========================= HERO ========================= */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-16 bg-[#F5F5F5]">
        <div className="md:w-1/2">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold leading-tight mb-4">
            File <span className="text-[#6c4cb1]">Extension of Use</span> For
            Your Trademark
          </h1>
          <p className="text-[#333] text-base md:text-lg mb-6">
            If you need more time before filing your Statement of Use, you can
            request an extension. Each extension gives you 6 additional months,
            which gives you more time to register your trademark. Start now!
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your serial number"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-[#6c4cb1]"
            />
            <button className="bg-[#6c4cb1] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5b3d9d] transition-all">
              File Extension of Use
            </button>
          </div>

{/* Ratings + logos */}
<div className="flex flex-wrap gap-6 mt-6">
  {/* Shopper Approved */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
    {/* Text first on mobile */}
    <div className="leading-tight">
      <p className="text-sm font-semibold text-gray-900">Shopper Approved</p>
      <p className="text-xs sm:text-sm text-gray-500">Rated 4.7/5 by 1000+ users</p>
    </div>
    {/* Logo under text on mobile; neat badge so it doesn’t look squished */}
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
  </div>

  {/* Trustpilot */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
    <div className="leading-tight">
      <p className="text-sm font-semibold text-gray-900">Trustpilot</p>
      <p className="text-xs sm:text-sm text-gray-500">Rated 4.6/5 by 1000+ users</p>
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

        <div className="relative md:w-1/2 flex justify-center">
          <Image
            src="/extension1.png"
            alt="Extension of Use"
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

      {/* ========================= ABOUT ========================= */}
      <section className="px-6 md:px-20 py-14 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
              About USPTO{" "}
              <span className="text-[#6c4cb1]">Extension of Use</span> For Your
              Trademark
            </h2>
            <p className="text-gray-600 max-w-prose mb-6">
              Learn what an Extension of Time means for your Intent-to-Use
              application and how it helps you hold your rights while you
              prepare to use your mark in commerce.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#6c4cb1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5b3d9d] transition-all">
              Get Started
            </Link>
          </div>

          <div className="space-y-4">
            {faqsAbout.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndexAbout(openIndexAbout === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-[#212121] hover:bg-[#F5F5F5] transition-all"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 text-[#6c4cb1] transition-transform ${
                      openIndexAbout === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-5 transition-all duration-300 overflow-hidden ${
                    openIndexAbout === index ? "max-h-40 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHEN TO FILE ========================= */}
      <section className="bg-[#F5F5F5] px-6 md:px-20 py-16 text-center rounded-lg">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-3">
            <Image
              src="/logo3.png"
              alt="Question mark"
              width={44}
              height={44}
              className="h-11 w-11"
            />
          </div>
          <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
            When to File <span className="text-[#6c4cb1]">Extension of Use</span> ?
          </h3>
          <p className="text-[#333] text-base leading-relaxed">
            You can file an extension before your six-month deadline, starting
            from your Notice of Allowance if you haven’t yet used the mark. If
            you have already started using the mark, you must file a Statement
            of Use instead of an extension.
          </p>
          <a
            href="#"
            className="text-[#6c4cb1] underline mt-4 inline-block font-medium hover:text-[#5b3d9d]"
          >
            What’s Notice of Allowance?
          </a>
        </div>
      </section>

      {/* ========================= TESTIMONIALS (now before FAQ) ========================= */}
      <section className="px-6 md:px-20 py-16 bg-white text-center">
        <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-3">
          See what <span className="text-[#6c4cb1]">our customers</span> think
          about us
        </h2>
        <p className="text-gray-600 mb-10">Don’t Just Take Our Word for It!</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#F5F5F5] p-6 rounded-xl shadow hover:shadow-md transition-all text-left">
            <h4 className="font-semibold text-lg mb-2 text-[#212121]">
              Could not be more happy
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              I have been working with attorney Michael Markos and his team for
              several years on multiple items. They just helped me again acquire
              a new trademark. They are punctual and keep your business needs
              organized with effective follow up.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/extension2.png"
                alt="Brent Agin"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="font-medium text-sm">Brent Agin MD</p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-xl shadow hover:shadow-md transition-all text-left">
            <h4 className="font-semibold text-lg mb-2 text-[#212121]">
              Consistently good
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              I’ve used Legal Mark Expert for six or seven TM applications. We’ve been
              successful with all of them, even getting registrations on ones
              that started out somewhat doubtful. I’ve been very happy with my
              experience.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/extension2.png"
                alt="Jeff Moreau"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="font-medium text-sm">Jeff Moreau</p>
            </div>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-xl shadow hover:shadow-md transition-all text-left">
            <h4 className="font-semibold text-lg mb-2 text-[#212121]">
              They simplify the process
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              I have been using Legal Mark Expert for three years now. 
              They have helped me navigate the typically confusing TM process with 
              solid guidance and expert advice for protecting my businesses. you can use Legal Mark Express 
              and get expert, efficient guidance from veteran Trademark lawyers. Highly recommend!
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/extension2.png"
                alt="Jeff Moreau"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="font-medium text-sm">Jimmy</p>
            </div>
          </div>
        </div>
      </section>

{/* ========================= FAQ (at last) ========================= */}
<section className="px-6 md:px-20 pb-16">
  <h2 className="text-center font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-8">
    Frequently Asked <span className="text-[#6c4cb1]">Questions</span>
  </h2>

  <div className="mx-auto max-w-4xl space-y-4">
    {faqsBottom.map((item, index) => (
      <div
        key={index}
        className="rounded-xl border border-gray-200 bg-white shadow-sm"
      >
        <button
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className="w-full flex items-start gap-4 px-5 py-4 text-left"
        >
          {/* ✅ Replaced dot with tick image */}
          <span className="mt-1 grid place-items-center">
            <Image
              src="/tick.png"
              alt="tick"
              width={45}
              height={45}
              className="object-contain"
            />
          </span>

          <div className="flex-1">
            <p className="font-semibold text-gray-900">{item.question}</p>
            <div
              className={`text-sm text-gray-600 transition-all overflow-hidden ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              {item.answer}
            </div>
          </div>

          <ChevronDown
            className={`ml-2 mt-1 h-5 w-5 text-[#6c4cb1] transition-transform ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}
