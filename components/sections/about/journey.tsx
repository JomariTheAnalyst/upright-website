"use client";

import { motion } from "framer-motion";

export function JourneySection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white">
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

      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <span
            className="inline-flex items-center px-5 py-2 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
            style={{ fontFamily: "NewFont, sans-serif" }}
          >
            About
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1a2b4a] leading-[1.05] tracking-tight uppercase italic"
            style={{ fontFamily: "NewFont, sans-serif" }}
          >
            AT THE HEART OF YOUR
            <br />
            PROJECTS SINCE{" "}
            <span className="relative inline-block">
              {/* Blue highlight background */}
              <span className="absolute inset-0 bg-[#0000ff] -skew-x-3 transform scale-105" />
              <span className="relative text-white px-3 py-1">2015</span>
            </span>
          </h2>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p
            className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            style={{ fontFamily: "NewFont, sans-serif" }}
          >
            For nearly a decade, we have built strong relationships with our
            clients by focusing on reliability, transparency, and quality
            workmanship. Upright Solutions is a specialized team that
            understands your challenges, adapts to your needs, and delivers —
            project after project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default JourneySection;
