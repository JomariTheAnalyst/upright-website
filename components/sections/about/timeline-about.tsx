"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a vision to innovate.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303dff5a98c?w=600&h=800&fit=crop",
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Secured our first enterprise contract.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop",
  },
  {
    year: "2017",
    title: "Team Expansion",
    description: "Grew to a team of 50 passionate experts.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop",
  },
  {
    year: "2018",
    title: "New Headquarters",
    description: "Moved into our sustainable office.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
  },
  {
    year: "2019",
    title: "50+ Clients Milestone",
    description: "Reached a significant client base.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched our new digital platform.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop",
  },
  {
    year: "2021",
    title: "Cloud Solutions Launch",
    description: "Introduced scalable cloud services.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=800&fit=crop",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded operations to 3 continents.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=800&fit=crop",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for tech excellence.",
    image:
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=800&fit=crop",
  },
];

// Fan/Arc configurations
// REDUCED SIZE version
// Scaling down base size and maintaining wide spread
const cardConfigs = [
  {
    offset: -2,
    x: -700,
    y: 100,
    z: -200,
    rotate: -20,
    scale: 1,
    opacity: 0.8,
    zIndex: 1,
  },
  {
    offset: -1,
    x: -380,
    y: 25,
    z: -50,
    rotate: -10,
    scale: 1,
    opacity: 0.9,
    zIndex: 5,
  },
  {
    offset: 0,
    x: 0,
    y: 0,
    z: 100,
    rotate: 0,
    scale: 1,
    opacity: 1,
    zIndex: 20,
  },
  {
    offset: 1,
    x: 380,
    y: 25,
    z: -50,
    rotate: 10,
    scale: 1,
    opacity: 0.9,
    zIndex: 5,
  },
  {
    offset: 2,
    x: 700,
    y: 100,
    z: -200,
    rotate: 20,
    scale: 1,
    opacity: 0.8,
    zIndex: 1,
  },
];

