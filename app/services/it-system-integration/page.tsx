import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { Footer } from "@/components/layout/footer"
import { IntegrationHero } from "@/components/sections/integration/hero"
import { IntegrationOverview } from "@/components/sections/integration/overview"
import { IntegrationIndustries } from "@/components/sections/integration/industries"
import { IntegrationProcess } from "@/components/sections/integration/process"
import { IntegrationCaseStudy } from "@/components/sections/integration/case-study"
import { IntegrationCTA } from "@/components/sections/integration/cta"

export const metadata = {
  title: "IT System Integration - Upright Systems Inc.",
  description: "Seamless system integration for enterprise efficiency. Connect technologies, platforms, and processes into one intelligent ecosystem.",
  keywords: ["system integration", "enterprise integration", "API integration", "legacy modernization", "Philippines"],
}

export default function ITSystemIntegrationPage() {
  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <IntegrationHero />
      <IntegrationOverview />
      <IntegrationIndustries />
      <IntegrationProcess />
      <IntegrationCaseStudy />
      <IntegrationCTA />
      <Footer />
    </div>
  )
}
