"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function CtaBanner() {
  return (
    <section
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-yellow-700 px-8 py-16 mid:py-20"
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl"
            >
              Ready to transform your business?
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-300 text-black text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Contact us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative gradient blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
