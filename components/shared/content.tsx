"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { EventItem } from "@/data/events";

// Vimeo Video ID
const VIMEO_VIDEO_ID = "1151792250";

// Video thumbnail
const VIDEO_THUMBNAIL =
  "/images/crew-forward-conference/DJI_20251204171155_0062_D.JPG";

interface ContentProps {
  event: EventItem;
}

export function Content({ event }: ContentProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      {/* Font Customization */}
      <style jsx global>{`
        @font-face {
          font-family: "NeutraTextTF-BoldAlt";
          src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Graphik-Regular";
          src: url("/fonts/Graphik-Regular.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a2b4a] uppercase tracking-tighter"
            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
          >
            ABOUT THE EVENT
          </motion.h2>
        </div>

        {/* 1. Video Section */}
        {event.video && (
          <div className="mb-16 md:mb-20">
            <VideoPlayer src={event.video} />
          </div>
        )}

        {/* 2. Text Content (Blog Layout) */}
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-800">
          {/* Full Description - Rendered as paragraphs */}
          <div className="mb-12">
            {event.fullDescription.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-6 leading-relaxed text-gray-700"
                style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights Section */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="mb-12 bg-gray-50 p-8 md:p-10 border-l-4 border-black">
              <h3
                className="text-2xl font-black text-[#1a2b4a] mb-6 uppercase"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
              >
                Key Highlights
              </h3>
              <ul className="space-y-4">
                {event.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-lg font-medium text-gray-800"
                    style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                  >
                    <span className="text-[#ffdf20] mt-1.5">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mission Section */}
          {event.mission && (
            <div className="mt-16">
              <h3
                className="text-3xl md:text-4xl font-black text-[#1a2b4a] mb-8 uppercase"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
              >
                Our Mission
              </h3>
              {event.mission.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  className="mb-6 leading-relaxed text-gray-700"
                  style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

function VideoPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* Thumbnail with Play Button */}
      <div
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-xl cursor-pointer group"
        onClick={() => setIsPlaying(true)}
      >
        <img
          src={VIDEO_THUMBNAIL}
          alt="Video Thumbnail"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xl">
            <Play
              className="w-8 h-8 md:w-10 md:h-10 text-[#1a2b4a] ml-1"
              fill="#1a2b4a"
            />
          </div>
        </div>

        {/* Watch Video Text */}
        <div className="absolute bottom-6 left-6">
          <span
            className="text-white text-sm md:text-base font-bold uppercase tracking-wider"
            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
          >
            Watch Video
          </span>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setIsPlaying(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&quality=1080p`}
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Crew Forward Conference Video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
