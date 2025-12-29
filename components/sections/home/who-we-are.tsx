"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function WhoWeAreSection() {
  const establishedYear = 2015;
  const currentYear = new Date().getFullYear();
  const yearsOfExcellence = currentYear - establishedYear;

  return (
    <section className="relative min-h-[auto] lg:h-[85vh] xl:h-screen bg-[#0a1628] overflow-hidden flex items-center py-12 sm:py-16 md:py-20 lg:py-0">
      {/* Dotted Pattern Background - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden md:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-4 md:mx-6 lg:mx-8 border border-white/20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] items-stretch">
          {/* Left Column - Heading & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-5 sm:px-8 lg:pl-16 lg:pr-12 py-10 md:py-16 lg:py-20"
          >
            {/* Section Name Pill */}
            <span className="inline-flex items-center px-4 py-1.5 mb-6 md:mb-8 text-xs font-semibold tracking-wider uppercase border-2 border-white rounded-full text-white">
              Who We Are
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-8 md:mb-12">
              <span className="italic">{yearsOfExcellence} Years of</span>
              <span className="text-[#dc2626]">.</span>
              <br />
              <span className="font-normal">Excellence.</span>
            </h2>

            {/* Badges Row - Stack on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              {/* Years Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      {yearsOfExcellence}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">
                      Years
                    </span>
                  </div>
                </div>
                {/* Circular Text - Hidden on small mobile */}
                <div className="absolute inset-0 animate-spin-slow hidden sm:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-white/50 uppercase tracking-[0.3em]">
                      <textPath href="#circle">
                        • Celebrating {yearsOfExcellence} Years • Celebrating{" "}
                        {yearsOfExcellence} Years
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Divider - Horizontal on mobile, vertical on tablet+ */}
              <div className="w-full sm:w-px h-px sm:h-16 bg-white/20" />

              {/* Philippine Based Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 sm:w-12 sm:h-8 relative overflow-hidden rounded">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/3 bg-[#0038a8]" />
                    <div className="w-1/3 bg-[#ce1126]" />
                    <div className="w-1/3 bg-white" />
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-1/3">
                    <div className="w-full h-full bg-white clip-triangle" />
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-white/60">
                    Based in
                  </span>
                  <span className="block text-base sm:text-lg font-semibold text-white">
                    Philippines
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical Divider Line - Desktop only */}
          <div className="hidden lg:block bg-white/20" />

          {/* Right Column - Description & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-5 sm:px-8 lg:pl-12 lg:pr-16 py-10 md:py-16 lg:py-20 border-t lg:border-t-0 border-white/20"
          >
            {/* Subtitle */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
              Delivering Integrated IT Solutions and Professional Technology
              Services
            </h3>

            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
              UPRIGHT SOLUTIONS AND SYSTEMS CONSULTANCY CORP., established in
              2015, has built over a decade of experience in the IT industry.
              Guided by a commitment to innovation, reliability, and excellence,
              the company has grown into a trusted provider of IT consultancy
              and technology solutions. Based in the Philippines, Upright
              continues to deliver high-quality services that support
              operational efficiency and long-term client success.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .clip-triangle {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
      `}</style>
    </section>
  );
}
