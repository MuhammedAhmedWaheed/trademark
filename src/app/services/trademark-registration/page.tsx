import type { Metadata } from "next";
import TrademarkRegistrationHero from "../../../components/TrademarkRegistrationHero";
import TrademarkAttorneyAdvisement from "../../../components/TrademarkAttorneyAdvisement";
import TrademarkWhyChoose from "../../../components/TrademarkWhyChoose";
import TrademarkSavings from "../../../components/TrademarkSavings";
import TrademarkMonitoringIncluded from "../../../components/TrademarkMonitoringIncluded";
import TrademarkProtectionFAQ from "../../../components/TrademarkProtectionFAQ";
import TrademarkSecureSpotCTA from "../../../components/TrademarkSecureSpotCTA";
import PricingPlans from "@/components/PricingPlan";

export const metadata: Metadata = {
  title: "Trademark Registration Services | Legal Mark Experts",
  description:
    "File your U.S. trademark with attorney-assisted consultations, video guidance, and expert preparation to maximize approval success.",
};

export default function TrademarkRegistrationPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <TrademarkRegistrationHero />
      <TrademarkAttorneyAdvisement />
      <TrademarkWhyChoose />
      <TrademarkSavings />
      <PricingPlans />
      <TrademarkMonitoringIncluded />
      <TrademarkProtectionFAQ />
      <TrademarkSecureSpotCTA />
    </main>
  );
}
