"use client";

import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { RevealImageListItem } from "@/components/ui/reveal-images";

// Showcase cards with client information
const HERO_IMAGES = [
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=80",
    title: "Enterprise Solutions",
    subscribers: "150+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80",
    title: "Cloud Integration",
    subscribers: "200+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80",
    title: "Cybersecurity",
    subscribers: "180+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80",
    title: "Software Development",
    subscribers: "250+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    title: "Data Analytics",
    subscribers: "120+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&auto=format&fit=crop&q=80",
    title: "IT Consulting",
    subscribers: "300+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
    title: "Digital Transformation",
    subscribers: "175+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&auto=format&fit=crop&q=80",
    title: "Network Solutions",
    subscribers: "220+",
  },
];

export function HeroSection() {
  const handleCtaClick = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-150"
        >
          <source src="/videos/mockup-vid.mp4" type="video/mp4" />
          <source src="/videos/sample only.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      {/* Existing Hero Component */}
      <AnimatedMarqueeHero
        tagline=""
        title={
          <>
            Connecting Systems.{" "}
            <RevealImageListItem
              text="Empowering Industries"
              images={[
                {
                  src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=80",
                  alt: "IT Solutions",
                },
                {
                  src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
                  alt: "Technology",
                },
              ]}
            />
          </>
        }
        description="Upright Systems delivers intelligent integration, professional services, and custom software solutions for government and enterprise sectors."
        ctaText="Contact Us"
        images={HERO_IMAGES}
        onCtaClick={handleCtaClick}
      />
    </div>
  );
}
