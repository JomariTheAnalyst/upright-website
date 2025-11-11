"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/homepage/skyscrapers (1) (1).png')",
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-20 xl:px-32 py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Small heading */}
          <p className="text-sm md:text-base text-white/90 mb-4 font-medium tracking-wide">
            Upright Solutions and Systems Consultancy Corp.
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate What’s Possible.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            We build technology that empowers industries to go beyond limits.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-black"
              style={{ backgroundColor: "#ffe319" }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
