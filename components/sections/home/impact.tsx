"use client";

import { motion } from "framer-motion";

const impactCards = [
  {
    id: 1,
    icon: (
      <svg
        className="w-14 h-14 md:w-16 md:h-16"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M16 24h16M24 16v16" />
        <path d="M16 16l8 8-8 8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Streamlined operations for maximum efficiency",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-14 h-14 md:w-16 md:h-16"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
      </svg>
    ),
    title: "Complete visibility across all systems and processes",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-14 h-14 md:w-16 md:h-16"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 36V20l12-8 12 8v16" strokeLinejoin="round" />
        <path d="M20 36v-8h8v8" />
        <circle cx="24" cy="20" r="4" />
      </svg>
    ),
    title: "Built for long-term sustainability and growth",
  },
];

export function ImpactSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 lg:py-32">
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

      {/* Outer container with border outline */}
      <div className="mx-4 md:mx-6 lg:mx-8 border border-gray-200">
        <div className="px-5 sm:px-8 lg:px-16 py-12 lg:py-16">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 lg:mb-16">
            {/* Left - Section Pill & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Name Pill */}
              <span
                className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Impact & Responsibility
              </span>

              {/* Main Headline */}
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1]"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Building Technology
                <br />
                <span className="font-normal">That Matters.</span>
              </h2>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-end lg:justify-end"
            >
              <p
                className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md lg:text-right"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Our structured approach ensures reliable, scalable IT solutions
                that meet operational goals without sacrificing quality,
                security, or long-term value.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12 lg:mb-16" />

          {/* Impact Cards with dividers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200"
          >
            {impactCards.map((card, index) => (
              <div
                key={card.id}
                className={`p-8 lg:p-12 ${
                  index !== impactCards.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-200"
                    : ""
                }`}
              >
                {/* Icon - Bigger and yellow color */}
                <div className="text-[#ffdf20] mb-8">{card.icon}</div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-normal text-gray-900 leading-snug"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  {card.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
