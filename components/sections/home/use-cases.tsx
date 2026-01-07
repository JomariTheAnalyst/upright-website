"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  {
    id: 1,
    name: "Maritime",
    description:
      "Digital solutions for maritime training, crew management, and regulatory compliance. We support shipping companies and maritime academies with innovative learning platforms.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    link: "/use-cases/maritime",
    clients: [
      { name: "Avior", logo: "/images/logo/client-logos/avior.png" },
      { name: "Mycado", logo: "/images/logo/client-logos/mycado.png" },
    ],
  },
  {
    id: 2,
    name: "Government",
    description:
      "Technology solutions for government agencies, including digital health verification systems, citizen services platforms, and secure data management infrastructure.",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80",
    link: "/use-cases/government",
    clients: [{ name: "BOQ", logo: "/images/logo/client-logos/BOQ.png" }],
  },
  {
    id: 3,
    name: "Logistics",
    description:
      "End-to-end digital solutions for logistics operations, supply chain optimization, tracking systems, and workforce training platforms.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    link: "/use-cases/logistics",
    clients: [
      { name: "Gerrys", logo: "/images/logo/client-logos/gerrys.png" },
      { name: "LBC", logo: "/images/logo/client-logos/lbc.png" },
    ],
  },
];

export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSector = sectors[activeIndex];

  return (
    <section className="relative bg-[#f7f6f1] py-16 md:py-24 lg:py-32">
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

      <div className="mx-4 md:mx-6 lg:mx-8 px-5 sm:px-8 lg:px-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
          {/* Left - Section Label & Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Name Pill */}
            <span
              className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Use Cases
            </span>

            {/* Main Heading */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1]"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Solving Sector
              <br />
              Challenges At
              <br />
              <span className="font-normal">Scale.</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-start lg:pt-8"
          >
            <p
              className="text-gray-600 text-base md:text-lg pt-10 leading-relaxed"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Upright delivers tailored IT solutions designed for the unique
              needs of high-impact sectors. Our approach enables rapid
              deployment, consistent quality, and scalable design across diverse
              industries.
            </p>
          </motion.div>
        </div>

        {/* Content Section - Image and Sectors List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image with black border and client logos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden border-2 border-black"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSector.image}
                  alt={activeSector.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Gradient overlay at bottom for logo visibility */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />

                {/* Client Logos Section - Centered */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col items-center">
                  <p
                    className="text-gray-600 text-xs uppercase tracking-wider mb-4"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    Clients in this industry
                  </p>
                  <div className="flex items-center justify-center gap-6 md:gap-10">
                    {activeSector.clients.map((client, index) => (
                      <motion.div
                        key={client.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative h-12 md:h-16 w-auto"
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={160}
                          height={64}
                          className="h-full w-auto object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right - Sectors List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-0"
          >
            {sectors.map((sector, index) => (
              <div
                key={sector.id}
                className={`group border-b border-gray-300 transition-all duration-300 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span
                    className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-[#ffdf20]"
                        : "text-gray-900 group-hover:text-gray-600"
                    }`}
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    {sector.name}
                  </span>

                  {activeIndex === index ? (
                    <Link
                      href={sector.link}
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      style={{ fontFamily: "Graphik, sans-serif" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Know More
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  )}
                </button>

                {/* Expandable Description */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-5 text-gray-600 text-sm md:text-base leading-relaxed pr-8"
                        style={{ fontFamily: "Graphik, sans-serif" }}
                      >
                        {sector.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
