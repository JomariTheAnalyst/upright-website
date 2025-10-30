import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { Footer } from "@/components/layout/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceFeatures } from "@/components/sections/service-features"

export const metadata = {
  title: "Software Development - Upright Systems Inc.",
  description: "Custom software and application development tailored to your business needs. Build scalable, secure solutions with our expert team.",
}

export default function SoftwareDevelopmentPage() {
  const features = [
    {
      title: "Custom Applications",
      description: "Tailored software solutions designed specifically for your business requirements.",
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud-based applications leveraging AWS, Azure, and Google Cloud.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <ServiceHero
        title="Software Development"
        description="Transform your ideas into powerful, scalable software solutions that drive business growth and innovation."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&auto=format&fit=crop&q=80"
      />
      <ServiceFeatures
        features={features}
        ctaText="Start Your Project"
      />
      <Footer />
    </div>
  )
}
