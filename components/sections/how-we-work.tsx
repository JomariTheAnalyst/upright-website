"use client";

import React from "react";
import { motion } from "motion/react";
import { FeatureCard } from "@/components/ui/feature-card";
import { Search, Lightbulb, CheckCircle, Headphones } from "lucide-react";

// Data for the process steps
const processSteps = [
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-primary" />,
    title: "Consectetur Adipiscing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Headphones className="h-12 w-12 text-primary" />,
    title: "Eiusmod Tempor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

/**
 * How We Work section component displaying the professional workflow process
 */
export function HowWeWorkSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f1f0ee" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                className="h-full bg-white"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
