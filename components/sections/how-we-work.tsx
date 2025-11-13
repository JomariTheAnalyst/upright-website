"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Data for the process steps
const processSteps = [
  {
    title: "Discovery & Research",
    description:
      "We begin by understanding your business goals, challenges, and requirements through comprehensive research and stakeholder interviews.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Discovery and Research",
  },
  {
    title: "Strategy & Planning",
    description:
      "Our team develops a detailed roadmap and strategy tailored to your specific needs, ensuring alignment with your business objectives.",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Strategy and Planning",
  },
  {
    title: "Design & Development",
    description:
      "We bring your vision to life through innovative design and robust development, following industry best practices and agile methodologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    imageAlt: "Design and Development",
  },
  {
    title: "Support & Maintenance",
    description:
      "Our commitment continues beyond launch with ongoing support, maintenance, and optimization to ensure long-term success.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    imageAlt: "Support and Maintenance",
  },
];

/**
 * How We Work section component displaying the professional workflow process
 */
export function HowWeWorkSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#fafafa" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures successful delivery of every project,
            from initial concept to ongoing support.
          </p>
        </motion.div>

        {/* Alternating Layout */}
        <div className="space-y-32">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
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
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <motion.div
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[3/3.5] group">
                    <Image
                      src={step.imageUrl}
                      alt={step.imageAlt}
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
