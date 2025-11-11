import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { HeroSection } from "@/components/sections/home/hero";
import { VideoSection } from "@/components/sections/home/video-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import CompaniesPoweredSection from "@/components/sections/companies-powered";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { LogoMarquee } from "@/components/features/logo-marquee";
import { CaseStudiesSection } from "@/components/sections/home/case-studies";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <TransparentNavbar />
      <HeroSection />
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <VideoSection />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <LogoMarquee />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <WhyChooseUs />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <CompaniesPoweredSection />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <WhatWeDoSection />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <CaseStudiesSection />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <TestimonialsSection />
      </div>
      <CtaBanner />
      <Footer />
    </div>
  );
}
