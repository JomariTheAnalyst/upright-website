import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { Footer } from "@/components/layout/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceFeatures } from "@/components/sections/service-features"

export const metadata = {
  title: "Maritime Learning - Upright Systems Inc.",
  description: "Online maritime training and certification programs. Advance your maritime career with our comprehensive e-learning platform.",
}

export default function MaritimeLearningPage() {
  const features = [
    {
      title: "Online Courses",
      description: "Comprehensive maritime training courses accessible anytime, anywhere.",
    },
    {
      title: "Certification Programs",
      description: "Industry-recognized certifications to advance your maritime career.",
    },
    {
      title: "Interactive Learning",
      description: "Engaging multimedia content with simulations and practical exercises.",
    },
    {
      title: "Expert Instructors",
      description: "Learn from experienced maritime professionals and industry experts.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <ServiceHero
        title="Maritime Learning"
        description="Advance your maritime career with our comprehensive online training and certification programs."
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop&q=80"
      />
      <ServiceFeatures
        features={features}
        ctaText="Explore Courses"
      />
      <Footer />
    </div>
  )
}
