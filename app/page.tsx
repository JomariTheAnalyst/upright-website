import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { HeroSection } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import CompaniesPoweredSection from "@/components/sections/companies-powered";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { LogoMarquee } from "@/components/features/logo-marquee";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ProfessionalNavbar />
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <HeroSection />
      </div>
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <LogoMarquee />
      </div>
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <WhyChooseUs />
      </div>
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <CompaniesPoweredSection />
      </div>
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <WhatWeDoSection />
      </div>
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <CaseStudiesSection />
      </div>
      <div style={{ backgroundColor: "#fbf9ef" }}>
        <TestimonialsSection />
      </div>
      <CtaBanner />
      <Footer />
    </div>
  );
}
