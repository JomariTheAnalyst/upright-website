"use client"

import { AnimatedMarqueeHero } from "@/components/ui/hero-3"

// Images showcasing IT solutions and technology
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&auto=format&fit=crop&q=80",
]

export function HeroSection() {
  const handleCtaClick = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedMarqueeHero
      tagline=""
      title={
        <>
          Connecting Systems.{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Empowering Industries.
          </span>
        </>
      }
      description="Upright Systems delivers intelligent integration, professional services, and custom software solutions for government and enterprise sectors."
      ctaText="Get Started"
      images={HERO_IMAGES}
      onCtaClick={handleCtaClick}
    />
  );
}
