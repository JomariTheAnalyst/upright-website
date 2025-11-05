"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-12 pt-32 pb-12">
      {/* Hero Content - Above Video */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-6 leading-tight">
            Where Technology Meets Purpose
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Upright, we don't just build software — we build opportunities.
            Our mission is to empower people and organizations through
            intelligent, seamless, and sustainable digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-300 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Video Container with Margin and Border Radius */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-4 md:mx-6 lg:mx-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto aspect-video object-cover"
        >
          <source src="/videos/uprightsamplevideo.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
