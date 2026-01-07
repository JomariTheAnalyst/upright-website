"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { ServicesHeroSection } from "@/components/sections/services/services-hero";
import { Footer } from "@/components/layout/footer";
import { CtaBanner } from "@/components/sections/home/cta-banner";
import { ImagePlayer } from "@/components/ui/image-player";
import { ServicesShowcase } from "@/components/sections/services/services-showcase";
import FAQSections from "@/components/sections/faqs/faq-sections";

export function ServicesPageContent() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#f1f0ee" }}
    >
      <TransparentNavbar />

      {/* New Hero Section with Background Image */}
      <ServicesHeroSection />

      {/* Original Hero Section - Now as Content Section */}
      <section
        className="relative overflow-hidden py-24"
        style={{ backgroundColor: "#f1f0ee" }}
      >
        {/* Smooth Horizontal Gradient Animation */}
        <style jsx global>{`
          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          @keyframes logoScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .premium-gradient {
            background: linear-gradient(
              90deg,
              #e0c3fc 0%,
              #f3d4f5 10%,
              #fce4ec 20%,
              #c3e0fc 30%,
              #d4f1f5 40%,
              #e4f9fc 50%,
              #ffd1dc 60%,
              #ffe4e1 70%,
              #fff9e6 80%,
              #ffe4b5 90%,
              #e0c3fc 100%
            );
            background-size: 200% 200%;
            animation: gradientFlow 25s ease infinite;
          }
          .logo-scroll {
            animation: logoScroll 40s linear infinite;
          }
        `}</style>

        <div className="absolute inset-0 premium-gradient opacity-40" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent"
          style={{
            background:
              "linear-gradient(to bottom, transparent, transparent, #f1f0ee)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Title */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
            >
              Unify Your Systems and <br />
              Unlock Seamless Operations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-black/80 max-w-4xl mx-auto mb-12"
            >
              Connect Your Business. Streamline Your Processes. Accelerate Your
              Growth.
            </motion.p>
          </div>

          {/* Hero Image Player - Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto mb-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImagePlayer
                images={[
                  "/images/team/team1.JPG",
                  "/images/team/team2.jpg",
                  "/images/team/team3.jpeg",
                ]}
                interval={1200}
                loop={true}
                renderImage={(src) => (
                  <Image
                    src={src}
                    width={1200}
                    height={500}
                    className="w-full h-[500px] object-cover"
                    alt="Upright Systems Solutions Showcase"
                    priority
                  />
                )}
              />
            </div>
          </motion.div>

          {/* Text Content with Button - Matching Reference Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-black/90 leading-relaxed mb-6">
                If you're managing enterprise systems across multiple
                departments, you already know the challenge: how to unify
                disparate platforms and unlock operational efficiency—without
                adding complexity to your team's workload.
              </p>
              <p className="text-xl font-semibold text-black">
                That's where Upright comes in.
              </p>
            </motion.div>

            {/* Right Column with Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg text-black/90 leading-relaxed mb-6">
                We partner with leading organizations to integrate and
                streamline IT systems at scale—building robust, secure
                connections that enable real-time data flow across your entire
                infrastructure.
              </p>
              <p className="text-lg text-black/90 leading-relaxed mb-8">
                No upfront costs. No resource drain. Just seamless integration
                and enhanced operational performance.
              </p>

              {/* Contact Button - Aligned Right */}
              <div className="flex justify-end">
                <Link href="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(255, 20, 147, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 rounded-full font-semibold text-base shadow-lg text-black transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #ffe319 0%, #ffe319  100%)",
                    }}
                  >
                    Contact Us Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <ServicesShowcase />
      </section>

      {/* FAQ Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#fafafa" }}
      >
        <FAQSections />
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
