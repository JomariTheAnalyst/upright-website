"use client";

import { motion } from "motion/react";
import Image from "next/image";

const features = [
  {
    title: "System Integration",
    description:
      "Flow automatically connects your enterprise systems and streamlines operations across your organization.",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    imageAlt: "System Integration - Connected network infrastructure",
  },
  {
    title: "Software Development",
    description:
      "Create custom applications for the things your team needs most. From scheduling to FAQs, just speak a cue and get the full formatted text.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    imageAlt: "Software Development - Code on screen",
  },
  {
    title: "Professional Services",
    description:
      "Expert consulting and support services to help your business leverage technology effectively.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Professional Services - Team collaboration",
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance and strategic planning to help your business achieve digital transformation goals.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "IT Consulting - Business strategy and planning",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#f1f0ee" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Single Image - Taller */}
                <motion.div
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[3/3.5] group">
                    <Image
                      src={feature.imageUrl}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
