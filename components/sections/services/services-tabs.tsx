"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface TabContent {
  id: number;
  title: string;
  description: string;
  image: string;
  background: string;
  textPosition: "left" | "right";
}

const tabsData: TabContent[] = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/services-tabs/laptop1.webp",
    background: "/images/services-tabs/bg/inventory-use-case-bg.webp",
    textPosition: "left",
  },
  {
    id: 2,
    title: "Consectetur Adipiscing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/services-tabs/laptop2.webp",
    background: "/images/services-tabs/bg/logistics-use-case-bg.webp",
    textPosition: "right",
  },
  {
    id: 3,
    title: "Sed Do Eiusmod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/services-tabs/laptop3.webp",
    background: "/images/services-tabs/bg/procurement-use-case-bg.webp",
    textPosition: "left",
  },
  {
    id: 4,
    title: "Tempor Incididunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/services-tabs/laptop4.webp",
    background: "/images/services-tabs/bg/vendor-management-use-case-bg.webp",
    textPosition: "right",
  },
];

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-slide every 8 seconds with progress tracking
  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1.25; // Increment by 1.25% every 100ms (8 seconds total)
      });
    }, 100);

    const slideInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabsData.length);
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [activeTab]);

  const currentTab = tabsData[activeTab];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - Edge to Edge - Changes per tab */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentTab.background}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Tab Navigation */}
      <div className="relative z-10 w-full">
        <div className="flex justify-center items-center border-b border-white/20">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative flex-1 px-8 py-6 text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {tab.title}
              {/* Progress Bar */}
              {activeTab === index && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 0.3 },
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                currentTab.textPosition === "right" ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  currentTab.textPosition === "right"
                    ? "lg:col-start-2"
                    : "lg:col-start-1"
                }`}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  {currentTab.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                  {currentTab.description}
                </p>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  See use case
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Laptop Image - Even Larger Size */}
              <div
                className={`relative ${
                  currentTab.textPosition === "right"
                    ? "lg:col-start-1 lg:row-start-1"
                    : "lg:col-start-2"
                }`}
              >
                <div className="relative w-full h-[450px] md:h-[580px] lg:h-[680px] xl:h-[720px]">
                  <Image
                    src={currentTab.image}
                    alt={currentTab.title}
                    fill
                    className="object-contain object-top drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="relative z-10 flex justify-center gap-3 pb-12">
        {tabsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeTab === index ? "w-12 bg-white" : "w-6 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
