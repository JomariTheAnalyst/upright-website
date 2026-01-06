"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

// 9-Item Grid (Alternating Image/Logo)
const gridItems = [
  { type: 'image', src: '/images/projects/gerrys.png', alt: 'Gerrys Project' },
  { type: 'logo', src: '/images/logo/client-logos/lbc.png', alt: 'LBC Logo' },
  { type: 'image', src: '/images/projects/onehealthpass.jpg', alt: 'One Health Pass' },
  { type: 'logo', src: '/images/logo/client-logos/avior.png', alt: 'Avior Logo' },
  { type: 'image', src: '/images/projects/myavior1.png', alt: 'Avior App' },
  { type: 'logo', src: '/images/logo/client-logos/BOQ.png', alt: 'BOQ Logo' },
  { type: 'image', src: '/images/projects/mycado.png', alt: 'MyCaDO Project' },
  { type: 'logo', src: '/images/logo/client-logos/mycado.png', alt: 'MyCaDO Logo' },
  { type: 'image', src: '/images/projects/lbc.png', alt: 'LBC Project' },
];

export function HeroProjects() {
  return (
    <section className="relative min-h-[120vh] flex items-center overflow-hidden">
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: 'NeutraTextTF-BoldAlt';
          src: url('/fonts/NeutraTextTF-BoldAlt.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Graphik-Regular';
          src: url('/fonts/Graphik-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* 3x3 Grid Background - Alternating Image/Logo */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {gridItems.map((item, index) => (
          <div key={index} className="relative w-full h-full overflow-hidden group">
            {item.type === 'logo' ? (
              // Logo Cell: White Background, Centered Logo
              <div className="w-full h-full bg-white flex items-center justify-center p-8 md:p-12 lg:p-16">
                 <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-contain" 
                    />
                 </div>
              </div>
            ) : (
              // Image Cell: Full Cover Project Image
              <div className="w-full h-full relative grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60">
                 <Image 
                   src={item.src} 
                   alt={item.alt} 
                   fill 
                   className="object-cover" 
                 />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dark Overlay for text readability (lighter so logos are visible) */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Pill Label */}
          <span 
            className="inline-block px-5 py-1.5 rounded-full border border-white/80 text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 bg-white/5 backdrop-blur-sm"
            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
          >
            Portfolio
          </span>

          {/* Main Title - Stacked */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-10"
            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
          >
            OUR<br />
            PROJECTS<br />
            SHOWCASE
          </h1>

          {/* Description */}
          <p 
            className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light"
            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
          >
            We propose a rigorous selection of digital solutions sourced from our own production, 
            local partners, and recognized international innovators. Each project is chosen for 
            its technical performance and proven impact.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-12 text-white/50 animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
