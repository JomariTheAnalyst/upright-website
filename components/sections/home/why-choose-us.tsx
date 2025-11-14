"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Import Lottie animations
import expertiseAnimation from "@/public/animations/expertise.json";
import innovationAnimation from "@/public/animations/innovation.json";
import trustAnimation from "@/public/animations/trust.json";
import supportAnimation from "@/public/animations/support.json";
import experienceAnimation from "@/public/animations/experience.json";
import securityAnimation from "@/public/animations/datasecurity.json";

const features = [
  {
    id: 1,
    title: "Expertise",
    description:
      "Inspiring business animations that showcase professionalism and innovation, perfect for driving success.",
    bgColor: "#B8E8F5",
    animation: expertiseAnimation,
    details:
      "Our team brings deep technical expertise across multiple domains. From legacy system modernization to cutting-edge cloud solutions, we've successfully delivered hundreds of projects since 2015.",
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "Vibrant festive animations that capture the joy and spirit of celebration, perfect for any holiday season.",
    bgColor: "#F5C2E7",
    animation: innovationAnimation,
    details:
      "We stay at the forefront of technology trends, implementing AI, cloud computing, and automation to give your business a competitive edge. Innovation isn't just a buzzword—it's how we work.",
  },
  {
    id: 3,
    title: "Trust",
    description:
      "Uplifting health animations that promote balance and the spirit of self-care, perfect for well-being journeys.",
    bgColor: "#C8E6C9",
    animation: trustAnimation,
    details:
      "Built on a foundation of transparency and reliability. Our clients trust us with their most critical systems because we deliver on our promises, every single time.",
  },
  {
    id: 4,
    title: "End-to-End Support",
    description:
      "Engaging finance animations that embody clarity and growth, perfect for building trust and understanding.",
    bgColor: "#FFE082",
    animation: supportAnimation,
    details:
      "We're with you every step of the way. From initial planning and implementation to ongoing maintenance and support, our dedicated team ensures your success at every stage.",
  },
  {
    id: 5,
    title: "Experience",
    description:
      "Over a decade of delivering enterprise-scale IT solutions with proven results.",
    bgColor: "#FFCCBC",
    animation: experienceAnimation,
    details:
      "Since 2015, we've been transforming businesses through technology. Our extensive portfolio spans multiple industries, giving us unique insights into what works and what doesn't.",
  },
  {
    id: 6,
    title: "Security",
    description:
      "Enterprise-grade security protecting your data and systems 24/7 with industry-leading protocols.",
    bgColor: "#D1C4E9",
    animation: securityAnimation,
    details:
      "Your security is our priority. We implement industry-leading security protocols, regular audits, and compliance standards to protect your business from threats. Bank-level encryption and multi-factor authentication come standard.",
  },
];

export function WhyChooseUs() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 450; // Increased card width
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Infinite loop: when reaching end, jump to start
      setTimeout(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 50) {
          container.scrollTo({ left: 0, behavior: "auto" });
        }
      }, 500);
    } else {
      // Infinite loop: when at start, jump to end
      if (container.scrollLeft <= 50) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollTo({ left: maxScroll, behavior: "auto" });
        setTimeout(() => {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }, 10);
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#fafafa" }}>
      {/* Header with container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-6">
              WHY CHOOSE UPRIGHT?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md"
          >
            <p className="text-base md:text-lg text-black mb-6 leading-relaxed">
              Stop wasting time and money connecting and managing multiple
              tools. We've seamlessly integrated everything into one intuitive
              platform.
            </p>
            <button
              onClick={() => router.push("/about")}
              className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Carousel - Full Width, No Container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pl-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "none",
          }}
        >
          {/* Duplicate cards 3 times for seamless infinite loop */}
          {[...features, ...features, ...features].map((feature, index) => (
            <motion.div
              key={`${feature.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % features.length) * 0.05 }}
              className="flex-none w-[450px] perspective-1000"
            >
              <div
                className="relative w-full h-[600px] cursor-pointer"
                onClick={() => toggleFlip(feature.id)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of Card */}
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  animate={{
                    rotateY: flippedCards.has(feature.id) ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div
                    className="rounded-3xl p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-500"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    {/* Header with Title and Arrow */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                        {feature.title}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                        <ChevronRight className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-black/80 text-base md:text-lg leading-relaxed mt-4">
                      {feature.description}
                    </p>

                    {/* Lottie Animation - Larger */}
                    <div className="flex items-center justify-center mt-6">
                      <div className="w-72 h-72">
                        <Lottie
                          animationData={feature.animation}
                          loop={true}
                          autoplay={true}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  animate={{
                    rotateY: flippedCards.has(feature.id) ? 0 : -180,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div
                    className="rounded-3xl p-10 h-full flex flex-col justify-center shadow-lg relative"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    {/* Close Button */}
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                        {feature.title}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                        <X className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-black/80 text-base md:text-lg leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={() => scroll("left")}
          className="rounded-full bg-black text-white hover:bg-gray-800 h-16 w-16 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="rounded-full bg-black text-white hover:bg-gray-800 h-16 w-16 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
