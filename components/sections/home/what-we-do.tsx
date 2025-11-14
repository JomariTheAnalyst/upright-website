"use client";

import { motion } from "motion/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function LottieAnimation({ animationPath }: { animationPath: string }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, [animationPath]);

  if (!animationData) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

const features = [
  {
    title: "System Integration",
    description:
      "Seamlessly connect your enterprise systems and streamline operations across your organization. We specialize in bridging legacy systems with modern applications, handling complex integrations including ERP, CRM, and custom business applications.",
    animationData: "/animations/what-wedo/Web Development.json",
    type: "lottie",
  },
  {
    title: "Software Development",
    description:
      "Transform your business vision into reality with custom software solutions. From web and mobile applications to enterprise systems, we build scalable, secure, and user-friendly software that drives growth and innovation.",
    animationData: "/animations/what-wedo/Coding.json",
    type: "lottie",
  },
  {
    title: "Professional Services",
    description:
      "Leverage our deep technical expertise to accelerate your digital transformation. Our services include technical consulting, project management, system architecture design, and ongoing support to ensure successful technology adoption.",
    animationData: "/animations/what-wedo/Online.json",
    type: "lottie",
  },
  {
    title: "IT Consulting",
    description:
      "Navigate the complex technology landscape with strategic IT consulting services. We help organizations make informed decisions about technology investments, digital transformation initiatives, and IT infrastructure modernization.",
    animationData: "/animations/what-wedo/Technologyy.json",
    type: "lottie",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#fafafa" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-200 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>

                {/* Single Image or Lottie Animation - Taller */}
                <motion.div
                  className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-[3/3.5] group bg-gradient-to-br from-gray-50 to-gray-100">
                    <LottieAnimation animationPath={feature.animationData} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
