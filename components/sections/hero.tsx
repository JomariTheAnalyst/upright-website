"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      {/* Content - Left aligned */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="flex flex-col items-start max-w-5xl">
          {/* Main Headline - 2 Column Layout */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-12 leading-[1.2]"
          >
            <span className="block mb-4">From learning systems</span>
            <span className="block font-normal bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              to enterprise-scale IT innovation
            </span>
          </motion.h1>

          {/* Single CTA Button - Explore Services Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-1 flex items-center gap-3"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
