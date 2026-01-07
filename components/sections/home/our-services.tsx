"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Import Lottie animation data
import webDevelopmentAnimation from "@/public/animations/Web Development.json";
import codingAnimation from "@/public/animations/Coding.json";
import expertiseAnimation from "@/public/animations/expertise.json";
import onlineAnimation from "@/public/animations/Online.json";
import technologyAnimation from "@/public/animations/Technologyy.json";

const services = [
  {
    id: 1,
    label: "Software Development",
    title: "From Custom Apps To Enterprise Systems, All Tailor-Made.",
    description:
      "Whether it's a web application or a full enterprise solution, our software is built with scalable architecture that's secure, performant & aligned with your business goals.",
    animation: webDevelopmentAnimation,
    link: "/services/software-development",
  },
  {
    id: 2,
    label: "System Design & Analysis",
    title: "From Architecture To Implementation, All Strategically Planned.",
    description:
      "Whether it's optimizing existing systems or designing new infrastructure, our solutions are based on thorough analysis that's efficient, scalable & compliant with industry standards.",
    animation: codingAnimation,
    link: "/services/system-integration",
  },
  {
    id: 3,
    label: "Learning Content Development",
    title: "From E-Learning To Training Systems, All Expertly Crafted.",
    description:
      "Whether it's interactive courses or comprehensive training platforms, our learning solutions are designed with engaging content that's effective, accessible & tailored to your workforce needs.",
    animation: expertiseAnimation,
    link: "/services/learning-content",
  },
  {
    id: 4,
    label: "IT Consultancy",
    title: "From Strategy To Execution, All Expert-Guided.",
    description:
      "Whether it's digital transformation or technology roadmapping, our consultancy services are grounded in deep expertise that's practical, results-driven & focused on maximizing your ROI.",
    animation: onlineAnimation,
    link: "/services/it-consultancy",
  },
  {
    id: 5,
    label: "Hardware Maintenance",
    title: "From Repairs To Upgrades, All Professionally Handled.",
    description:
      "Whether it's preventive maintenance or emergency support, our hardware services are delivered with technical precision that's reliable, timely & keeps your infrastructure running at peak performance.",
    animation: technologyAnimation,
    link: "/services/hardware-solutions",
  },
];

const AUTO_SLIDE_INTERVAL = 8000;

export function OurServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentService = services[currentIndex];

  return (
    <section className="relative bg-[#f7f6f1] py-12 sm:py-16 md:py-20 lg:py-28">
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

      <div className="mx-4 md:mx-6 lg:mx-8">
        {/* Section Badge */}
        <div className="mb-10 sm:mb-12 lg:mb-16 px-5 sm:px-8 lg:px-16">
          <span
            className="inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Our Services
          </span>
        </div>

        {/* Main Content */}
        <div
          className="group relative flex cursor-pointer flex-col items-center gap-8 md:flex-row md:items-start md:gap-8 lg:gap-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left: Text Block - Much Wider */}
          <div className="relative z-10 flex w-full max-w-[600px] shrink-0 flex-col items-center text-center px-5 sm:px-8 lg:px-16 md:w-[500px] md:items-start md:text-left lg:w-[550px] lg:pt-4">
            {/* Label with animated line */}
            <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
              <div
                className="h-px bg-black transition-all duration-700"
                style={{
                  width: isHovered ? 48 : 32,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              <span
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-black transition-all duration-700 md:text-xs"
                style={{
                  fontFamily: "Graphik, sans-serif",
                  letterSpacing: isHovered ? "0.3em" : "0.25em",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <span
                  className="block text-4xl font-bold tracking-tight text-black transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
                  style={{
                    fontFamily: "Graphik, sans-serif",
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {currentService.label}
                </span>
              </motion.h2>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 max-w-[480px] text-base leading-relaxed text-gray-600 transition-all duration-700 md:mt-8 md:max-w-[450px] md:text-lg lg:mt-10 lg:max-w-[500px]"
                style={{
                  fontFamily: "Graphik, sans-serif",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {currentService.description}
              </motion.p>
            </AnimatePresence>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-4 md:mt-8 lg:mt-10">
              <Link
                href="/services"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#ffdf20] bg-[#ffdf20] overflow-hidden md:h-12 md:w-12 lg:h-14 lg:w-14"
              >
                <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 rounded-full" />
                <ArrowUpRight className="relative z-10 h-4 w-4 text-black transition-all duration-500 md:h-5 md:w-5 group-hover:text-white group-hover:rotate-45" />
              </Link>
              <Link
                href="/services"
                className="text-[10px] font-medium uppercase tracking-widest transition-all duration-700 md:text-xs opacity-50 hover:opacity-100"
                style={{
                  fontFamily: "Graphik, sans-serif",
                }}
              >
                Explore
              </Link>
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 flex items-center gap-3 md:mt-10">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black hover:bg-[#ffdf20] text-black transition-all duration-300"
                aria-label="Previous service"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black hover:bg-[#ffdf20] text-black transition-all duration-300"
                aria-label="Next service"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              {/* Progress dots */}
              <div className="flex gap-1.5 ml-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-[#ffdf20]"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Lottie Animation Block */}
          <div
            className="relative transition-all duration-700 w-full md:w-[55%] lg:w-[50%] md:ml-auto"
            style={{
              transform: isHovered
                ? "translateX(4px) translateY(-4px)"
                : "translateX(0) translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Frame outline - black on hover */}
            <div
              className="absolute -inset-3 border-2 transition-all duration-700 md:-inset-4"
              style={{
                borderColor: isHovered ? "rgba(0, 0, 0, 1)" : "transparent",
                transform: isHovered ? "scale(1.01)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Animation container */}
            <div
              className="relative overflow-hidden border-2 border-black bg-gradient-to-br from-gray-50 to-gray-100"
              style={{ aspectRatio: "4/3" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`animation-${currentIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full flex items-center justify-center p-4 md:p-6"
                  style={{
                    transform: isHovered ? "scale(1.03)" : "scale(1)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDuration: "1000ms",
                  }}
                >
                  <Lottie
                    animationData={currentService.animation}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Corner accents */}
              <div
                className="absolute left-3 top-3 h-6 w-px bg-black/40 transition-all duration-500 md:left-4 md:top-4 md:h-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "50ms",
                }}
              />
              <div
                className="absolute left-3 top-3 h-px w-6 bg-black/40 transition-all duration-500 md:left-4 md:top-4 md:w-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "100ms",
                }}
              />
              <div
                className="absolute bottom-3 right-3 h-6 w-px bg-black/40 transition-all duration-500 md:bottom-4 md:right-4 md:h-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "150ms",
                }}
              />
              <div
                className="absolute bottom-3 right-3 h-px w-6 bg-black/40 transition-all duration-500 md:bottom-4 md:right-4 md:w-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "right",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "200ms",
                }}
              />
            </div>

            {/* Index number */}
            <span
              className="absolute -bottom-8 right-0 font-mono text-sm text-gray-400 transition-all duration-700 md:-bottom-10 md:text-base"
              style={{
                fontFamily: "Graphik, sans-serif",
                opacity: isHovered ? 1 : 0.4,
                transform: isHovered ? "translateY(4px)" : "translateY(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
