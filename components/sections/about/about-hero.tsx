"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Grid images - 16 cells (4x4) using all team images + 3 founder images
const gridImages = [
  // Row 1
  { src: "/images/team/team1.JPG", alt: "Team member" },
  { src: "/images/founders/capsevilla4.jpg", alt: "Founder" },
  { src: "/images/team/team2.jpg", alt: "Team member" },
  { src: "/images/team/team3.jpeg", alt: "Team member" },
  // Row 2
  { src: "/images/team/team4.JPG", alt: "Team member" },
  { src: "/images/founders/capsevilla5.jpg", alt: "Founder" },
  { src: "/images/team/team5.jpg", alt: "Team member" },
  { src: "/images/founders/capsevilla.jpg", alt: "CEO" },

  // Row 3
  { src: "/images/team/team3.jpeg", alt: "Team member" },
  { src: "/images/team/team2.jpg", alt: "Team member" },
  { src: "/images/team/team1.JPG", alt: "Team member" },
  { src: "/images/team/team6.jpg", alt: "Team member" },
  { src: "/images/crew-forward-conference/capgreg.jpg", alt: "Founder" },
  // Row 4
  { src: "/images/team/IMG_5908.JPG", alt: "Team member" },
  {
    src: "/images/team/6087042e-8544-4b7b-9a55-162b3493f503.jpg",
    alt: "Team member",
  },
  {
    src: "/images/team/70c47189-96e2-4326-ae64-b789bf65c1cf.jpg",
    alt: "Team member",
  },
  {
    src: "/images/team/att.f77iwkFfmm0oB8X2Kq1vKI5vG7enjMjo8M-duCkY7jc.jpg",
    alt: "Team member",
  },
];

export function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: "Graphik";
          src: url("/fonts/Graphik-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "NeutraText";
          src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* 4x4 Grid Background - Full Screen */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
        {gridImages.map((image, index) => (
          <div key={index} className="relative w-full h-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="25vw"
              priority={index < 8}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

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
            style={{ fontFamily: "NeutraText, sans-serif" }}
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
            style={{ fontFamily: "Graphik, sans-serif" }}
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
