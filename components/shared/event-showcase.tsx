"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X, Play } from "lucide-react";

// Local Images Base Path
const BASE_PATH = "/images/crew-forward-conference";

// Vimeo Video ID
const VIMEO_VIDEO_ID = "1151792250";

// Image definition map
const images = {
  // Row 1
  venue: `${BASE_PATH}/DJI_20251204075534_0480_D.JPG`, // Top Left
  speaker: `${BASE_PATH}/IMG_0312(1).jpg`, // Top Left next
  audience_wide: `${BASE_PATH}/DJI_20251204080237_0501_D.JPG`, // Wide shot

  // Row 2
  banner: `${BASE_PATH}/DJI_20251204080433_0510_D.JPG`, // Banner
  hacking: `${BASE_PATH}/DJI_20251204080828_0523_D.JPG`, // Hacking/Group

  // Row 3
  speaker2: `${BASE_PATH}/DJI_20251204080828_0523_D.JPG`, // Female Speaker
  happy_group: `${BASE_PATH}/DJI_20251204105403_0719_D.JPG`, // Happy Group 3 guys
  laptops: `${BASE_PATH}/DJI_20251204111329_0751_D.JPG`, // Laptops

  // Row 4
  branding: `${BASE_PATH}/DJI_20251204111353_0753_D.JPG`, // Conference Branding
  audience_side: `${BASE_PATH}/DJI_20251204111606_0762_D.JPG`, // Audience Side
  food: `${BASE_PATH}/DJI_20251204114707_0791_D.JPG`, // Food/Networking
  outdoor: `${BASE_PATH}/DJI_20251204172623_0086_D.JPG`, // Outdoor
  crews: `${BASE_PATH}/capgreg.jpg`, // Crews

  // Extras
  drone_wide: `${BASE_PATH}/DJI_20251204171155_0062_D.JPG`,
  drone_high: `${BASE_PATH}/DJI_20251204172623_0086_D.JPG`,
};

type GridItem =
  | { type: "image"; src: string; alt: string; className?: string }
  | {
      type: "card";
      title: string;
      color: "green" | "purple" | "red" | "light-green";
      href: string;
      className?: string;
    }
  | {
      type: "video-card";
      title: string;
      color: "green" | "purple" | "red" | "light-green";
      className?: string;
    };

const finalGridItems: GridItem[] = [
  // R1 C1
  { type: "image", src: images.venue, alt: "Venue" },
  // R1 C2
  { type: "image", src: images.speaker, alt: "Speaker" },
  // R1 C3
  { type: "image", src: images.audience_wide, alt: "Wide" },
  // R1 C4-C5 (2 images to fill the space previously occupied by video)
  { type: "image", src: images.drone_wide, alt: "Drone Wide" },
  { type: "image", src: images.outdoor, alt: "Outdoor" },

  // R2 C1-C2 (Banner Spanning 2 cols)
  { type: "image", src: images.banner, alt: "Banner", className: "col-span-2" },
  // R2 C3 (Green Card) -> "VIEW VIDEO SUMMARY" - Opens video modal
  {
    type: "video-card",
    title: "VIEW CREW FORWARD 2024 VIDEO SUMMARY",
    color: "light-green",
  },
  // R2 C4-C5 (2 more images)
  { type: "image", src: images.happy_group, alt: "Happy Group" },
  { type: "image", src: images.laptops, alt: "Laptops" },

  // R3 C1
  { type: "image", src: images.speaker2, alt: "Speaker 2" },
  // R3 C2
  { type: "image", src: images.branding, alt: "Branding" },
  // R3 C3
  { type: "image", src: images.audience_side, alt: "Audience Side" },
  // R3 C4-C5 (Purple Card 2x1) -> "VIEW EDITION"
  {
    type: "card",
    title: "VIEW CREW FORWARD 2024 EDITION",
    color: "purple",
    href: "#",
    className: "col-span-2",
  },

  // R4 C1
  { type: "image", src: images.hacking, alt: "Hacking" },
  // R4 C2
  { type: "image", src: images.drone_high, alt: "Drone High" },
  // R4 C3
  { type: "image", src: images.crews, alt: "Crews" },
  // R4 C4-C5 (Red Card 2x1)
  {
    type: "card",
    title: "VIEW CREW FORWARD 2024 TALKS",
    color: "red",
    href: "#",
    className: "col-span-2",
  },
];

