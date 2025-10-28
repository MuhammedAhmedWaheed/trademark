"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs?: FAQItem[];
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question:
      "What is the difference between a common law trademark and a federally registered trademark?",
    answer:
      "A common law trademark provides limited geographic rights based on use and reputation alone. A federally registered trademark, filed with the USPTO, delivers nationwide enforcement, presumptive ownership in all 50 states, eligibility for statutory damages, and the ability to display the ® symbol for maximum brand protection.",
  },
  {
    question: "What is the USPTO classification system and why does it matter?",
    answer:
      "The USPTO follows the international Nice Classification system, which includes 45 classes: 34 for goods and 11 for services. Selecting the right class or combination of classes is essential. Filing in the wrong class can trigger refusals or restrict your enforcement scope. Our team identifies the precise classes aligned with your offerings.",
  },
  {
    question:
      "Can I file a trademark under multiple classes, and how does that impact cost and strategy?",
    answer:
      "Yes. Filing across multiple classes broadens your protection and is ideal for brands that sell products and services in different categories. Each class requires a separate USPTO fee and influences your risk profile and maintenance obligations. We craft multi-class strategies for brands planning to scale.",
  },
  {
    question:
      "How does the USPTO examine a trademark application, and what are the most common refusal reasons?",
    answer:
      "A USPTO examining attorney reviews the application for compliance with federal trademark law. Common refusal reasons include likelihood of confusion with an existing mark under Section 2(d), descriptiveness under Section 2(e)(1), or improper specimens. We structure filings to avoid these issues and respond to Office Actions when necessary.",
  },
  {
    question: "What is an Office Action, and how critical is a timely response?",
    answer:
      "An Office Action is an official USPTO notice outlining legal or procedural problems. If you fail to respond within the 3 or 6 month deadline, the application is abandoned. Our specialists prepare responses with the right legal arguments, disclaimers, or amended specimens to keep your application active.",
  },
  {
    question: "Can an abandoned trademark be revived, and what is the process?",
    answer:
      "Yes. If the abandonment was unintentional, you can file a Petition to Revive within two months of the Notice of Abandonment. The petition requires a sworn statement, the appropriate fees, and proof of continued intent to use the mark. We manage each step to restore your trademark to pending status quickly.",
  },
  {
    question:
      "How does trademark monitoring work, and why is it necessary after registration?",
    answer:
      "The USPTO does not police your mark. Without active monitoring, infringers can file confusingly similar marks or misuse your brand online. Our monitoring service tracks new USPTO filings, domains, and web use to deliver alerts so you can take swift enforcement action and maintain exclusivity.",
  },
  {
    question:
      "Can I transfer or assign ownership of a trademark, and what documents are needed?",
    answer:
      "Trademarks are transferable assets. A written Assignment Agreement, including the mark's goodwill, must be recorded with the USPTO along with the required cover sheet and fee. We prepare and submit assignment documents to ensure compliant, uninterrupted ownership transfers.",
  },
  {
    question: "What are maintenance deadlines and what happens if I miss them?",
    answer:
      "Federal registrations require a Section 8 Declaration between the 5th and 6th year, followed by combined Section 8 and 9 filings every 10 years. Missing a deadline leads to automatic cancellation. We track every milestone and file renewals on time to keep your protection intact.",
  },
  {
    question:
      "Why should I file under intent to use if my business has not launched yet?",
    answer:
      "An Intent-to-Use application lets you reserve a trademark before you enter the market. It locks in your priority date while you prepare to launch. Once your product or service is live, we submit a Statement of Use to finalize registration, ensuring no one else claims your brand name in the meantime.",
  },
];

export default function FAQ({ faqs }: FAQProps) {
  const data = Array.isArray(faqs) && faqs.length ? faqs : FAQ_ITEMS;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#f5f2ff] via-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f7fb] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#6c4cb1]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#6c4cb1]">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-[#212121] sm:text-4xl font-[var(--font-heading)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#4b4b63] sm:text-lg font-[var(--font-body)]">
            Trademark clarity from trusted U.S. experts.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-4 sm:grid-cols-2">
          {data.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className={`group relative flex flex-col rounded-2xl border bg-white p-5 shadow-[0_12px_30px_-24px_rgba(108,76,177,0.65)] transition hover:-translate-y-1 hover:shadow-[0_20px_38px_-26px_rgba(108,76,177,0.7)] ${
                  isOpen ? "border-[#6c4cb1]/60" : "border-[#e4e6f2]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm font-semibold text-[#212121]">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ecff] text-[#6c4cb1] transition group-hover:bg-[#e6defc] group-hover:text-[#5537a0]">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden text-sm text-[#4b4b63] transition-[max-height,opacity,margin] duration-300 ease-out ${
                    isOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <span className="text-[14px] font-semibold uppercase tracking-[0.30em] text-[#6c4cb1]">
            Still Have Questions?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#6c4cb1] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_-28px_rgba(108,76,177,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c4cb1]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
