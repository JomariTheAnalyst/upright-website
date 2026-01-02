"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Image - Full bleed, no margins */}
      <Image
        src="https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2Fb1f393d015dc42658ac85430db7920cf"
        alt="CTA Background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight max-w-4xl mb-6"
        >
          Unlock Your Project's Potential
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
        >
          Share your project details with a timeline, and we will return a
          customised programme, cost and ROI model within a week.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-0.5"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center px-8 py-4 bg-[#ffdf20] text-black font-medium text-base overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Contact Us Now
            </span>
          </Link>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center w-14 h-14 bg-[#ffdf20] text-black overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-colors duration-500 group-hover:text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
