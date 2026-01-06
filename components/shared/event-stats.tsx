"use client";

import { motion } from "framer-motion";
import { eventsData } from "@/data/events";

export function EventStats() {
  // Get Crew Forward Conference data
  const crewForwardEvent = eventsData.find(
    (e) => e.slug === "/events/crew-forward-conference"
  );
  const stats = crewForwardEvent?.stats;

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
        {/* Main Title Area */}
        <div className="mb-16 md:mb-24 relative">
          {/* Optional decorative background element mimicking the reference's subtle shape, 
                but in a neutral tone since user asked for white background 
            */}
          <div className="absolute -top-10 right-0 w-[300px] h-[200px] bg-gray-50 rounded-3xl -z-10 transform rotate-3" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-[#1a2b4a] uppercase leading-[0.9] tracking-tighter"
            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
          >
            THE VOYAGE
            <br />
            <span className="text-black">SO FAR</span>
          </motion.h2>
        </div>

        {/* Three Column Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-28 text-gray-700 font-medium leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
          >
            Crew Forward 2025 took place in the beautiful city of{" "}
            {stats?.location || "Manila"}. A gathering of brilliant minds and
            passionate innovators in the maritime industry.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
          >
             Led by {crewForwardEvent?.leadBy || "Atria Learning & Development"}, in collaboration with {crewForwardEvent?.inCoordinationWith || "Upright Solutions"}.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
          >
            Don't miss the chance to join us in this exciting event! Join us in
            our latest edition exploring the future of maritime leadership.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="border-t-2 border-b-2 border-black">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-black">
            <StatItem
              number={String(stats?.attendees || 175)}
              label="ATTENDEES"
              delay={0.1}
            />
            <StatItem
              number={String(stats?.speakers || 5)}
              label="SPEAKERS"
              delay={0.2}
            />
            <StatItem
              number={String(stats?.talks || 8)}
              label="TALKS"
              delay={0.3}
            />
            <StatItem
              number={String(stats?.workshops || 3)}
              label="WORKSHOPS"
              delay={0.4}
            />
          </div>

          {/* Bottom Info Row (Location & Date) */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black border-t-2 border-black">
            <div className="py-8 md:py-10 text-center">
              <span
                className="text-2xl md:text-4xl font-black uppercase tracking-widest text-[#1a2b4a]"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
              >
                {stats?.location || "MANILA"}
              </span>
            </div>
            <div className="py-8 md:py-10 text-center">
              <span
                className="text-2xl md:text-4xl font-black uppercase tracking-widest text-[#1a2b4a]"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
              >
                DECEMBER • 04 • 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  number,
  label,
  delay,
}: {
  number: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="py-10 md:py-16 flex flex-col items-center justify-center text-center px-4"
    >
      <span
        className="text-4xl md:text-6xl font-black text-black mb-2"
        style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
      >
        {number}
      </span>
      <span 
        className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-[0.2em]"
        style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
      >
        {label}
      </span>
    </motion.div>
  );
}
