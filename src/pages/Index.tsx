import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import IdentificationSection from "@/components/IdentificationSection";
import ProblemSection from "@/components/ProblemSection";
import WhatIsSection from "@/components/WhatIsSection";

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
  return (
    <div className="min-h-screen bg-background">
      <TickerBar />
      <HeroSection />
      <TickerBar />
      <IdentificationSection />
      <ProblemSection />
      <WhatIsSection />
      
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
