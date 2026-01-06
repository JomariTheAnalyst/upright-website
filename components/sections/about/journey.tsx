"use client";

import { motion } from "framer-motion";

export function JourneySection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#f7f6f1]">
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
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Our Journey
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
            style={{ fontFamily: "NeutraText, sans-serif" }}
          >
            AT THE HEART OF YOUR
            <br />
            PROJECTS SINCE{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#0000ff] -skew-x-3 transform scale-105" />
              <span className="relative text-white px-3 py-1">2015</span>
            </span>
          </h2>
        </motion.div>

        {/* Description Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mb-12"
        >
          <p
            className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Upright Solutions and Systems Consultancy Corp. was established on
            October 30, 2015, originally as Upright Maritime Learning and Review
            Center Corp. Over the years, the company evolved to meet the growing
            demands of digital transformation, expanding its expertise in system
            design, software development, and IT consultancy.
          </p>
          <p
            className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Today, Upright specializes in computer data processing, system
            design and analysis, software package development, programming, data
            communication, and the development of digital learning platforms and
            content materials.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Row 1 */}
          {/* Oceanwide Group - Large card spanning 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-[#d4e8d1] rounded-2xl p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Member of a Strong Network
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed max-w-md mt-4"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                As a member of the Oceanwide Group, Upright benefits from a
                strong network of maritime and technology expertise, enabling us
                to deliver comprehensive solutions across industries.
              </p>
            </div>
            <div>
              <span
                className="inline-flex items-center px-5 py-2.5 bg-[#1a2b4a] text-white rounded-full text-base md:text-lg font-semibold"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                Part of Oceanwide Group
              </span>
            </div>
          </motion.div>

          {/* Established - Square card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#d4d4f7] rounded-2xl p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                October 30, 2015
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed mt-4"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Over a decade of experience building strong client relationships
                through reliability and quality.
              </p>
            </div>
            <div>
              <span
                className="inline-flex items-center px-5 py-2.5 bg-[#1a2b4a] text-white rounded-full text-base md:text-lg font-semibold"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                Established
              </span>
            </div>
          </motion.div>

          {/* Row 2 */}
          {/* Nationally Recognized - Square card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#fef9c3] rounded-2xl p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                One Health Pass System
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed mt-4"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Recognized for implementing health and safety IT systems at
                airports during the pandemic.
              </p>
            </div>
            <div>
              <span
                className="inline-flex items-center px-5 py-2.5 bg-[#1a2b4a] text-white rounded-full text-base md:text-lg font-semibold"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                Nationally Recognized
              </span>
            </div>
          </motion.div>

          {/* Certificate of Appreciation - Medium card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#C3FBFF] rounded-2xl p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                July 2, 2022
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed mt-4"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Awarded by the National Task Group for Returning Overseas
                Filipinos for COVID-19 response efforts.
              </p>
            </div>
            <div>
              <span
                className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 text-[#1a2b4a] rounded-full text-base md:text-lg font-semibold"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                Certificate of Appreciation
              </span>
            </div>
          </motion.div>

          {/* 4 Million Passengers - Square card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-[#fce7f3] rounded-2xl p-8 md:p-10 min-h-[260px] md:min-h-[300px] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <p
                className="text-sm text-gray-600 mb-2"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Pandemic Response Impact
              </p>
              <p
                className="text-sm text-gray-500 leading-relaxed mt-4"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Helped reopen the Philippines to international travelers through
                digital health verification.
              </p>
            </div>
            <div>
              <span
                className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 text-[#1a2b4a] rounded-full text-base md:text-lg font-semibold"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                ~4M Passengers Processed
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
