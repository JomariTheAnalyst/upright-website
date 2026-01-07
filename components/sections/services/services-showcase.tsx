"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Import Lottie animation data
import webDevelopmentAnimation from "@/public/animations/Web Development.json";
import codingAnimation from "@/public/animations/Coding.json";
import expertiseAnimation from "@/public/animations/expertise.json";
import onlineAnimation from "@/public/animations/Online.json";
import technologyAnimation from "@/public/animations/Technologyy.json";

const services = [
  {
    id: 1,
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Whether it's custom applications, enterprise systems, or mobile solutions, we deliver software tailored to your business needs. From planning to deployment, our end-to-end expertise ensures scalable, secure, and high-performing solutions at every stage of development.",
    animation: webDevelopmentAnimation,
    href: "/services/software-development",
  },
  {
    id: 2,
    title: "SYSTEM INTEGRATION",
    description:
      "Why manage disconnected systems when one unified platform can handle it all? At Upright, we integrate your existing tools, databases, and workflows into a seamless ecosystem to streamline operations, reduce redundancy, and deliver efficiency from end to end.",
    animation: codingAnimation,
    href: "/services/system-integration",
  },
  {
    id: 3,
    title: "LEARNING CONTENT DEVELOPMENT",
    description:
      "Transform your training programs with engaging digital content. We create interactive e-learning modules, video tutorials, and comprehensive training materials that make knowledge transfer effective and measurable for your organization.",
    animation: expertiseAnimation,
    href: "/services/learning-content",
  },
  {
    id: 4,
    title: "IT CONSULTANCY",
    description:
      "Navigate the complex technology landscape with expert guidance. Our consultants assess your current infrastructure, identify opportunities for improvement, and develop strategic roadmaps that align technology investments with your business objectives.",
    animation: onlineAnimation,
    href: "/services/it-consultancy",
  },
  {
    id: 5,
    title: "HARDWARE SOLUTIONS",
    description:
      "From procurement to installation and maintenance, we provide comprehensive hardware solutions. Whether you need servers, networking equipment, or end-user devices, we ensure reliable infrastructure that supports your business operations.",
    animation: technologyAnimation,
    href: "/services/hardware-solutions",
  },
];

export function ServicesShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f5f3] overflow-hidden">
      {/* Custom Font - RedExPro */}
      <style jsx global>{`
        @font-face {
          font-family: "RedExPro";
          src: url("/fonts/redexpro.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[60px] lg:text-[80px] leading-[0.9] font-black text-black uppercase tracking-tight max-w-5xl"
            style={{ fontFamily: "'RedExPro', sans-serif" }}
          >
            ONE TEAM FOR EVERYTHING YOUR BUSINESS TECHNOLOGY DEMANDS.
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    animation: object;
    href: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  // Alternate rotation for a natural "stack" feel, but keep it subtle like the reference
  const rotation = index % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative w-full mx-auto"
    >
      {/* The Card Container - Outer w/ padding (The 'margin in outline' effect) */}
      <div
        className="flex flex-col md:flex-row bg-white border-2 border-black p-2 shadow-sm"
        style={{ transformOrigin: "center" }}
      >
        {/* Inner Content Wrapper - Frame inside the padding */}
        <div className="flex flex-col md:flex-row w-full h-full border border-gray-200">
          {/* Animation Side (Left) */}
          <div className="w-full md:w-[45%] h-[300px] md:h-[400px] relative border-b md:border-b-0 md:border-r-2 border-black bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
            <Lottie
              animationData={service.animation}
              loop={true}
              autoplay={true}
              className="w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>

          {/* Content Side (Right) */}
          <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <h3
              className="text-2xl md:text-4xl font-black text-[#1a2b4a] mb-6 uppercase tracking-tight"
              style={{ fontFamily: "'RedExPro', sans-serif" }}
            >
              {service.title}
            </h3>

            <p
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-medium"
              style={{ fontFamily: "'RedExPro', sans-serif" }}
            >
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesShowcase;
