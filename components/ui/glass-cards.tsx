"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardData } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: number;
  title: string;
  description: string;
  images: string[];
  index: number;
  totalCards: number;
  color: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  images,
  index,
  totalCards,
  color,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    // Set initial state
    gsap.set(card, {
      scale: 1,
      transformOrigin: "center top",
    });

    // Create scroll trigger for stacking effect
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);
        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: "center top",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index, totalCards]);

  // All text in white for better contrast
  const textColor = "#FFFFFF";

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
      }}
    >
      <div
        ref={cardRef}
        style={{
          position: "relative",
          width: "95%",
          maxWidth: "1200px",
          minHeight: "550px",
          borderRadius: "32px",
          isolation: "isolate",
          top: `calc(-5vh + ${index * 25}px)`,
          transformOrigin: "top",
          backgroundColor: color,
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2)",
          padding: "3.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          overflow: "hidden",
        }}
        className="card-content"
      >
        {/* Top - Text Content */}
        <div className="flex-shrink-0">
          <div
            className="text-sm font-semibold mb-3 opacity-70"
            style={{ color: textColor }}
          >
            ({String(index + 1).padStart(2, "0")})
          </div>
          <h3
            className="text-5xl font-bold mb-4 leading-tight"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: textColor, opacity: 0.9 }}
          >
            {description}
          </p>
        </div>

        {/* Bottom - Multiple Images in a Row */}
        <div className="flex gap-4 items-end justify-start flex-1">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: idx === 0 ? "340px" : idx === 1 ? "260px" : "280px",
                height: idx === 0 ? "280px" : idx === 1 ? "240px" : "260px",
                flexShrink: 0,
              }}
            >
              <img
                src={img}
                alt={`${title} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ background: "#FFFFFF", paddingTop: "6rem" }}
    >
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-black">
          Why Companies Likes Upright
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our integration solutions transform your business
          operations
        </p>
      </div>

      {/* Cards Section */}
      <section style={{ width: "100%" }}>
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            images={card.images}
            index={index}
            totalCards={cardData.length}
            color={card.color}
          />
        ))}
      </section>
    </div>
  );
};
