import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { CareersHeroSection } from "@/components/sections/careers/careers-hero";
import { CareersMarqueeLogo } from "@/components/sections/careers/marquee-logo";
import { VideoInspirationSection } from "@/components/sections/careers/video-inspiration";
import { CultureSection } from "@/components/sections/careers/culture";
import { WorkplaceSection } from "@/components/sections/careers/workplace";
import { JobsSection } from "@/components/sections/careers/jobs";

export const metadata = {
  title: "Careers",
  description:
    "Join our team at Upright Solutions and Systems Consultancy Corp. and build your career in IT solutions and enterprise technology.",
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen">
      <TransparentNavbar />
      <CareersHeroSection />
      <CareersMarqueeLogo />
      <VideoInspirationSection />
      <CultureSection />
      <WorkplaceSection />
      <JobsSection />
      <Footer />
    </div>
  );
}
