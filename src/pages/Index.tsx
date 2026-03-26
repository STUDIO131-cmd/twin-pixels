import { lazy, Suspense, memo } from "react";
import TickerBar from "@/components/TickerBar";
import HeroSection from "@/components/HeroSection";
import { SectionSkeleton } from "@/components/ui/ShimmerSkeleton";

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

/** Shimmer fallback matching dark sections */
const DarkSkeleton = () => <SectionSkeleton className="bg-background" />;

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <TickerBar />
      <HeroSection />
      <TickerBar />
      <Suspense fallback={<DarkSkeleton />}>
        <IdentificationSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <ProblemSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <WhatIsSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <PillarsSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <ForWhoSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <OutcomeSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <ScheduleSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <ContinuitySection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <SupportSection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <FinalCTASection />
      </Suspense>
      <Suspense fallback={<DarkSkeleton />}>
        <FooterSection />
      </Suspense>
    </div>
  );
});
Index.displayName = "Index";

export default Index;
