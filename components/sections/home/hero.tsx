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
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2Fb261f7095ab74ea484cc4cf493b21031')",
        }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/15" />
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
          <p className="text-sm md:text-base text-white/90 mb-4 font-medium tracking-wide drop-shadow-lg">
            Upright Solutions and Systems Consultancy Corp.
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-yellow-200 xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Elevate What’s Possible.
          </h1>

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

      {/* Trust Badges Section - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="mx-8 sm:mx-12 lg:mx-20 xl:mx-32">
          {/* Glassmorphism Container */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl py-6 px-8">
            <div className="flex items-center justify-between gap-6">
              {/* Trustpilot - Far Left */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-white font-bold text-lg drop-shadow-lg">
                    Trustpilot
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-green-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/90 text-sm font-semibold drop-shadow-lg">
                  4.8/5.0
                </span>
              </div>

              {/* Backed by Industry Leaders - Center (Hidden on mobile) */}
              <div className="hidden lg:flex flex-col items-center gap-2">
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider drop-shadow-lg">
                  Backed by industry leaders
                </span>
                <div className="flex items-center gap-4">
                  <div className="text-white font-bold text-xl tracking-tight drop-shadow-lg">
                    SM
                  </div>
                  <div className="text-white font-semibold text-lg tracking-wide drop-shadow-lg">
                    AYALA
                  </div>
                  <div className="text-white font-bold text-lg drop-shadow-lg">
                    Globe
                  </div>
                </div>
              </div>

              {/* Forbes Award Badge - Far Right */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-10 h-10 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="text-left">
                  <div className="text-white font-bold text-base drop-shadow-lg">
                    Forbes
                  </div>
                  <div className="text-white/90 text-xs font-medium drop-shadow-lg">
                    #1 Most Innovative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
