"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: "Graphik";
          src: url("/fonts/Graphik-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "NeutraText";
          src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

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

      {/* Hero Content - Left Aligned */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 sm:px-8 lg:px-12 xl:px-16 pt-20">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-sm md:text-base tracking-wide mb-4"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Philippine-Based IT Solutions Company
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "NeutraText, sans-serif" }}
            >
              Transforming
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#ffdf20] leading-[1.1] tracking-tight italic"
              style={{ fontFamily: "NeutraText, sans-serif" }}
            >
              Businesses
            </span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center overflow-hidden"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              {/* Button with diagonal clip */}
              <span
                className="relative px-8 py-3 bg-[#ffdf20] text-black font-medium text-sm"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 16px) 100%, 0 100%)",
                }}
              >
                {/* Blue fill overlay */}
                <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Contact Us
                </span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Left Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-12 md:bottom-16 left-6 sm:left-8 lg:left-12 xl:left-16 max-w-md"
        >
          <p
            className="text-white font-semibold text-base md:text-lg mb-1"
            style={{ fontFamily: "NeutraText, sans-serif" }}
          >
            Providing World-class Solutions
          </p>
          <p
            className="text-white/70 text-sm md:text-base"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Fueled by Local Insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
