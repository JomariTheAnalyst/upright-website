"use client";

import { motion } from "motion/react";
import Image from "next/image";

// CapGreg Group of Companies - Business Logos
const logos = [
  { name: "CREATV", file: "capgreg-businesses/CREATV-LOGO.png" },
  { name: "NARICA", file: "capgreg-businesses/NARICA-LOGO.png" },
  { name: "Ocean Skipper", file: "capgreg-businesses/OCEANSKIPPER-LOGO.png" },
  {
    name: "Oceanwide Group",
    file: "capgreg-businesses/oceanwide-GROUP-WORD-white-768x179.png",
  },
  {
    name: "Oceanwide Maritime",
    file: "capgreg-businesses/OCEANWIDE-MARITIME-LOGO.png",
  },
  { name: "OPANDI", file: "capgreg-businesses/OPANDI-LOGO.png" },
];

export function LogoMarquee() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Title Section with Better Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Delivering Innovation Nationwide
          </p>
        </motion.div>
      </div>

      {/* Gradient Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-40 md:w-64 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 md:w-64 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

      {/* Logo Marquee Container */}
      <div className="relative flex overflow-hidden py-8">
        {/* First Set */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-16 md:gap-20 lg:gap-24 items-center flex-shrink-0 px-8"
        >
          {logos.map((logo, idx) => (
            <div
              key={`first-${idx}`}
              className="flex-shrink-0 w-40 h-32 md:w-48 md:h-36 lg:w-56 lg:h-40 flex items-center justify-center transition-all duration-300 p-6"
            >
              <Image
                src={`/images/logo/${logo.file}`}
                alt={logo.name}
                width={200}
                height={140}
                className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Second Set */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-16 md:gap-20 lg:gap-24 items-center flex-shrink-0 px-8"
        >
          {logos.map((logo, idx) => (
            <div
              key={`second-${idx}`}
              className="flex-shrink-0 w-40 h-32 md:w-48 md:h-36 lg:w-56 lg:h-40 flex items-center justify-center transition-all duration-300 p-6"
            >
              <Image
                src={`/images/logo/${logo.file}`}
                alt={logo.name}
                width={200}
                height={140}
                className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Third Set */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-16 md:gap-20 lg:gap-24 items-center flex-shrink-0 px-8"
        >
          {logos.map((logo, idx) => (
            <div
              key={`third-${idx}`}
              className="flex-shrink-0 w-40 h-32 md:w-48 md:h-36 lg:w-56 lg:h-40 flex items-center justify-center transition-all duration-300 p-6"
            >
              <Image
                src={`/images/logo/${logo.file}`}
                alt={logo.name}
                width={200}
                height={140}
                className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
