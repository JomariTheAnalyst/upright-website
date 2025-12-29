"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Building,
  Code,
  Smartphone,
  Layers,
  RefreshCw,
  Database,
  Cloud,
  BookOpen,
  Layout,
  Award,
  TrendingUp,
  Search,
  Target,
  Users,
  ShoppingCart,
  Wrench,
  Shield,
  Zap,
} from "lucide-react";
import { ServiceData } from "@/data/services";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { CtaBanner } from "@/components/sections/home/cta-banner";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-6 h-6" />,
  building: <Building className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  refresh: <RefreshCw className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  book: <BookOpen className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  "shopping-cart": <ShoppingCart className="w-6 h-6" />,
  tool: <Wrench className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
};

interface ServiceDetailPageProps {
  service: ServiceData;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Custom Font */}
      <style jsx global>{`
        @font-face {
          font-family: "NewFont";
          src: url("/fonts/newfont.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <TransparentNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="/"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Home
              </Link>
              <span className="text-white/40">/</span>
              <Link
                href="/services"
                className="text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Services
              </Link>
              <span className="text-white/40">/</span>
              <span
                className="text-white text-sm"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                {service.label}
              </span>
            </div>

            {/* Badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border border-white/30 rounded-full text-white"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              {service.label}
            </span>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              {service.title}
            </h1>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              {service.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffdf20] hover:bg-yellow-400 text-black font-semibold transition-all duration-300"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Overview
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                What We Offer
              </h2>
              <p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                {service.longDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all duration-300"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Talk to an Expert
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.slice(0, 4).map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-gray-200 hover:border-black transition-colors duration-300"
                  >
                    <Check className="w-6 h-6 text-[#ffdf20] mb-3" />
                    <p
                      className="text-sm text-gray-700"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Features
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Key Capabilities
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Comprehensive solutions designed to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-[#fafafa] border border-gray-200 hover:border-black hover:bg-white transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#ffdf20] text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[feature.icon] || <Code className="w-6 h-6" />}
                </div>
                <h3
                  className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border border-white/30 rounded-full text-white"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Our Process
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              How We Work
            </h2>
            <p
              className="text-white/70 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div
                  className="text-8xl font-bold text-white/10 absolute -top-4 -left-2"
                  style={{ fontFamily: "NewFont, sans-serif" }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>
                <div className="relative pt-12">
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "NewFont, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Use Cases
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                Real-World Applications
              </h2>
              <p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                See how our {service.label.toLowerCase()} solutions are applied
                across various industries and scenarios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white border border-gray-200 hover:border-black transition-colors duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[#ffdf20] text-black font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="text-gray-700"
                      style={{ fontFamily: "NewFont, sans-serif" }}
                    >
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase border-2 border-black rounded-full text-black"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Technologies
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: "NewFont, sans-serif" }}
            >
              Tools & Technologies We Use
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-[#fafafa] border border-gray-200 text-gray-700 font-medium hover:border-black hover:bg-white transition-all duration-300"
                style={{ fontFamily: "NewFont, sans-serif" }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
