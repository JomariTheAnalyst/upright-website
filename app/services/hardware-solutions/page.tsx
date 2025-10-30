import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { Footer } from "@/components/layout/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceFeatures } from "@/components/sections/service-features"

export const metadata = {
  title: "Hardware Solutions - Upright Systems Inc.",
  description: "Enterprise hardware procurement, deployment, and management services for your IT infrastructure needs.",
}

export default function HardwareSolutionsPage() {
  const features = [
    {
      title: "Hardware Procurement",
      description: "Source and supply enterprise-grade hardware from trusted manufacturers.",
    },
    {
      title: "Infrastructure Setup",
      description: "Complete deployment and configuration of servers, networks, and workstations.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing hardware maintenance and technical support to ensure optimal performance.",
    },
    {
      title: "Asset Management",
      description: "Track and manage your IT assets throughout their lifecycle.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <ServiceHero
        title="Hardware Solutions"
        description="Comprehensive hardware solutions from procurement to deployment, ensuring your IT infrastructure runs smoothly."
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&auto=format&fit=crop&q=80"
      />
      <ServiceFeatures
        features={features}
        ctaText="Get Hardware Quote"
      />
      <Footer />
    </div>
  )
}
