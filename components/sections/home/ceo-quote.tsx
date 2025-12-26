"use client";

import { motion } from "framer-motion";
import { TextRevealByWord } from "@/components/ui/text-reveal";

export function CeoQuoteSection() {
  return (
    <section className="relative w-full">
      {/* CEO Quote Card - Full Width */}
      <div
        className="relative w-full py-20 md:py-24 lg:py-28"
        style={{
          backgroundColor: "#F2D04E",
          borderRadius: "60px",
        }}
      >
        {/* Text Reveal Animation */}
        <div className="relative">
          <TextRevealByWord
            text={`"True progress isn't just measured by what we build, but by how we empower others to grow with it."`}
            className="min-h-[50vh]"
          />
        </div>

        {/* CEO Info - Centered Below Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-5 mt-8"
        >
          {/* CEO Image with Circular Background */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#c8e6e6",
                transform: "scale(1.15)",
              }}
            />
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
              <img
                src="/images/founders/greg-sevilla.jpg"
                alt="Greg Sevilla"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CEO Details */}
          <div className="text-center">
            <div className="text-base md:text-lg font-bold text-black">
              Capt. Gregory Nick Sevilla
            </div>
            <div className="text-sm md:text-base text-black/70">
              CEO & Founder, Upright Solutions and Systems Consultancy Corp.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
