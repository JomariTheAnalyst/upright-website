"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Award, Building2 } from "lucide-react";

export function WhoWeAreSection() {
  // Fixed at 10 years since Upright was established October 2015
  // Will become 11 years in October 2026
  const yearsOfExcellence = 10;

  return (
    <section className="relative min-h-[auto] lg:h-[auto] xl:h-auto bg-[#f7f7f2] overflow-hidden flex items-center py-12 sm:py-16 md:py-20 lg:py-24">
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

      {/* Dotted Pattern Background - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 hidden md:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #1a2b4a 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-4 md:mx-6 lg:mx-8 border border-[#1a2b4a]/20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] items-stretch">
          {/* Left Column - Heading & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-5 sm:px-8 lg:pl-16 lg:pr-12 py-10 md:py-16 lg:py-20"
          >
            {/* Section Name Pill */}
            <span
              className="inline-flex items-center px-4 py-1.5 mb-6 md:mb-8 text-xs font-semibold tracking-wider uppercase border-2 border-[#1a2b4a] rounded-full text-[#1a2b4a]"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Who We Are
            </span>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a2b4a] leading-[1.1] mb-8 md:mb-12"
              style={{ fontFamily: "NeutraText, sans-serif" }}
            >
              <span className="italic font-normal">
                {yearsOfExcellence} Years of
              </span>
              <span className="text-[#ffdf20]">.</span>
              <br />
              <span>Excellence.</span>
            </h2>

            {/* Badges Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              {/* Years Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#1a2b4a]/30 flex items-center justify-center">
                  <div className="text-center">
                    <span
                      className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b4a]"
                      style={{ fontFamily: "NeutraText, sans-serif" }}
                    >
                      {yearsOfExcellence}
                    </span>
                    <span
                      className="block text-[10px] sm:text-xs text-[#1a2b4a]/70 uppercase tracking-wider"
                      style={{ fontFamily: "Graphik, sans-serif" }}
                    >
                      Years
                    </span>
                  </div>
                </div>
                {/* Circular Text */}
                <div className="absolute inset-0 animate-spin-slow hidden sm:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-[#1a2b4a]/50 uppercase tracking-[0.3em]">
                      <textPath href="#circle">
                        • Since October 2015 • Trusted Partner •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full sm:w-px h-px sm:h-16 bg-[#1a2b4a]/20" />

              {/* Philippine Based Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 sm:w-12 sm:h-8 relative overflow-hidden rounded">
                  <Image
                    src="/images/Flag_of_the_Philippines.svg"
                    alt="Philippine Flag"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span
                    className="block text-[10px] sm:text-xs text-[#1a2b4a]/60"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    Based in
                  </span>
                  <span
                    className="block text-base sm:text-lg font-semibold text-[#1a2b4a]"
                    style={{ fontFamily: "NeutraText, sans-serif" }}
                  >
                    Philippines
                  </span>
                </div>
              </div>
            </div>

            {/* Oceanwide Group Affiliation */}
            <div className="mt-8 pt-8 border-t border-[#1a2b4a]/10">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#1a2b4a]/60" />
                <div></div>
              </div>
            </div>
          </motion.div>

          {/* Vertical Divider Line - Desktop only */}
          <div className="hidden lg:block bg-[#1a2b4a]/20" />

          {/* Right Column - Description & Recognition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-5 sm:px-8 lg:pl-12 lg:pr-16 py-10 md:py-16 lg:py-20 border-t lg:border-t-0 border-[#1a2b4a]/20"
          >
            {/* Subtitle */}
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a2b4a] mb-4 md:mb-6"
              style={{ fontFamily: "NeutraText, sans-serif" }}
            >
              Delivering Integrated IT Solutions and Professional Technology
              Services
            </h3>

            {/* Description */}
            <p
              className="text-[#1a2b4a]/70 leading-relaxed mb-6 text-sm sm:text-base"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Upright Solutions and Systems Consultancy Corp., established on
              October 30, 2015, has built over a decade of experience in the IT
              industry. Originally known as Upright Maritime Learning and Review
              Center Corp., the company evolved to meet the growing demands of
              digital transformation across industries.
            </p>

            <p
              className="text-[#1a2b4a]/70 leading-relaxed mb-6 text-sm sm:text-base"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              As part of the Oceanwide Group, Upright specializes in system
              design and integration, software development, data processing, and
              professional IT services—including digital learning platform and
              content development that supports training and professional growth
              initiatives.
            </p>

            {/* Recognition Highlight */}
            <div className="bg-[#1a2b4a]/5 border border-[#1a2b4a]/10 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#ffdf20] flex-shrink-0 mt-0.5" />
                <div>
                  <h4
                    className="text-sm font-bold text-[#1a2b4a] mb-1"
                    style={{ fontFamily: "NeutraText, sans-serif" }}
                  >
                    Nationally Recognized
                  </h4>
                  <p
                    className="text-xs sm:text-sm text-[#1a2b4a]/60 leading-relaxed"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    Awarded a Certificate of Appreciation by the National Task
                    Group for Returning Overseas Filipinos for the One Health
                    Pass system, which processed approximately 4 million
                    passengers and helped reopen the Philippines to
                    international travelers during the pandemic.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center overflow-hidden"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                <span
                  className="relative px-5 sm:px-6 py-2.5 sm:py-3 border border-[#1a2b4a]/30 text-[#1a2b4a] text-sm sm:text-base"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 14px) 100%, 0 100%)",
                  }}
                >
                  <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    About Us
                  </span>
                </span>
              </Link>
              <Link
                href="/projects"
                className="group relative inline-flex items-center overflow-hidden"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                <span
                  className="relative px-5 sm:px-6 py-2.5 sm:py-3 bg-[#ffdf20] text-black text-sm sm:text-base font-medium"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 14px) 100%, 0 100%)",
                  }}
                >
                  <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Our Projects
                  </span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
