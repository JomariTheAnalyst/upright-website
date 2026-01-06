"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projects-data";

// Map projects data for the carousel (excluding Avior LMS to avoid duplicate)
const projects = projectsData
  .filter((p) => p.slug !== "/projects/avior-lms")
  .map((project, index) => ({
    id: index + 1,
    title: project.title,
    shortDescription: project.shortDescription,
    image: project.image,
    link: project.slug,
    client: project.client,
    partner: project.partner,
    category: project.category,
  }));

export function OurProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
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
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Our Projects
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1]"
              style={{ fontFamily: "Graphik, sans-serif" }}
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
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              We partner with organizations to deliver technology solutions that
              transform operations and create lasting value. From digital health
              platforms to maritime learning systems, our projects demonstrate
              our commitment to excellence and innovation.
            </p>

            <div className="flex items-center gap-0.5">
              <Link
                href="/projects"
                className="group relative inline-flex items-center overflow-hidden"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
              <span
                  className="relative px-5 sm:px-6 py-2.5 sm:py-3 bg-[#ffdf20] text-black font-medium text-xs sm:text-sm"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 14px) 100%, 0 100%)",
                  }}
                >
                  <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    View All Projects
                  </span>
                </span>
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
              className="group relative w-12 h-12 flex items-center justify-center border-2 border-black bg-[#ffdf20] text-black overflow-hidden"
              aria-label="Scroll left"
            >
              <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <ChevronLeft className="relative z-10 w-5 h-5 transition-colors duration-500 group-hover:text-white" />
            </button>
            <button
              onClick={scrollRightFn}
              className="group relative w-12 h-12 flex items-center justify-center border-2 border-black bg-[#ffdf20] text-black overflow-hidden"
              aria-label="Scroll right"
            >
              <span className="absolute inset-0 bg-[#0000ff] transform origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <ChevronRight className="relative z-10 w-5 h-5 transition-colors duration-500 group-hover:text-white" />
            </button>
          </div>

          {/* Drag hint for mobile */}
          <p
            className="lg:hidden text-xs text-gray-500 px-5 sm:px-8 mb-3 flex items-center gap-2"
            style={{ fontFamily: "Graphik, sans-serif" }}
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
              >
                <Link
                  href={project.link}
                  className="group block relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[800px] overflow-visible"
                  style={{
                    aspectRatio: "16/10",
                  }}
                  onClick={(e) => isDragging && e.preventDefault()}
                >
                  {/* Main card with diagonal clip */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 70px) 100%, 0 100%)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, (max-width: 1280px) 600px, 800px"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500" />
                  </div>

                  {/* Border with diagonal cut - using SVG for precise control */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M 0,0 L 100,0 L 100,87.5 L 91.25,100 L 0,100 Z"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Content */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 70px) 100%, 0 100%)",
                    }}
                  >
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-3 drop-shadow-lg"
                      style={{ fontFamily: "Graphik, sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* Short Description - Shows on hover */}
                    <p
                      className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden sm:block"
                      style={{ fontFamily: "Graphik, sans-serif" }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Client/Partner Info */}
                    {(project.client || project.partner) && (
                      <p
                        className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block"
                        style={{ fontFamily: "Graphik, sans-serif" }}
                      >
                        {project.client
                          ? `Client: ${project.client}`
                          : `Partner: ${project.partner}`}
                      </p>
                    )}

                    {/* Read More Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 hidden sm:block">
                      <div className="relative border border-white overflow-hidden group/btn px-6 py-2 sm:px-8 sm:py-3 cursor-pointer">
                        <span className="relative z-10 text-white font-bold uppercase tracking-widest text-xs sm:text-sm group-hover/btn:text-white transition-colors duration-300">
                          Read More
                        </span>
                        <div className="absolute inset-0 bg-[#0000ff] transform -translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0" />
                      </div>
                    </div>
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
