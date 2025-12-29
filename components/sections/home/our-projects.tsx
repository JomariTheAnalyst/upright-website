"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "One Health Pass",
    shortDescription:
      "Digital health verification for international travelers entering the Philippines.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    link: "/projects/one-health-pass",
  },
  {
    id: 2,
    title: "MyAvior",
    shortDescription:
      "Digital learning platforms and learning content development solutions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    link: "/projects/myavior",
  },
  {
    id: 3,
    title: "MyCado",
    shortDescription:
      "Maritime learning solutions for onboard and shore-based staff training.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    link: "/projects/mycado",
  },
  {
    id: 4,
    title: "Gerry's Restaurant CCTV Installation",
    shortDescription:
      "Complete CCTV surveillance system installation for Gerry's Restaurant branches ensuring security and monitoring.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    link: "/projects/gerrys-cctv",
  },
  {
    id: 5,
    title: "LBC CCTV Installation",
    shortDescription:
      "Enterprise-grade CCTV security system deployment for LBC Express facilities and branches.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    link: "/projects/lbc-cctv",
  },
];

export function OurProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftFn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRightFn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative bg-[#f5f5f5] py-12 sm:py-16 md:py-20 lg:py-28">
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
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-5 sm:px-8 lg:px-16 mb-10 sm:mb-12 lg:mb-20">
          {/* Left - Section Label & Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center px-4 py-1.5 mb-5 sm:mb-8 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Our Projects
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1]"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Innovative Solutions.
              <br />
              <span className="font-normal">Real-World Impact.</span>
            </h2>
          </motion.div>

          {/* Right - Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p
              className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              We partner with organizations to deliver technology solutions that
              transform operations and create lasting value. From digital health
              platforms to maritime learning systems, our projects demonstrate
              our commitment to excellence and innovation.
            </p>

            <div className="flex items-center gap-0.5">
              <Link
                href="/projects"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#ffdf20] hover:bg-yellow-700 text-black font-medium text-xs sm:text-sm transition-colors duration-300"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                View All Projects
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#ffdf20] hover:bg-yellow-700 text-black transition-colors duration-300"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative">
          {/* Navigation Arrows - Desktop only */}
          <div className="hidden lg:flex absolute -top-16 right-16 gap-2 z-10">
            <button
              onClick={scrollLeftFn}
              className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-600 transition-all duration-300 rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRightFn}
              className="w-12 h-12 flex items-center justify-center border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-600 transition-all duration-300 rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Drag hint for mobile */}
          <p
            className="lg:hidden text-xs text-gray-500 px-5 sm:px-8 mb-3 flex items-center gap-2"
            style={{ fontFamily: "NewFont, sans-serif" }}
          >
            <ChevronLeft className="w-3 h-3" />
            Swipe to explore
            <ChevronRight className="w-3 h-3" />
          </p>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className={`flex gap-4 sm:gap-6 overflow-x-auto px-5 sm:px-8 lg:px-16 pb-4 snap-x snap-mandatory select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 snap-start"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link
                  href={project.link}
                  className="group block relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[800px] overflow-hidden border-2 border-black"
                  style={{
                    aspectRatio: "16/10",
                  }}
                  onClick={(e) => isDragging && e.preventDefault()}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, (max-width: 1280px) 600px, 800px"
                    draggable={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 pr-12 sm:pr-16">
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-1 sm:mb-2"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                        y: hoveredId === project.id ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-md hidden sm:block"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      {project.shortDescription}
                    </motion.p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-4 px-5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth =
                      carouselRef.current.scrollWidth / projects.length;
                    carouselRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors"
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