export function TimelineAboutSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [direction, setDirection] = useState(0);

  const totalItems = timelineData.length;

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  }, [totalItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Get visible cards around activeIndex
  const getVisibleCards = () => {
    const cards: {
      item: TimelineItem;
      config: (typeof cardConfigs)[0];
      realIndex: number;
    }[] = [];

    for (let i = 0; i < 5; i++) {
      const config = cardConfigs[i];
      let realIndex = activeIndex + config.offset;

      // Wrap around logic
      if (realIndex < 0) realIndex = totalItems + realIndex;
      if (realIndex >= totalItems) realIndex = realIndex % totalItems;
      while (realIndex < 0) realIndex += totalItems;

      cards.push({
        item: timelineData[realIndex],
        config,
        realIndex,
      });
    }
    return cards;
  };

  const activeItem = timelineData[activeIndex];
  const visibleCards = getVisibleCards();

  return (
    <section className="py-24 md:py-36 overflow-hidden bg-white w-full">
      {/* Inject custom font */}
      <style jsx global>{`
        @font-face {
          font-family: "RedExPro";
          src: url("/fonts/redexpro.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* Full width container */}
      <div className="w-full px-0 font-redex">
        {/* Section Title Badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-semibold text-black">
            Our Timeline
          </span>
        </div>

        {/* Updated Heading Paragraph */}
        <div className="text-center mb-16 px-6">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-5xl mx-auto text-gray-800 tracking-tight"
            style={{ fontFamily: "'RedExPro', sans-serif" }}
          >
            From its early days as a review center supporting learners and
            professionals, Upright gradually expanded its
            capabilities—transforming experience and insight into reliable IT
            systems and consultancy services.
          </h2>
        </div>

        {/* Carousel Container - Slightly reduced height */}
        <div className="relative h-[650px] md:h-[700px] flex items-center justify-center perspective-container w-full overflow-visible">
          {/* Navigation Arrows */}
          <div className="absolute left-[5%] md:left-[22%] top-1/2 -translate-y-1/2 z-50">
            <button
              onClick={handlePrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft
                className="w-6 h-6 md:w-7 md:h-7 text-black"
                strokeWidth={3}
              />
            </button>
          </div>

          <div className="absolute right-[5%] md:right-[22%] top-1/2 -translate-y-1/2 z-50">
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
              aria-label="Next"
            >
              <ChevronRight
                className="w-6 h-6 md:w-7 md:h-7 text-black"
                strokeWidth={3}
              />
            </button>
          </div>

          {/* 3D Scene */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleCards.map(({ item, config, realIndex }) => {
                const isCenter = config.offset === 0;

                return (
                  <motion.div
                    key={`${item.year}-${realIndex}`}
                    className="absolute top-10 pointer-events-auto"
                    initial={{
                      x: config.x - direction * 350,
                      y: config.y,
                      z: config.z - 100,
                      rotate: config.rotate,
                      opacity: 0,
                      scale: config.scale * 0.9,
                    }}
                    animate={{
                      x: config.x,
                      y: config.y,
                      z: config.z,
                      rotate: config.rotate,
                      scale: config.scale,
                      opacity: config.opacity,
                      zIndex: config.zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      mass: 0.8,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex flex-col items-center">
                      {/* Card Frame - REDUCED SIZE */}
                      <div
                        className={cn(
                          "relative transition-all duration-300 transform-style-3d cursor-pointer",
                          // Reduced size per request (approx 20% smaller than previous step)
                          "w-[260px] h-[380px] md:w-[300px] md:h-[440px]"
                        )}
                        onClick={() => {
                          if (config.offset < 0) handlePrev();
                          if (config.offset > 0) handleNext();
                        }}
                      >
                        {/* Content Wrapper */}
                        {isCenter ? (
                          // Center Card - Navy Blue Wavy Frame
                          <div
                            className="w-full h-full relative p-3 flex items-center justify-center bg-black"
                            style={{
                              clipPath:
                                "polygon(1% 1%, 20% 0%, 40% 2%, 60% 0%, 80% 2%, 99% 1%, 100% 20%, 98% 40%, 100% 60%, 98% 80%, 100% 99%, 80% 98%, 60% 100%, 40% 98%, 20% 100%, 1% 99%, 2% 80%, 0% 60%, 2% 40%, 0% 20%)",
                              backgroundColor: "#0d0d26", // Navy Blue
                              transform: "rotate(-1deg)",
                            }}
                          >
                            <div
                              className="w-full h-full relative overflow-hidden bg-white"
                              style={{
                                borderRadius: "10px",
                              }}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                draggable={false}
                              />
                            </div>
                          </div>
                        ) : (
                          // Side Cards - Rounded Rectangle
                          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white brightness-90">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                          </div>
                        )}
                      </div>

                      {/* Year + Details */}
                      <div
                        className={cn(
                          "mt-6 text-center transition-all duration-300",
                          isCenter ? "opacity-100" : "opacity-80"
                        )}
                      >
                        <span
                          className="block font-black tracking-tight"
                          style={{
                            textShadow: "1px 1px 0px rgba(0,0,0,0.1)",
                            fontFamily: "'RedExPro', sans-serif",
                            fontSize: "3rem", // Reduced font size to match smaller card
                            color: "#FFD700", // YELLOW as requested
                          }}
                        >
                          {item.year}
                        </span>

                        {/* Short Paragraph - Only for Center */}
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="max-w-[280px] mx-auto mt-2"
                          >
                            <p
                              className="text-sm font-bold text-black leading-tight tracking-wide uppercase"
                              style={{ fontFamily: "'RedExPro', sans-serif" }}
                            >
                              {item.title}
                            </p>
                            <p
                              className="text-xs font-medium text-gray-500 mt-1"
                              style={{ fontFamily: "'RedExPro', sans-serif" }}
                            >
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
