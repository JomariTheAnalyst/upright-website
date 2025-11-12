"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState, useRef } from "react";

const features = [
  {
    id: 1,
    title: "HARDWARE",
    description: "Manage checkout and payments with industry-leading tools.",
    bgColor: "#a8f0c8",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
    details:
      "Seamlessly connect your existing systems with our powerful integration platform. Automate workflows, sync data in real-time, and eliminate manual processes.",
  },
  {
    id: 2,
    title: "MOBILE APP",
    description: "A custom branded app that goes where they go.",
    bgColor: "#d4ccff",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    details:
      "Build native iOS and Android applications with your brand identity. Push notifications, offline functionality, and seamless user experiences.",
  },
  {
    id: 3,
    title: "ANALYTICS",
    description:
      "Find the numbers that matter for reports you'll actually use.",
    bgColor: "#b8e8e8",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    details:
      "Transform raw data into actionable insights with our advanced analytics dashboard. Real-time reporting and custom metrics included.",
  },
  {
    id: 4,
    title: "CONTACTS",
    description:
      "Grow 1:1 relationships with your followers off social platforms.",
    bgColor: "#ffb8d4",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    details:
      "Build meaningful connections with intelligent contact management. Segment audiences and personalize communications at scale.",
  },
  {
    id: 5,
    title: "PAGES",
    description: "Fast and gorgeous landing pages for your website.",
    bgColor: "#ffe8a8",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    details:
      "Create stunning, conversion-optimized landing pages in minutes. Drag-and-drop builder with mobile-responsive templates.",
  },
  {
    id: 6,
    title: "E-COMMERCE",
    description: "Sell products and services with powerful commerce tools.",
    bgColor: "#d4ccff",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    details:
      "Complete e-commerce solution with inventory management, payment processing, and shipping integration included.",
  },
  {
    id: 7,
    title: "AUTOMATION",
    description: "Automate repetitive tasks and save countless hours.",
    bgColor: "#b8e8e8",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    details:
      "Set up intelligent workflows that run on autopilot. Trigger actions based on user behavior without writing code.",
  },
  {
    id: 8,
    title: "SECURITY",
    description: "Enterprise-grade security protecting your data 24/7.",
    bgColor: "#ffb8d4",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    details:
      "Bank-level encryption, SOC 2 compliance, and regular security audits. Two-factor authentication and automated backups.",
  },
];

export function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 360;
    const gap = 16;
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
      {/* Header with padding */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-12">
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
            <button className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get a quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Continuous Horizontal Scroll - No padding/margin */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pl-4 sm:pl-6 lg:pl-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "none",
          }}
        >
          {/* Duplicate cards for seamless infinite loop */}
          {[...features, ...features, ...features].map((feature, index) => (
            <motion.div
              key={`${feature.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % features.length) * 0.05 }}
              className="flex-none w-[360px] perspective-1000"
            >
              <div
                className="relative w-full h-[580px] cursor-pointer"
                onClick={() => toggleFlip(feature.id)}
                style={{ transformStyle: "preserve-3d" }}
              >
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
                  {/* Front of Card */}
                  <div
                    className="rounded-3xl p-6 h-full flex flex-col relative shadow-lg hover:shadow-2xl transition-all duration-500"
                    style={{
                      background: `linear-gradient(to bottom, white 0%, ${feature.bgColor} 100%)`,
                    }}
                  >
                    {/* Title at Top - Larger and Bolder */}
                    <h3 className="text-3xl font-black text-black mb-6 tracking-tight leading-tight">
                      {feature.title}
                    </h3>

                    {/* Image in Middle - Larger */}
                    <div className="relative h-[280px] rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-black text-lg leading-relaxed flex-1">
                      {feature.description}
                    </p>

                    {/* Flip Indicator - Bottom Right */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

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
                  {/* Back of Card */}
                  <div
                    className="rounded-3xl p-8 h-full flex flex-col justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(to bottom, white 0%, ${feature.bgColor} 100%)`,
                    }}
                  >
                    <h3 className="text-3xl font-black text-black mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-black text-lg leading-relaxed">
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
      <div className="flex justify-center gap-4 mt-8 px-4">
        <button
          onClick={() => scroll("left")}
          className="rounded-full bg-black text-white hover:bg-gray-800 h-14 w-14 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="rounded-full bg-black text-white hover:bg-gray-800 h-14 w-14 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
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
