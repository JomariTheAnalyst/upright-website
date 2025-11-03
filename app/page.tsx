import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { HeroSection } from "@/components/sections/hero";
import { CompanyVideoSection } from "@/components/sections/company-video";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { LogoMarquee } from "@/components/features/logo-marquee";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ProfessionalNavbar />
      <HeroSection />
      <CompanyVideoSection />
      <WhyChooseUs />
      <LogoMarquee />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
