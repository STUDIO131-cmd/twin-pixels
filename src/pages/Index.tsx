import { lazy, Suspense, useCallback, useEffect } from "react";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold sections
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
  // Debounced layout adjustment — runs once after paint
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const children = el.children;
        if (!children.length) return;

        const sectionRect = el.getBoundingClientRect();
        const firstRect = children[0].getBoundingClientRect();
        const lastRect = children[children.length - 1].getBoundingClientRect();

        const topGap = firstRect.top - sectionRect.top;
        const bottomGap = sectionRect.bottom - lastRect.bottom;

        if (topGap > 60) el.style.paddingTop = '40px';
        if (bottomGap > 60) el.style.paddingBottom = '40px';
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

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
