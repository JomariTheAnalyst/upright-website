"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { ServicesHeroSection } from "@/components/sections/services/services-hero";
import { Footer } from "@/components/layout/footer";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ImagePlayer } from "@/components/ui/image-player";
import { GetQuoteSection } from "@/components/sections/get-quote";
import { ServicesTabs } from "@/components/sections/services-tabs";
import { HowWeWorkSection } from "@/components/sections/how-we-work";
import { OurTeamSection } from "@/components/sections/our-team";
import { ClientTestimonialsSection } from "@/components/sections/client-testimonials";
import FAQSections from "@/components/sections/faqs/faq-sections";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Industries data with details
const industriesData = [
  {
    src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop&q=80",
    alt: "Maritime Industry",
    code: "Maritime",
    title: "Maritime",
    description:
      "Specialized IT solutions for shipping companies, port operations, and maritime logistics. We provide vessel tracking systems, cargo management, and compliance solutions.",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    alt: "Logistics Industry",
    code: "Logistics",
    title: "Logistics",
    description:
      "Comprehensive supply chain management systems, warehouse automation, fleet tracking, and real-time inventory solutions for logistics companies.",
  },
  {
    src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
    alt: "Government & Public Sector",
    code: "Government",
    title: "Government & Public Sector",
    description:
      "Secure, compliant IT infrastructure for government agencies. Digital transformation, citizen services platforms, and data security solutions.",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80",
    alt: "Education & Training",
    code: "Education",
    title: "Education & Training",
    description:
      "Learning management systems, virtual classrooms, student information systems, and e-learning platforms for educational institutions and training centers.",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    alt: "Corporate Enterprises",
    code: "Corporate",
    title: "Corporate Enterprises",
    description:
      "Enterprise-grade ERP systems, CRM solutions, business intelligence tools, and digital workplace solutions for large organizations.",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    alt: "Manufacturing & Engineering",
    code: "Manufacturing",
    title: "Manufacturing & Engineering",
    description:
      "Industrial automation, IoT integration, production monitoring systems, and quality control solutions for manufacturing and engineering firms.",
  },
];

// Industries Section Component
function IndustriesSection({
  data,
}: {
  data: Array<{
    src: string;
    alt: string;
    code: string;
    title: string;
    description: string;
  }>;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized IT solutions across diverse sectors
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Details */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              {data[activeIndex].code}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-black">
              {data[activeIndex].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data[activeIndex].description}
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side - Expandable Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="relative w-full"
            >
              <div className="flex w-full items-center justify-center gap-2">
                {data.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer overflow-hidden rounded-2xl"
                    initial={{ width: "4rem", height: "24rem" }}
                    animate={{
                      width: activeIndex === index ? "20rem" : "4rem",
                      height: "24rem",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={() => setActiveIndex(index)}
                    onHoverStart={() => setActiveIndex(index)}
                  >
                    {/* Gradient Overlay */}
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                      />
                    )}

                    {/* Industry Label */}
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-4 left-4 right-4 z-20"
                      >
                        <p className="text-white font-bold text-lg">
                          {image.title}
                        </p>
                      </motion.div>
                    )}

                    {/* Image */}
                    <img
                      src={image.src}
                      className="size-full object-cover"
                      alt={image.alt}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SystemIntegrationPage() {
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
                  "/images/aboutUs/mockup1.jpg",
                  "/images/aboutUs/mockup2.jpg",
                  "/images/aboutUs/mockup3.jpg",
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

          {/* Company Logos Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative overflow-hidden py-12 backdrop-blur-sm rounded-2xl"
            style={{ backgroundColor: "rgba(241, 240, 238, 0.5)" }}
          >
            <h3 className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-wider">
              Trusted by Leading Organizations
            </h3>
            <div className="flex items-center justify-center gap-16 logo-scroll">
              {/* First set of company logos */}
              <div className="flex items-center gap-16">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Samsung_Logo.svg"
                  alt="Samsung"
                  className="h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
                  alt="Cisco"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
                  alt="IBM"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  alt="Oracle"
                  className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Samsung_Logo.svg"
                  alt="Samsung"
                  className="h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
                  alt="Cisco"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
                  alt="IBM"
                  className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  alt="Oracle"
                  className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GetQuoteSection />

      {/* Spacer for next section */}
      <div id="solutions"></div>

      {/* 2️⃣ Core Service Categories - Interactive Tabs */}
      <ServicesTabs />

      {/* 3️⃣ Industries We Serve - Interactive Showcase */}
      <IndustriesSection data={industriesData} />

      {/* 4️⃣ Process / How We Work */}
      <HowWeWorkSection />

      {/* 5️⃣ Our Team is Your Team */}
      <OurTeamSection />

      {/* 6️⃣ Client Testimonials */}
      <ClientTestimonialsSection />

      {/* 7️⃣ FAQ Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#f1f0ee" }}
      >
        <FAQSections />
      </section>

      {/* 5️⃣ CTA Banner */}
      <CtaBanner />

      {/* 6️⃣ Footer */}
      <Footer />
    </div>
  );
}
