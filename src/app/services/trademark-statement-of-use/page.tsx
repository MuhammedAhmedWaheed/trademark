import type { Metadata } from "next";

import StatementHero from "@/components/StatementHero";
import Statement from "@/components/Statement";
import USPTO from "@/components/USPTO";
import Use from "@/components/Use";
import SOUExtensionHero from "@/components/SOUExtensionHero";
import Client from "@/components/Client";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Statement of Use | Legal Mark Expert",
  description:
    "File your USPTO Statement of Use with Legal Mark Expert. Clear steps, evidence examples for goods & services, plan comparison, and FAQs—everything in one place.",
};

export default function StatementOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      <StatementHero />
      <Statement />
      <USPTO />
      <Use />
      <SOUExtensionHero />
      <Client />
      <Plans />
      <FAQ />
    </main>
  );
}
