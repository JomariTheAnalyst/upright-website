"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 p-6 md:p-8"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Logo and Text */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/timeline/Upright Logo1.png"
                  alt="Upright Systems Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready to transform your business?
              </h2>
            </div>

            {/* Right side - Button */}
            <div className="flex-shrink-0">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
