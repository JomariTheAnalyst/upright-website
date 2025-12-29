"use client";

import { motion } from "framer-motion";

export function JourneySection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12"
        >
          <span className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-semibold text-black">
            Our Journey
          </span>
        </motion.div>

        {/* Main Heading - Upper Left, 3 lines max */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <h2
            className="text-[28px] md:text-[32px] lg:text-[38px] leading-[1.2] text-black"
            style={{ fontFamily: "NewFont, sans-serif", fontWeight: 700 }}
          >
            Upright was born as a direct response to the evolving needs of
            businesses in the digital age.
          </h2>
        </motion.div>

        {/* Two Columns - Right Aligned Under Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 md:ml-auto md:max-w-[75%] lg:max-w-[65%]"
        >
          {/* Column 1 */}
          <div className="space-y-5">
            <p
              className="text-base md:text-[17px] text-gray-700 leading-relaxed"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              In the wake of rapid technological advancement and the shift to
              digital-first operations, we realized something. Traditional
              approaches to IT and systems management were no longer sufficient
              for businesses seeking sustainable growth.
            </p>
            <p
              className="text-base md:text-[17px] text-gray-700 leading-relaxed"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              There was an opportunity to initiate positive change by
              reimagining the way organizations integrate technology. We started
              by supporting impact-driven solutions, while also offering
              consultancy services that develop operational capabilities,
              strategic thinking, and digital literacy.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-5">
            <p
              className="text-base md:text-[17px] text-gray-700 leading-relaxed"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              A collaborative, adaptive, and forward-thinking approach to IT
              consultancy is the key to addressing the pressing challenges of
              our time.
            </p>
            <p
              className="text-base md:text-[17px] text-gray-700 leading-relaxed"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Our unwavering commitment to our principles of 'people-first
              technology' has helped to propel us forward, making Upright a
              trusted partner in the pursuit of a sustainable and resilient
              digital future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default JourneySection;
