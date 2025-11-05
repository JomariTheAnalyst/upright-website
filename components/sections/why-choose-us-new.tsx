"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Modern by design",
    description:
      "Replace clunky spreadsheets, rigid legacy systems, and outdated processes with polished apps customized to your business.",
    image: "/images/features/modern-design.png",
    fallback: "📱",
  },
  {
    id: 2,
    title: "Automate what slows you down",
    description:
      "Create sophisticated workflows that reduce busywork, prevent human error, and keep your business running smoothly.",
    image: "/images/features/automation.png",
    fallback: "⚙️",
  },
  {
    id: 3,
    title: "Connect and manage data with ease",
    description:
      "Sync data from Google Sheets, SQL databases, APIs—then view it through a familiar, spreadsheet-like interface.",
    image: "/images/features/data-management.png",
    fallback: "📊",
  },
  {
    id: 4,
    title: "AI that makes an actual impact",
    description:
      "Use Glide AI to generate custom apps or automate tasks—like drafting emails and extracting data.",
    image: "/images/features/ai-impact.png",
    fallback: "🤖",
  },
];

export function WhyChooseUsNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#fbf9ef" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black"
          >
            Upright is built for businesses
            <br />
            that are always evolving
          </motion.h2>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full border-2 border-black hover:bg-black hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-2 border-black hover:bg-black hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image/Icon Area */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                ) : null}
                <div className="text-6xl">{feature.fallback}</div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="rounded-full border-2 border-black hover:bg-black hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full border-2 border-black hover:bg-black hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
