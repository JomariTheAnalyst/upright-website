"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function ITConsultingPage() {
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="IT Consulting"
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
              IT Consulting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 font-light"
            >
              Strategic technology guidance for business transformation
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title="Strategic IT Planning"
        description="Align your technology investments with business objectives. Our consultants work with your leadership team to develop comprehensive IT strategies that drive innovation, reduce costs, and create competitive advantages."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        imageAlt="Strategic Planning"
        reverse={false}
      />

      <ContentSection
        title="Digital Transformation"
        description="Navigate the complexities of digital transformation with confidence. We guide organizations through modernization initiatives, helping you adopt new technologies, optimize processes, and create digital-first experiences."
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        imageAlt="Digital Transformation"
        reverse={true}
      />

      <ContentSection
        title="Technology Assessment"
        description="Gain clarity on your current IT landscape. Our comprehensive assessments identify gaps, inefficiencies, and opportunities for improvement, providing actionable recommendations to optimize your technology investments."
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
        imageAlt="Technology Assessment"
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services to accelerate your success
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
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg rounded-full"
            >
              Schedule Consultation
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
    title: "IT Strategy",
    description:
      "Develop comprehensive technology roadmaps aligned with your business goals and market opportunities.",
  },
  {
    title: "Cloud Strategy",
    description:
      "Plan and execute cloud migration strategies that optimize costs and improve operational efficiency.",
  },
  {
    title: "Security Consulting",
    description:
      "Assess vulnerabilities and implement robust security frameworks to protect your digital assets.",
  },
  {
    title: "Process Optimization",
    description:
      "Streamline IT operations and workflows to improve efficiency and reduce operational costs.",
  },
  {
    title: "Vendor Management",
    description:
      "Optimize technology vendor relationships and negotiate contracts that deliver maximum value.",
  },
  {
    title: "Change Management",
    description:
      "Guide your organization through technology transitions with minimal disruption and maximum adoption.",
  },
];
