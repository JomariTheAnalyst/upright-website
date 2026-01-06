"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { eventsData } from "@/data/events";

export function EventsSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f7f6f1]">
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

      <div className="w-full px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 px-2 md:px-4"
        >
          <span className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black">
            Events
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-tight"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Events We Are Part Of
          </h2>
        </motion.div>

        {/* Events Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto ">
          {eventsData.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-black flex flex-col bg-white group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container - Increased Height */}
              <div className="relative h-[400px] md:h-[520px] border-b border-black overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content - Increased padding for more height/breathing room */}
              <div className="p-8 md:p-10 flex-1 flex flex-col bg-white relative z-10 transition-colors duration-300">
                {/* Date */}
                <p
                  className="text-sm font-bold mb-4 tracking-wide uppercase"
                  style={{
                    fontFamily: "Graphik, sans-serif",
                    color: "#0000ff",
                  }}
                >
                  {event.date}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight uppercase tracking-tight flex-1"
                  style={{ fontFamily: "Graphik, sans-serif" }}
                >
                  {event.title}
                </h3>
              </div>

              {/* Footer (Integrated Outline) */}
              <div className="mt-auto border-t border-black flex items-stretch bg-white relative z-20">
                {/* Left: Reading Time */}
                <div className="flex-1 px-6 py-4 border-r border-black flex items-center justify-start">
                  <span
                    className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-bold"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    READING TIME: {event.readingTime}
                  </span>
                </div>

                {/* Right: READ MORE Button (Block) */}
                <Link
                  href={event.slug}
                  className="relative px-8 py-4 flex items-center justify-center gap-3 overflow-hidden group/btn"
                >
                  {/* Hover Fill Background - TOP TO BOTTOM (-translate-y-full -> 0) */}
                  <span
                    className="absolute inset-0 -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"
                    style={{ backgroundColor: event.color }}
                  />

                  <span
                    className="relative z-10 text-base font-bold uppercase tracking-wide transition-colors duration-300 group-hover/btn:!text-white"
                    style={{
                      fontFamily: "Graphik, sans-serif",
                      color: event.color,
                    }}
                  >
                    READ MORE
                  </span>
                  <ArrowRight
                    className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover/btn:!text-white"
                    style={{ color: event.color }}
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
