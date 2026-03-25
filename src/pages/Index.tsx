import { lazy, Suspense } from "react";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";

// Code-split: lazy load all below-fold sections
const IdentificationSection = lazy(() => import("@/components/IdentificationSection"));
const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const WhatIsSection = lazy(() => import("@/components/WhatIsSection"));
const PillarsSection = lazy(() => import("@/components/PillarsSection"));
const ForWhoSection = lazy(() => import("@/components/ForWhoSection"));
const OutcomeSection = lazy(() => import("@/components/OutcomeSection"));
const ScheduleSection = lazy(() => import("@/components/ScheduleSection"));
const ContinuitySection = lazy(() => import("@/components/ContinuitySection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const SupportSection = lazy(() => import("@/components/SupportSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TickerBar />
      <HeroSection />
      <TickerBar />
      <Suspense fallback={null}>
        <IdentificationSection />
        <ProblemSection />
        <WhatIsSection />
        <PillarsSection />
        <ForWhoSection />
        <OutcomeSection />
        <ScheduleSection />
        <ContinuitySection />
        <PricingSection />
        <FAQSection />
        <SupportSection />
        <FinalCTASection />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;
