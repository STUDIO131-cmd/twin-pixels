import { useEffect } from "react";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import IdentificationSection from "@/components/IdentificationSection";
import ProblemSection from "@/components/ProblemSection";
import WhatIsSection from "@/components/WhatIsSection";
import PillarsSection from "@/components/PillarsSection";
import ForWhoSection from "@/components/ForWhoSection";
import OutcomeSection from "@/components/OutcomeSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContinuitySection from "@/components/ContinuitySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import SupportSection from "@/components/SupportSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section, [class*="py-"]');

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const children = el.children;
      if (!children.length) return;

      const firstChild = children[0];
      const lastChild = children[children.length - 1];

      const sectionRect = el.getBoundingClientRect();
      const firstRect = firstChild.getBoundingClientRect();
      const lastRect = lastChild.getBoundingClientRect();

      const topGap = firstRect.top - sectionRect.top;
      const bottomGap = sectionRect.bottom - lastRect.bottom;

      const maxGap = 60;
      const targetGap = 40;

      if (topGap > maxGap) {
        el.style.paddingTop = `${targetGap}px`;
      }
      if (bottomGap > maxGap) {
        el.style.paddingBottom = `${targetGap}px`;
      }
    });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <TickerBar />
      <HeroSection />
      <TickerBar />
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
    </div>
  );
};

export default Index;
