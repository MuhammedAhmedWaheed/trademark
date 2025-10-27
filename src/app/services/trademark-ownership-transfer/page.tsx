// app/ownership-transfer/page.tsx
import Ownership from "@/components/Ownership";
import Link from "next/link";
import {
  FileSignature,
  Users2,
  Stamp,
  ShieldAlert,
  Scale,
  Building2,
  TrendingUp,
  Plus,
} from "lucide-react";

/* --- Data (unchanged above) --- */
const ACCORDION = [
  { title: "Selling or Acquiring a Business", desc: "Transfer trademarks as part of a sale so the new owner receives full rights to use, manage, and enforce the mark." },
  { title: "Transferring to a New Entity", desc: "Move ownership into an LLC or corporation for cleaner records, liability protection, and simpler management." },
  { title: "Reorganizing or Rebranding", desc: "Align trademarks with new product lines or company structures by recording assignments with the USPTO." },
  { title: "Avoiding Legal Complications", desc: "A recorded assignment prevents confusion about who owns the mark—reducing disputes and future risk." },
];

const HOW_STEPS = [
  { icon: <FileSignature className="h-8 w-8 text-[#6c4cb1]" />, title: "Submit Your Details", text: "Fill our short, secure form. Your information is confidential and reviewed by our team." },
  { icon: <Users2 className="h-8 w-8 text-[#6c4cb1]" />, title: "Get Expert U.S. Attorney Assistance", text: "Our attorneys prepare your assignment agreement and manage the filing process end-to-end." },
  { icon: <Stamp className="h-8 w-8 text-[#6c4cb1]" />, title: "Filed with the USPTO", text: "Your signed agreement is recorded with the USPTO—your ownership transfer is officially complete." },
];

const REASONS = [
  { icon: <ShieldAlert className="h-5 w-5" />, title: "Avoid Legal Confusion", text: "If USPTO records still list the previous owner, you could receive legal notices even after a sale." },
  { icon: <Scale className="h-5 w-5" />, title: "Protect Against Ownership Disputes", text: "Without a recorded transfer, a prior owner may still appear as rights holder—causing downstream conflicts." },
  { icon: <Building2 className="h-5 w-5" />, title: "Support Business Restructuring", text: "Moving trademarks to an LLC/Corp builds clarity and asset strength during growth or reorganization." },
  { icon: <TrendingUp className="h-5 w-5" />, title: "Increase Brand & Company Value", text: "Properly assigned marks strengthen your IP portfolio—important for investors, lenders, and M&A." },
];

const SAVES_MORE = [
  { step: "1", title: "Attorney-Led Legal Process", text: "Trademark assignments are prepared by licensed U.S. attorneys to ensure accuracy and compliance." },
  { step: "2", title: "Clear, Flat-Fee Pricing", text: "No hidden costs—complete transfer services with transparency at every step." },
  { step: "3", title: "Avoid Future Disputes", text: "Proper filings protect ownership and reduce the risk of costly legal complications later." },
];

const FAQS = [
  { q: "Do I need an agreement to transfer ownership?", a: "Yes. A signed assignment agreement is required to transfer rights. The agreement is then recorded with the USPTO to update the public record." },
  { q: "Why should I file the assignment with the USPTO?", a: "Recording the assignment puts the world on notice about the new owner, avoids confusion, and helps prevent future disputes over ownership." },
  { q: "Can I transfer a trademark to my own company (LLC)?", a: "Yes. Many owners transfer to an LLC or corporation for liability, tax, and organizational benefits. We prepare and record the assignment properly." },
  { q: "What happens if I don't file the assignment?", a: "USPTO records may still show the prior owner, which can lead to disputes, refused applications, and enforcement problems later." },
  { q: "How long does the process take?", a: "Drafting and signing can be completed quickly; USPTO recording typically takes a few days to a few weeks depending on processing times." },
];

