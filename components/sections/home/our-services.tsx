"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
  const [direction, setDirection] = useState(1);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentService = services[currentIndex];

  const imageSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
    }),
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-4 md:mx-6 lg:mx-8 border border-gray-200">
        {/* Mobile/Tablet Layout: Image on top, content below */}
        <div className="block lg:hidden">
          {/* Image Section - Mobile */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={imageSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={currentService.image}
                  alt={currentService.label}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-white text-base sm:text-lg font-medium">
                    {currentService.label}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section - Mobile */}
          <div className="px-5 sm:px-6 md:px-8 py-8 sm:py-10">
            <span className="inline-flex items-center px-3 py-1 mb-5 text-[10px] sm:text-xs font-medium tracking-wider uppercase border border-gray-300 rounded-full text-gray-600">
              Our Services
            </span>

            <div className="space-y-5 sm:space-y-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`label-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#fec000] uppercase"
                >
                  {currentService.label}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                >
                  {currentService.title}
                </motion.h2>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-gray-600 text-sm sm:text-base leading-relaxed"
                >
                  {currentService.description}
                </motion.p>
              </AnimatePresence>

              <div className="flex items-center gap-0.5">
                <Link
                  href={currentService.link}
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#ffdf20] hover:bg-yellow-600 text-black font-medium text-xs sm:text-sm transition-colors duration-300"
                >
                  Our Services
                </Link>
                <Link
                  href={currentService.link}
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#ffdf20] hover:bg-yellow-600 text-black transition-colors duration-300"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={goToPrevious}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-[#ffdf20] text-black transition-all duration-300"
                  aria-label="Previous service"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-[#ffdf20] text-black transition-all duration-300"
                  aria-label="Next service"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                {/* Progress dots - Mobile */}
                <div className="flex gap-1.5 ml-4">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-6 bg-[#ffdf20]"
                          : "w-1.5 bg-gray-300"
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-[0.45fr_1px_0.55fr] items-stretch min-h-[600px] xl:min-h-[700px]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center pl-12 xl:pl-16 pr-10 xl:pr-12 py-12">
            <span className="inline-flex items-center self-start px-4 py-1.5 mb-8 text-xs font-medium tracking-wider uppercase border border-gray-300 rounded-full text-gray-600">
              Our Services
            </span>

            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`label-desktop-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-sm font-semibold tracking-wider text-[#fec000] uppercase"
                >
                  {currentService.label}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-desktop-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                >
                  {currentService.title}
                </motion.h2>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-desktop-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-lg"
                >
                  {currentService.description}
                </motion.p>
              </AnimatePresence>

              <div className="flex items-center gap-0.5">
                <Link
                  href={currentService.link}
                  className="inline-flex items-center px-6 py-3 bg-[#ffdf20] hover:bg-yellow-600 text-black font-medium text-sm transition-colors duration-300"
                >
                  Our Services
                </Link>
                <Link
                  href={currentService.link}
                  className="inline-flex items-center justify-center w-11 h-11 bg-[#ffdf20] hover:bg-yellow-600 text-black transition-colors duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-[#ffdf20] text-black transition-all duration-300"
                  aria-label="Previous service"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-[#ffdf20] text-black transition-all duration-300"
                  aria-label="Next service"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="bg-gray-200" />

          {/* Right Column - Image */}
          <div className="relative overflow-hidden">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={`desktop-img-${currentIndex}`}
                custom={direction}
                variants={imageSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={currentService.image}
                  alt={currentService.label}
                  fill
                  className="object-cover"
                  sizes="55vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-white text-lg xl:text-xl font-medium"
                  >
                    {currentService.label}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
