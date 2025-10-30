import { ProfessionalNavbar } from "@/components/layout/navbar-professional"
import { CompanyOverview } from "@/components/sections/company-overview"
import { TimelineSection } from "@/components/sections/timeline"
import { AchievementsCarousel } from "@/components/sections/achievements-carousel"
import { MissionVisionSection } from "@/components/sections/mission-vision"
import { AccordionSection } from "@/components/sections/accordion"
import { LeadershipTeam } from "@/components/sections/leadership-team"
import { CorporateCulture } from "@/components/sections/corporate-culture"
import { CareersSection } from "@/components/sections/careers"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <ProfessionalNavbar />
      <TimelineSection />
      <AchievementsCarousel />
      <MissionVisionSection />
      <LeadershipTeam />
      <CorporateCulture />
      <CareersSection />
      <Footer />
    </div>
  )
}
