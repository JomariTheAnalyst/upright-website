import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { Footer } from "@/components/layout/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceFeatures } from "@/components/sections/service-features"

export const metadata = {
  title: "Professional Services - Upright Systems Inc.",
  description: "Expert IT consulting and professional services to guide your digital transformation journey.",
}

export default function ProfessionalServicesPage() {
  const features = [
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to align IT initiatives with business goals.",
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive roadmaps to modernize your business operations and processes.",
    },
    {
      title: "Project Management",
      description: "Expert oversight ensuring projects are delivered on time and within budget.",
    },
    {
      title: "Technical Training",
      description: "Empower your team with knowledge and skills for new technologies and systems.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <ServiceHero
        title="Professional Services"
        description="Expert consulting and strategic guidance to navigate your digital transformation and achieve business excellence."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&auto=format&fit=crop&q=80"
      />
      <ServiceFeatures
        features={features}
        ctaText="Schedule a Consultation"
      />
      <Footer />
    </div>
  )
}