interface EventShowcaseProps {
  title?: string;
  subtitle?: string;
}

export function EventShowcase({
  title = "TAKE A LOOK",
  subtitle = "AT LAST YEAR'S EDITION",
}: EventShowcaseProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#1e1e30]">
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

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-2"
            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-200 uppercase tracking-widest"
            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* GRID CONTAINER - No Spacing (gap-0), Rounded Corners */}
        <div className="w-full rounded-[24px] overflow-hidden">
          {/* 
                Grid Layout: 5 Columns, 4 Rows
             */}
          <div className="grid grid-cols-5 gap-0">
            {finalGridItems.map((item, idx) => {
              // Render based on type
              if (item.type === "video-card")
                return (
                  <VideoCardItem
                    key={idx}
                    item={item}
                    onOpenVideo={() => setIsVideoOpen(true)}
                  />
                );
              if (item.type === "card")
                return <CardItem key={idx} item={item} />;
              if (item.type === "image")
                return <ImageItem key={idx} item={item} />;
              return null;
            })}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container - 16:9 aspect ratio */}
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
    </section>
  );
}

function CardItem({ item }: { item: Extract<GridItem, { type: "card" }> }) {
  const bgColors = {
    red: "bg-[#e63946]",
    orange: "bg-[#fb8500]",
    green: "bg-[#70e000]",
    "light-green": "bg-[#7cb342]", // Muted green for the 'Video Summary' card to match ref
    purple: "bg-[#5c6bc0]",
  };

  return (
    <Link
      href={item.href}
      // Add hover effect specifically here (brightness/opacity)
      className={`relative aspect-auto p-4 md:p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:brightness-110 hover:z-10 ${
        bgColors[item.color]
      } ${item.className || ""}`}
    >
      {/* Arrow Icon Top Right */}
      <div className="absolute top-4 right-4 text-white">
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <span
        className="text-white font-black text-lg md:text-xl uppercase leading-tight tracking-tight relative z-10 max-w-[90%]"
        style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
      >
        {item.title}
      </span>
    </Link>
  );
}

function ImageItem({ item }: { item: Extract<GridItem, { type: "image" }> }) {
  return (
    // Reduced min-height slightly as requested
    <div
      className={`relative min-h-[100px] md:min-h-[120px] lg:min-h-[140px] ${
        item.className || ""
      }`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover block"
      />
    </div>
  );
}

function VideoCardItem({
  item,
  onOpenVideo,
}: {
  item: Extract<GridItem, { type: "video-card" }>;
  onOpenVideo: () => void;
}) {
  const bgColors = {
    red: "bg-[#e63946]",
    orange: "bg-[#fb8500]",
    green: "bg-[#70e000]",
    "light-green": "bg-[#7cb342]",
    purple: "bg-[#5c6bc0]",
  };

  return (
    <button
      onClick={onOpenVideo}
      className={`relative aspect-auto p-4 md:p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:brightness-110 hover:z-10 cursor-pointer ${
        bgColors[item.color]
      } ${item.className || ""}`}
    >
      {/* Play Icon Top Right */}
      <div className="absolute top-4 right-4 text-white">
        <Play className="w-5 h-5 md:w-6 md:h-6" fill="white" />
      </div>

      <span
        className="text-white font-black text-lg md:text-xl uppercase leading-tight tracking-tight relative z-10 max-w-[90%]"
        style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
      >
        {item.title}
      </span>
    </button>
  );
}

export default EventShowcase;
