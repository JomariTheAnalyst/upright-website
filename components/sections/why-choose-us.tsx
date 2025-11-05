"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

// Helper to render text with bold emphasis
function BoldText({ children }: { children: string }) {
  const parts = children.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-black">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const features = [
  {
    id: 1,
    title: "From idea to system, in minutes.",
    description:
      "Upright's **streamlined process** helps businesses **design, build, and deploy** IT solutions quickly **without compromising quality**.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern by design.",
    description:
      "We replace **outdated systems** with **secure, scalable, and user-focused solutions** tailored to your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Automate what slows you down.",
    description:
      "Upright builds **smart integrations and workflows** that **eliminate repetitive tasks** and boost efficiency.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Connect and manage data with ease.",
    description:
      "**Integrate multiple platforms** and data sources through Upright's **seamless system architecture**.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "AI-powered solutions that deliver.",
    description:
      "Leverage **artificial intelligence** to automate complex tasks, **analyze data**, and make **smarter business decisions**.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Enterprise-grade security.",
    description:
      "Built with **security at its core**. Your data is protected with **industry-leading encryption** and compliance standards.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
];

export function WhyChooseUs() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Get the width of one item plus gap
    const itemWidth = container.scrollWidth / features.length;
    const scrollAmount = itemWidth * 1; // Scroll exactly one item

    if (direction === "right") {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#fbf9ef" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black max-w-3xl leading-tight"
          >
            Upright is built for businesses that never stop growing
          </motion.h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white text-black h-14 w-14 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white text-black h-14 w-14 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Row - 4 Items Visible */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-none w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.125rem)] snap-start group"
            >
              {/* Large Dominant Image */}
              <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden mb-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Below - No Card Background */}
              <div className="space-y-3 px-2">
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  <BoldText>{feature.description}</BoldText>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
