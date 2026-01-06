"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ProjectsHero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects-showcase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: "NeutraText";
          src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Graphik";
          src: url("/fonts/Graphik-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,223,32,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,223,32,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#ffdf20]/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-[#0000ff]/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center px-5 py-2 mb-8 text-xs font-semibold tracking-widest uppercase border border-[#ffdf20]/30 rounded-full text-[#ffdf20] bg-[#ffdf20]/5"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Our Portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "NeutraText, sans-serif" }}
        >
          <span className="block">PROJECTS THAT</span>
          <span className="block text-[#ffdf20]">MAKE AN IMPACT</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Graphik, sans-serif" }}
        >
          From digital health platforms to enterprise learning systems, we
          deliver technology solutions that transform operations and create
          lasting value for organizations across industries.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
        >
          {[
            { value: "6+", label: "Projects Delivered" },
            { value: "4M+", label: "Users Impacted" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm text-gray-500 uppercase tracking-wider"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToProjects}
          className="group flex flex-col items-center gap-2 text-gray-500 hover:text-[#ffdf20] transition-colors"
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Explore Projects
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f6f1] to-transparent" />
    </section>
  );
}

export default ProjectsHero;
