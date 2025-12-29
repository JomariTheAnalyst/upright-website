import { HeroSection } from "@/components/sections/home/hero";
import { VideoSection } from "@/components/sections/home/video-section";
import { CeoQuoteSection } from "@/components/sections/home/ceo-quote";
import { CtaBanner } from "@/components/sections/home/cta-banner";
import { Footer } from "@/components/layout/footer";
import { WhoWeAreSection } from "@/components/sections/home/who-we-are";
import { OurServicesSection } from "@/components/sections/home/our-services";
import { OurProjectsSection } from "@/components/sections/home/our-projects";
import { UseCasesSection } from "@/components/sections/home/use-cases";
import { EventsSection } from "@/components/sections/home/events";
import { ImpactSection } from "@/components/sections/home/impact";
import { AwardsSection } from "@/components/sections/home/awards";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      {/* Yellow Divider */}
      <div className="w-full h-2 bg-[#ffe319]" />
      <WhoWeAreSection />
      <VideoSection />
      <div style={{ backgroundColor: "#fafafa" }}>
        <OurServicesSection />
      </div>
      <OurProjectsSection />
      <UseCasesSection />
      <ImpactSection />
      <EventsSection />
      <AwardsSection />
      <div style={{ backgroundColor: "#fafafa" }}>
        <CeoQuoteSection />
      </div>
      <CtaBanner />
      <Footer />
    </div>
  );
}
