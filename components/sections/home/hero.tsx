"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { company } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Transparent Navbar */}
      <TransparentNavbar />

      {/* Static Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2Fb261f7095ab74ea484cc4cf493b21031')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content - Centered */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          {/* Main Heading - Large Centered Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {company.tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-normal">
              {company.tagline.split(" ").slice(-1)}
            </span>
          </h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#ffdf20] hover:bg-[#ffbf00] text-black font-medium rounded-md transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Contact us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Left Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-8 md:bottom-12 left-4 sm:left-8 md:left-12 lg:left-16 z-20 max-w-sm"
      >
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          {company.shortDescription}
        </p>
      </motion.div>

      {/* Bottom Center Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-1">
          <div className="w-8 h-1 bg-white rounded-full" />
          <div className="w-8 h-1 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
