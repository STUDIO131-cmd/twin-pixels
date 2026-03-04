import TickerBar from "@/components/TickerBar";
import CountdownSection from "@/components/CountdownSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MethodologySection from "@/components/MethodologySection";
import PricingSection from "@/components/PricingSection";
import SpeakersSection from "@/components/SpeakersSection";
import RegistrationForm from "@/components/RegistrationForm";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TickerBar />
      <CountdownSection />
      <ParticipantsSection />
      <HeroSection />
      <ImageCarousel />
      <ForWhoSection />
      <TestimonialsSection />
      <MethodologySection />
      <PricingSection />
      <SpeakersSection />
      <RegistrationForm />
      <FooterSection />
    </div>
  );
};

export default Index;
