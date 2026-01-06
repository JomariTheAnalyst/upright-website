"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function LeadershipTeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f6f1]">
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

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-semibold text-black mb-6"
            style={{ fontFamily: "Graphik, sans-serif" }}
          >
            Our Team
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black"
            style={{ fontFamily: "NeutraText, sans-serif" }}
          >
            Meet the People Behind Upright
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] lg:h-[700px]"
        >
          {/* Left tall image - spans 1 col, 2 rows */}
          <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/team/team2.jpg"
              alt="Team member"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top row - 2nd column */}
          <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/team/team3.jpeg"
              alt="Team collaboration"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top row - 3rd column */}
          <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/team/team4.JPG"
              alt="Team group photo"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top row - 4th column */}
          <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/founders/greg-sevilla.jpg"
              alt="Cap Servilla"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom row - CENTER MAIN IMAGE (team1.JPG) spans 2 cols */}
          <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/team/team1.JPG"
              alt="Upright Team"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom row - 4th column */}
          <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/team/team6.jpg"
              alt="Office environment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Two Column Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16"
        >
          <div>
            <p
              className="text-base md:text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              At Upright Solutions and Systems Consultancy Corp., our team is
              the foundation of everything we do. We are a diverse group of IT
              professionals, contend developer, software developers, and
              technology specialists who share a common passion for innovation
              and excellence. Each member brings unique expertise and
              perspective, enabling us to tackle complex challenges with
              creativity and precision.
            </p>
          </div>
          <div>
            <p
              className="text-base md:text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Our collaborative culture fosters continuous learning and growth.
              We believe that great solutions come from great teams, and we
              invest in our people as much as we invest in technology. Together,
              we've built lasting partnerships with clients across multiple
              industries, delivering transformative IT solutions that drive real
              business results and sustainable growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadershipTeamSection;
