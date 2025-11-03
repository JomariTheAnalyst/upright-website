"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: Array<string | { image: string; title: string; subscribers: string }>;
  className?: string;
  onCtaClick?: () => void;
}

// Reusable Button component styled like in the image
const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="mt-8 px-8 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
  >
    {children}
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
  onCtaClick,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full min-h-screen overflow-hidden flex flex-col items-start justify-center px-4 pt-24 pb-32 md:pb-40 max-w-7xl mx-auto",
        className
      )}
    >
      <div className="z-10 flex flex-col items-start">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl text-left"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-white/90 drop-shadow-lg text-left"
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee - Positioned at bottom, overlapping next section */}
      <div className="absolute -bottom-24 md:-bottom-32 left-0 right-0 w-full z-30 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex gap-4 md:gap-6 items-center"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((item, index) => {
            const data =
              typeof item === "string"
                ? { image: item, title: "", subscribers: "" }
                : item;
            return (
              <div
                key={index}
                className="relative aspect-[3/4] h-56 md:h-72 flex-shrink-0 transform transition-transform hover:scale-105 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10"
                style={{
                  rotate: `${index % 2 === 0 ? -2 : 2}deg`,
                }}
              >
                <img
                  src={data.image}
                  alt={data.title || `Showcase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {data.title && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight drop-shadow-lg">
                      {data.title}
                    </h3>
                    {data.subscribers && (
                      <div className="text-white">
                        <div className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                          {data.subscribers}
                        </div>
                        <div className="text-xs md:text-sm uppercase tracking-wider opacity-90">
                          Clients
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
