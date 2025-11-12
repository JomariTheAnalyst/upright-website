"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function CareersHeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/10">
        <Image
          src="/images/services-tabs/building-upright.png"
          alt="Upright Building"
          fill
          className="object-cover object-right"
          priority
          style={{ objectPosition: "right center" }}
        />
      </div>

      {/* Content - Shifted Left */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                Working At Upright
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed max-w-lg drop-shadow-lg">
                We're leading the way in fintech — join our team of innovators,
                building solutions with impact for Upright customers worldwide.
              </p>
              <motion.button
                onClick={() => {
                  const jobsSection = document.getElementById("jobs-section");
                  jobsSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Explore all careers
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
