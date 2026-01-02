"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/company";

export function AwardsSection() {
  const award = company.awards[0];

  return (
    <section className="py-16 md:py-24 bg-[#f5f5f3]">
      {/* Custom Font */}
      <style jsx global>{`
        @font-face {
          font-family: "NewFont";
          src: url("/fonts/newfont.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Stacked Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[380px] md:h-[620px] lg:h-[700px] mx-auto w-full max-w-[400px] md:max-w-none"
          >
            {/* First Image - Back (Top Left) - Fully Visible */}
            <div
              className="absolute top-0 left-0 w-[55%] md:w-[55%] lg:w-[65%] z-10"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="border-2 border-black">
                <img
                  src="/images/founders/plaque.jpg"
                  alt="Certificate of Appreciation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Second Image - Front (Bottom Right) - Minimal Overlap */}
            <div
              className="absolute bottom-4 right-0 md:bottom-[-70px] md:right-[-70px] w-[55%] md:w-[55%] lg:w-[65%] z-20"
              style={{ transform: "rotate(7deg)" }}
            >
              <div className="border-2 border-black bg-white">
                <img
                  src="/images/logo/awards.png"
                  alt="Award Recognition"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Decorative Arrow */}
            <svg
              className="absolute top-[45%] left-[45%] w-7 h-7 text-[#0000ff] z-25 hidden md:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 pl-0 lg:pl-20"
          >
            {/* Section Badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Awards & Recognition
            </span>

            {/* Subtitle */}
            <p
              className="text-sm  md:text-base font-bold text-black uppercase tracking-wide"
              style={{
                fontFamily: "NewFont, sans-serif",
                fontWeight: 900,
                fontSize: "31px",
              }}
            >
              {award.issuedBy}
            </p>

            {/* Description */}
            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              {award.description}
            </p>

            {/* CTA Link with underline animation */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-black font-bold uppercase tracking-wide text-sm relative"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              <span className="relative">
                Learn More About This Award
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-500 ease-out group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
