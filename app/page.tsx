<<<<<<< HEAD
import { UprightNavigation } from "@/components/upright-navigation"
import { HeroSection } from "@/components/sections/hero"
=======
import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { HeroSection } from "@/components/sections/hero"
import { CompanyVideoSection } from "@/components/sections/company-video"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { LogoMarquee } from "@/components/features/logo-marquee"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { TestimonialsSection } from "@/components/sections/testimonials"

import { Footer } from "@/components/layout/footer"
>>>>>>> upright-fix

export default function Home() {
  return (
    <div className="relative min-h-screen">
<<<<<<< HEAD
      {/* Full Page Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/uprightbg.png')",
          }}
        />
        {/* Gradient overlays for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <UprightNavigation />
        <HeroSection />
      </div>
=======
      <ProfessionalNavbar />
      <HeroSection />
      <CompanyVideoSection />
      <WhyChooseUs />
      <LogoMarquee />
      <CaseStudiesSection />
      <TestimonialsSection />
      <Footer />
>>>>>>> upright-fix
    </div>
  )
}
