"use client";

import { motion } from "framer-motion";
import { EventItem } from "@/data/events";

interface WorkshopsProps {
  event: EventItem;
}

export function Workshops({ event }: WorkshopsProps) {
  const facilitators = event.stats?.facilitators || [];

  if (facilitators.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white text-black overflow-hidden border-t border-gray-100">
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
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a2b4a] uppercase tracking-tighter"
              style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
            >
              WORKSHOPS
            </motion.h2>
        </div>

        {/* Facilitators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {facilitators.map((facilitator, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col bg-white border border-gray-200"
                >
                    {/* Top Section - Workshop Title */}
                    <div className="p-8 md:p-10 border-b border-gray-200">
                        <span 
                            className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block"
                            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                        >
                            WORKSHOP TOPIC
                        </span>
                        <h3 
                            className="text-3xl md:text-5xl font-black text-[#1a2b4a] uppercase leading-[0.9]"
                            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                        >
                            {facilitator.workshop}
                        </h3>
                    </div>
                    
                    {/* Bottom Section - Facilitator Title */}
                     <div className="p-8 md:p-10 bg-gray-50 flex-grow">
                        <span 
                            className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block"
                             style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                        >
                            FACILITATED BY
                        </span>
                        <p 
                            className="text-xl md:text-2xl font-black text-[#1a2b4a] mb-1"
                            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                        >
                            {facilitator.name}
                        </p>
                        <p 
                            className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest"
                            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                        >
                            {facilitator.role}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
