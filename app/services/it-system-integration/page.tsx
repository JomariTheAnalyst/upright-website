"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { Footer } from "@/components/layout/footer";
import { StackedCards } from "@/components/ui/glass-cards";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function SystemIntegrationPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <ProfessionalNavbar />

      {/* 1️⃣ Hero Section - Premium Animated Gradient */}
      <section className="relative overflow-hidden pt-20 pb-24">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

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

          {/* Hero Image - Increased Height */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto mb-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                alt="Team collaboration at Upright Systems"
                className="w-full h-[500px] object-cover"
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
                That's where Upright Systems comes in.
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
                    className="px-8 py-3.5 rounded-full font-semibold text-base shadow-lg text-white transition-all duration-300"
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
            className="relative overflow-hidden py-12 bg-white/50 backdrop-blur-sm rounded-2xl"
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

      {/* Spacer for next section */}
      <div id="solutions"></div>

      {/* 2️⃣ Problem–Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-0">
          {/* Problem Card - Left aligned with image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
            {/* Left - Problem Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
              className="p-12 lg:p-16 flex flex-col justify-center"
              style={{ backgroundColor: "#1055C9" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The Challenge
              </h2>
              <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                <p>
                  Modern businesses operate with dozens of disconnected tools
                  and legacy systems that don't communicate with each other.
                  This fragmentation creates operational bottlenecks and limits
                  growth potential.
                </p>
                <p>
                  Data silos prevent teams from accessing critical information
                  in real-time, leading to inefficient workflows, duplicated
                  efforts, and missed opportunities for collaboration.
                </p>
                <p>
                  High maintenance costs, security vulnerabilities, and the
                  inability to scale quickly put organizations at a competitive
                  disadvantage in today's fast-paced digital landscape.
                </p>
              </div>
            </motion.div>

            {/* Right - Problem Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[400px] lg:min-h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
                alt="Business challenges"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Solution Card - Right aligned with image on left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]">
            {/* Left - Solution Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[400px] lg:min-h-[500px] order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
                alt="Integration solutions"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right - Solution Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.6 }}
              className="p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2"
              style={{ backgroundColor: "#ffe419" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Our Solution
              </h2>
              <p className="text-lg text-black/90 leading-relaxed">
                Upright Systems delivers comprehensive integration strategies
                that connect your entire technology stack. Through secure API
                connections, intelligent data flow automation, and tailored
                middleware solutions, we create a unified digital ecosystem
                where information flows seamlessly across platforms,
                departments, and processes — enabling faster decision-making and
                operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Feature Highlights - Stacked Glass Cards */}
      <StackedCards />

      {/* 4️⃣ FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our IT System Integration
              services
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question:
                  "How long does a typical system integration project take?",
                answer:
                  "The timeline varies based on complexity and scope. A standard integration project typically takes 8-16 weeks, including discovery, design, development, testing, and deployment phases. We provide a detailed project timeline during our initial consultation, with clear milestones and deliverables. For urgent requirements, we offer accelerated implementation options.",
              },
              {
                question:
                  "Will system integration disrupt our current operations?",
                answer:
                  "We design our integration solutions to minimize operational disruption. Our phased implementation approach allows your team to continue working while we integrate systems in the background. We schedule critical transitions during off-peak hours and provide comprehensive rollback plans. Most clients experience zero downtime during the integration process.",
              },
              {
                question: "What types of systems can you integrate?",
                answer:
                  "We integrate a wide range of systems including ERP (SAP, Oracle, Microsoft Dynamics), CRM platforms (Salesforce, HubSpot), legacy databases, cloud applications, custom software, and third-party APIs. Our technology-agnostic approach means we can connect virtually any system, regardless of age or platform. We specialize in both modern cloud-based and legacy on-premise systems.",
              },
              {
                question:
                  "What ongoing support do you provide after integration?",
                answer:
                  "We offer comprehensive post-integration support including 24/7 monitoring, regular system health checks, performance optimization, security updates, and dedicated technical support. Our support packages include SLA guarantees, proactive maintenance, and continuous improvement recommendations. We also provide training for your team and detailed documentation for all integrated systems.",
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-black list-none">
                  <span className="pr-8">{faq.question}</span>
                  <svg
                    className="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>

          {/* CTA Below FAQ */}
        </div>
      </section>

      {/* 5️⃣ Final CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Build Connected Systems Together
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Talk to our experts and discover how Upright can unify your IT
              ecosystem
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white rounded-full font-bold text-xl shadow-2xl"
                style={{ color: "#000000ff" }}
              >
                Contact Us Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Footer */}
      <Footer />
    </div>
  );
}
