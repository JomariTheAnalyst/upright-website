import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { HeroSection } from "@/components/sections/home/hero";
import { VideoSection } from "@/components/sections/home/video-section";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import JoinUsSection from "@/components/sections/home/join-us";
import { WhatWeDoSection } from "@/components/sections/home/what-we-do";
import { LogoMarquee } from "@/components/features/logo-marquee";
import { CaseStudiesSection } from "@/components/sections/home/case-studies";
import { TestimonialsSection } from "@/components/sections/home/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <TransparentNavbar />
      <HeroSection />
      <div style={{ backgroundColor: "#fafafa" }}>
        <VideoSection />
      </div>
      <div style={{ backgroundColor: "#fafafa" }}>
        <LogoMarquee />
      </div>
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <WhyChooseUs />
      </div>
      <JoinUsSection />
      <div style={{ backgroundColor: "#fafafa" }}>
        <WhatWeDoSection />
      </div>
      <div style={{ backgroundColor: "#fafafa" }}>
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
