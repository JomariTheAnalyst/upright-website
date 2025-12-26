import { HeroSection } from "@/components/sections/home/hero";
import { VideoSection } from "@/components/sections/home/video-section";
import { CeoQuoteSection } from "@/components/sections/home/ceo-quote";
import { CtaBanner } from "@/components/sections/home/cta-banner";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "About Us - Upright Solutions and Systems Consultancy Corp.",
  description:
    "Learn more about Upright Solutions and Systems Consultancy Corp., a Philippine-based IT solutions company.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <VideoSection />
      <div style={{ backgroundColor: "#fafafa" }}>
        <CeoQuoteSection />
      </div>
      <CtaBanner />
      <Footer />
    </div>
  );
}
