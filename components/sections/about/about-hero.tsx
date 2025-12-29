"use client";

import { motion } from "framer-motion";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2F22f411267a0d4c83888f40068c33f083')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Main Title */}
          <h1
            className="text-white leading-none"
            style={{ fontFamily: "'NewFont', sans-serif" }}
          >
            <span className="block text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase tracking-tight">
              We are
            </span>
            <span
              className="block text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black uppercase tracking-tight"
              style={{ fontWeight: 900 }}
            >
              UPRIGHT.
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-white/90 mt-8 max-w-2xl leading-relaxed"
            style={{ fontFamily: "'NewFont', sans-serif" }}
          >
            A powerhouse of innovation and technology where every solution tells
            a story and every client becomes a part of our journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
