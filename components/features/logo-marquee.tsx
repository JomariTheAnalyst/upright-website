"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Leading Philippine companies using actual logo files
const logos = [
  { name: "2GO", file: "2go.webp" },
  { name: "Ayala Corporation", file: "Ayala_Corp.png" },
  { name: "BDO", file: "BDO.jpg" },
  { name: "GCash", file: "gcash.webp" },
  { name: "Globe Telecom", file: "globe telecom.png" },
  { name: "Jollibee", file: "jollibee.png" },
  { name: "LBC", file: "LBC.jpg" },
  { name: "Meralco", file: "Meralco.svg" },
  { name: "San Miguel Corporation", file: "sanmiguelcorp.png" },
  { name: "SM Group", file: "sm.jpg" },
];

export function LogoMarquee() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-12">
        {/* Centered Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white text-center"
        >
          Trusted Across Industries. Delivering Innovation Nationwide.
        </motion.h2>
      </div>

      {/* Gradient Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      <div className="relative flex overflow-hidden">
        {/* First Set - Seamless Horizontal Scroll */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-12 md:gap-16 items-center flex-shrink-0"
        >
          {logos.map((logo, idx) => (
            <div
              key={`first-${idx}`}
              className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center"
            >
              <Image
                src={`/images/logo/${logo.file}`}
                alt={logo.name}
                width={160}
                height={112}
                className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Second Set - Duplicate for Seamless Loop */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-12 md:gap-16 items-center flex-shrink-0"
        >
          {logos.map((logo, idx) => (
            <div
              key={`second-${idx}`}
              className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center"
            >
              <Image
                src={`/images/logo/${logo.file}`}
                alt={logo.name}
                width={160}
                height={112}
                className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Third Set - Extra for Smooth Transition */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-12 md:gap-16 items-center flex-shrink-0"
        >
          {logos.map((logo, idx) => (
            <div
              key={`third-${idx}`}
              className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center"
            >
              <Image
                src={`/images/logo/${logo.file}`}
                alt={logo.name}
                width={160}
                height={112}
                className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