export default function OwnershipTransferPage() {
  return (
    <main className="bg-white text-[#212121]">
      {/* HERO */}
      <Ownership />

      {/* WHAT IS TRANSFER */}
      <section className="px-6 md:px-20 py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold leading-tight mb-4">
              What Is <span className="text-[#6c4cb1]">Trademark Ownership Transfer?</span>
            </h2>
            <p className="text-[#333] text-base md:text-lg leading-relaxed">
              A trademark assignment moves ownership rights from one party to another. The new owner gains full authority to use, manage, and enforce the mark. The process requires a signed agreement and an official USPTO filing to update public records.
            </p>
          </div>

          <div className="space-y-3">
            {ACCORDION.map((item) => (
              <details key={item.title} className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
                <summary className="flex justify-between items-center cursor-pointer list-none font-semibold">
                  {item.title}
                  <span className="text-[#6c4cb1] text-xl font-bold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#333] leading-relaxed">{item.desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

     {/* HOW IT WORKS */}
<section className="relative z-[1] px-6 md:px-20 py-20 text-center bg-white">
  <p className="text-sm font-semibold text-[#6c4cb1] mb-2 uppercase tracking-widest">
    Our Process
  </p>
  <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold mb-12">
    How it Works
  </h2>

  <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
    {HOW_STEPS.map((s) => (
      <div key={s.title} className="flex flex-col items-center text-center">
        <div className="bg-[#f4f1fa] rounded-2xl h-16 w-16 flex items-center justify-center mb-4">
          {s.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
        <p className="text-sm text-[#333] leading-relaxed">{s.text}</p>
      </div>
    ))}
  </div>

  <Link href="/contact"
    className="mt-10 bg-[#6c4cb1] text-white font-semibold px-8 py-3 rounded-lg shadow-lg 
               hover:bg-[#593a9b] focus:outline-none focus:ring-4 
               focus:ring-[#6c4cb1]/40 transition-all duration-200"
  >
    Get Started
  </Link>
</section>

{/* WHY YOU SHOULD TRANSFER */}
<section className="relative px-6 md:px-20 pt-20 pb-24">
  <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-[#f7f7fb] to-transparent pointer-events-none rounded-b-[48px] z-0" />
  <div className="relative z-[1] max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <div className="mx-auto mb-3 h-8 w-8 rounded-full bg-[#f4f1fa] flex items-center justify-center">
        <ShieldAlert className="h-4 w-4 text-[#6c4cb1]" />
      </div>
      <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold">
        <span className="text-[#6c4cb1]">Why You Should Transfer</span>
        <br />
        Trademark Ownership
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      {REASONS.map((r) => (
        <div
          key={r.title}
          className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
        >
          <div className="text-[#6c4cb1]">{r.icon}</div>
          <div>
            <h3 className="font-semibold mb-1">{r.title}</h3>
            <p className="text-sm text-[#333] leading-relaxed">{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ====================== */}
      {/* 1) WHY LME SAVES MORE  */}
      {/* ====================== */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Left-aligned heading with accent bar */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="h-7 w-1.5 rounded-full bg-[#6c4cb1]" />
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold">
                Why Legal Mark Expert <br />
                <span className="text-[#6c4cb1]">Saves You More?</span>
              </h2>
            </div>
          </div>

          {/* Three cards row */}
          <div className="grid gap-6 md:grid-cols-3">
            {SAVES_MORE.map((c) => (
              <div
                key={c.step}
                className="group relative rounded-2xl bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-gray-100 transition-colors hover:bg-[#6c4cb1] hover:text-white"
              >
                {/* small number pill */}
                <div className="absolute -top-3 left-6">
                  <div className="h-8 w-8 rounded-lg bg-[#f0ebfa] text-[#6c4cb1] group-hover:bg-[#7e61c8] group-hover:text-white flex items-center justify-center text-sm font-semibold shadow-sm">
                    {c.step}
                  </div>
                </div>

                <h3 className="mt-4 text-base md:text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* 2) FAQ EXACT LAYOUT    */}
      {/* ====================== */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[340px_1fr] gap-8 items-start">
          {/* Left title block */}
          <div>
            <h3 className="text-[#6c4cb1] text-2xl md:text-[28px] font-extrabold mb-2">
              Got Questions?
            </h3>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold">
              We&apos;ve Got Answers
            </h2>
          </div>

          {/* Right stacked accordions styled like boxes */}
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[#eceff3] bg-white shadow-sm"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none text-[15px] font-medium">
                  <span>{f.q}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#e5e7eb] text-[#6c4cb1] transition-transform group-open:rotate-45">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-0 text-sm text-[#333] leading-relaxed border-t border-[#f2f4f7]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* 3) FINAL CTA SECTION   */}
      {/* ====================== */}
      <section className="px-6 md:px-20 py-20 text-center bg-[linear-gradient(180deg,#f4f1fa, #ebe3ff)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold mb-3">
            Secure Your Trademark Transfer Today!
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#333]">
            Make ownership official, avoid future complications, and protect your brand the right way.
            Just submit your details—we&apos;ll handle the rest from drafting to filing with the USPTO.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#6c4cb1] px-8 py-3 font-semibold text-white shadow-md hover:bg-[#5b3d9d] focus:outline-none focus:ring-4 focus:ring-[#6c4cb1]/30 transition">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

