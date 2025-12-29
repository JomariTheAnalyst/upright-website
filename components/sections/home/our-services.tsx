"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    label: "Software Development",
    title: "From Custom Apps To Enterprise Systems, All Tailor-Made.",
    description:
      "Whether it's a web application or a full enterprise solution, our software is built with scalable architecture that's secure, performant & aligned with your business goals.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    link: "/services/software-development",
  },
  {
    id: 2,
    label: "System Design & Analysis",
    title: "From Architecture To Implementation, All Strategically Planned.",
    description:
      "Whether it's optimizing existing systems or designing new infrastructure, our solutions are based on thorough analysis that's efficient, scalable & compliant with industry standards.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    link: "/services/system-integration",
  },
  {
    id: 3,
    label: "Learning Content Development",
    title: "From E-Learning To Training Systems, All Expertly Crafted.",
    description:
      "Whether it's interactive courses or comprehensive training platforms, our learning solutions are designed with engaging content that's effective, accessible & tailored to your workforce needs.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    link: "/services/learning-content",
  },
  {
    id: 4,
    label: "IT Consultancy",
    title: "From Strategy To Execution, All Expert-Guided.",
    description:
      "Whether it's digital transformation or technology roadmapping, our consultancy services are grounded in deep expertise that's practical, results-driven & focused on maximizing your ROI.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    link: "/services/it-consultancy",
  },
  {
    id: 5,
    label: "Hardware Maintenance",
    title: "From Repairs To Upgrades, All Professionally Handled.",
    description:
      "Whether it's preventive maintenance or emergency support, our hardware services are delivered with technical precision that's reliable, timely & keeps your infrastructure running at peak performance.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
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
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Custom Font */}
      <style jsx global>{`
        @font-face {
          font-family: "NewFont";
          src: url("/fonts/newfont.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="mx-4 md:mx-6 lg:mx-8">
        {/* Section Badge */}
        <div className="mb-10 sm:mb-12 lg:mb-16 px-5 sm:px-8 lg:px-16">
          <span
            className="inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
            style={{ fontFamily: "NewFont, sans-serif" }}
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
                  fontFamily: "NewFont, sans-serif",
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
                    fontFamily: "NewFont, sans-serif",
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
                  fontFamily: "NewFont, sans-serif",
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
                href={currentService.link}
                className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 md:h-12 md:w-12 lg:h-14 lg:w-14"
                style={{
                  borderColor: isHovered ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 80%)",
                  backgroundColor: isHovered ? "#ffdf20" : "transparent",
                  color: "hsl(0, 0%, 0%)",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  boxShadow: isHovered
                    ? "0 8px 32px rgba(0, 0, 0, 0.15)"
                    : "0 0 0 transparent",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-500 md:h-5 md:w-5"
                  style={{
                    transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </Link>
              <span
                className="text-[10px] font-medium uppercase tracking-widest transition-all duration-700 md:text-xs"
                style={{
                  fontFamily: "NewFont, sans-serif",
                  opacity: isHovered ? 1 : 0.5,
                  transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: isHovered ? "100ms" : "0ms",
                }}
              >
                Explore
              </span>
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

          {/* Right: Image Block - Reduced width */}
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

            {/* Image container - landscape aspect ratio for reduced height */}
            <div
              className="relative overflow-hidden border-2 border-black"
              style={{ aspectRatio: "4/3" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${currentIndex}`}
                  src={currentService.image}
                  alt={currentService.label}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover transition-all duration-1000"
                  style={{
                    transform: isHovered ? "scale(1.03)" : "scale(1)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-700"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Corner accents */}
              <div
                className="absolute left-3 top-3 h-6 w-px bg-white/80 transition-all duration-500 md:left-4 md:top-4 md:h-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "50ms",
                }}
              />
              <div
                className="absolute left-3 top-3 h-px w-6 bg-white/80 transition-all duration-500 md:left-4 md:top-4 md:w-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "100ms",
                }}
              />
              <div
                className="absolute bottom-3 right-3 h-6 w-px bg-white/80 transition-all duration-500 md:bottom-4 md:right-4 md:h-8"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "150ms",
                }}
              />
              <div
                className="absolute bottom-3 right-3 h-px w-6 bg-white/80 transition-all duration-500 md:bottom-4 md:right-4 md:w-8"
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
                fontFamily: "NewFont, sans-serif",
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
