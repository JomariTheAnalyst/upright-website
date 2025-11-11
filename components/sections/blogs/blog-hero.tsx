"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function BlogHeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-tabs/upright-phone.png"
          alt="Upright Blog"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-white/80 text-sm md:text-base font-medium mb-4 tracking-wide">
                Read all about it
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                News & media
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
                Everything you need to stay up to date with what's going on at
                Upright — and how to get in touch with any press enquiries.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
