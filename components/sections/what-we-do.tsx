"use client";

import { motion } from "motion/react";
import { Code2, Layers, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "System Integration",
    description:
      "Flow automatically connects your enterprise systems and streamlines operations across your organization.",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    imageAlt: "System Integration - Connected network infrastructure",
    icon: Layers,
  },
  {
    title: "Software Development",
    description:
      "Create custom applications for the things your team needs most. From scheduling to FAQs, just speak a cue and get the full formatted text.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    imageAlt: "Software Development - Code on screen",
    icon: Code2,
  },
  {
    title: "Professional Services",
    description:
      "Flow automatically adjusts tone based on the app you're using. Sound like you—not a robot.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Professional Services - Team collaboration",
    icon: Users,
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance and strategic planning to help your business leverage technology effectively and achieve your digital transformation goals.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "IT Consulting - Business strategy and planning",
    icon: Lightbulb,
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#fbf9ef" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* 2x2 Grid Layout with offset right column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-16 lg:space-y-20">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-8"
              >
                {/* Title and Description */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative overflow-hidden rounded-[40px] aspect-[4/3] group"
                >
                  <Image
                    src={feature.imageUrl}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Offset downwards */}
          <div className="space-y-16 lg:space-y-20 lg:mt-32">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                className="space-y-8"
              >
                {/* Title and Description */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 + 0.2 }}
                  className="relative overflow-hidden rounded-[40px] aspect-[4/3] group"
                >
                  <Image
                    src={feature.imageUrl}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
