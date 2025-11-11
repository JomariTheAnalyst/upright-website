"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Optional Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            See What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how we transform ideas into reality through innovative
            technology solutions.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-video object-cover"
          >
            <source src="/videos/uprightsamplevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
