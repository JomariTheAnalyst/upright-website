"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function SoftwareDevelopmentPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative min-h-screen bg-[#faf8ed]">
      <TransparentNavbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
            alt="Software Development"
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
              Software Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 font-light"
            >
              Crafting innovative solutions that drive business growth
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title="Custom Application Development"
        description="We build bespoke software solutions tailored to your unique business requirements. From web applications to mobile apps, our development team creates scalable, secure, and user-friendly solutions that solve real business challenges."
        imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
        imageAlt="Custom Development"
        reverse={false}
      />

      <ContentSection
        title="Enterprise Software Solutions"
        description="Transform your business operations with enterprise-grade software. We develop robust systems that handle complex workflows, integrate with existing infrastructure, and scale with your organization's growth."
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
        imageAlt="Enterprise Software"
        reverse={true}
      />

      <ContentSection
        title="Agile Development Process"
        description="Our iterative approach ensures rapid delivery and continuous improvement. We work closely with your team, providing regular updates and incorporating feedback throughout the development lifecycle to ensure the final product exceeds expectations."
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
        imageAlt="Agile Development"
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
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-stack development capabilities across modern technologies
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#faf8ed]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Transform your ideas into powerful software solutions
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg rounded-full"
            >
              Start Your Project
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
      className="p-8 rounded-xl bg-[#faf8ed] hover:shadow-lg transition-shadow duration-300"
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
    title: "Web Applications",
    description:
      "Modern, responsive web apps built with React, Next.js, and cutting-edge frameworks for optimal performance.",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
  },
  {
    title: "Cloud-Native Apps",
    description:
      "Scalable applications designed for cloud infrastructure, leveraging microservices and containerization.",
  },
  {
    title: "API Development",
    description:
      "Robust RESTful and GraphQL APIs that power seamless integrations and data exchange.",
  },
  {
    title: "Database Design",
    description:
      "Optimized database architectures that ensure data integrity, performance, and scalability.",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automated deployment pipelines and infrastructure as code for rapid, reliable releases.",
  },
];
