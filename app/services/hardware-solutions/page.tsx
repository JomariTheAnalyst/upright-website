"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function HardwareSolutionsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <TransparentNavbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
            alt="Hardware Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6"
            >
              Hardware Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 font-light"
            >
              Enterprise-grade infrastructure for modern businesses
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title="Infrastructure Solutions"
        description="Build a robust IT foundation with our comprehensive hardware solutions. From servers and storage systems to networking equipment, we provide enterprise-grade infrastructure that supports your business operations and growth."
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
        imageAlt="IT Infrastructure"
        reverse={false}
      />

      <ContentSection
        title="Network Architecture"
        description="Design and implement secure, high-performance networks that connect your organization. Our networking solutions ensure reliable connectivity, optimal bandwidth utilization, and robust security across all your locations."
        imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
        imageAlt="Network Solutions"
        reverse={true}
      />

      <ContentSection
        title="Hardware Procurement & Support"
        description="Leverage our partnerships with leading technology vendors to access the best hardware at competitive prices. We handle procurement, installation, configuration, and ongoing maintenance to ensure your infrastructure runs smoothly."
        imageSrc="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
        imageAlt="Hardware Support"
        reverse={false}
      />

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete hardware infrastructure for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Upgrade Your Infrastructure
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's build a reliable, scalable hardware foundation for your
            business
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function ContentSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={reverse ? "md:order-2" : ""}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={reverse ? "md:order-1" : ""}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 rounded-xl bg-[#fafafa] hover:shadow-lg transition-shadow duration-300"
    >
      <CheckCircle2 className="w-10 h-10 text-gray-900 mb-4" />
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

const features = [
  {
    title: "Server Solutions",
    description:
      "Enterprise servers optimized for performance, reliability, and scalability to power your critical applications.",
  },
  {
    title: "Storage Systems",
    description:
      "High-capacity, secure storage solutions with backup and disaster recovery capabilities.",
  },
  {
    title: "Network Equipment",
    description:
      "Switches, routers, and firewalls that ensure fast, secure connectivity across your organization.",
  },
  {
    title: "Workstations",
    description:
      "High-performance workstations for demanding applications and professional workflows.",
  },
  {
    title: "Data Center Setup",
    description:
      "Complete data center design and implementation with cooling, power, and security systems.",
  },
  {
    title: "Maintenance & Support",
    description:
      "24/7 hardware monitoring, preventive maintenance, and rapid response to minimize downtime.",
  },
];
