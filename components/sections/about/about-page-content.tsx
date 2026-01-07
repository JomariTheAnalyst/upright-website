"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { AboutHeroSection } from "@/components/sections/about/about-hero";
import { Footer } from "@/components/layout/footer";
import { Target, Users, Lightbulb, Shield } from "lucide-react";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { ServiceCarousel } from "@/components/ui/services-card";
import { founder } from "@/data/founders";
import { ImageGallery } from "@/components/ui/carousel-circular-image-gallery";
import { CtaBanner } from "@/components/sections/home/cta-banner";
import { TimelineAboutSection } from "@/components/sections/about/timeline-about";
import { LeadershipTeamSection } from "@/components/sections/about/leadership-team";
import { JourneySection } from "@/components/sections/about/journey";
import { AboutUsTestimonials } from "@/components/sections/about-us-testimonials";

// Quote Reveal Component with scroll-based animation
function QuoteReveal({
  quote,
  author,
  title,
}: {
  quote: string;
  author: string;
  title: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "start 0.2"],
  });

  const words = quote.split(" ");

  return (
    <div
      ref={targetRef}
      className="relative min-h-[60vh] flex flex-col items-center justify-center py-12"
    >
      <div className="w-full max-w-5xl px-4">
        <p className="flex flex-wrap justify-center text-center text-2xl md:text-3xl lg:text-[2.5rem] font-semibold leading-relaxed">
          {words.map((word, wordIndex) => {
            const totalWords = words.length;
            const wordProgress = wordIndex / totalWords;
            const start = Math.max(0, wordProgress - 0.1);
            const end = Math.min(1, wordProgress + 0.1);

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.2, 1]
            );

            return (
              <motion.span
                key={wordIndex}
                style={{ opacity }}
                className="inline-block mr-2 md:mr-3 text-black"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>

      {/* Author Attribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-xl md:text-2xl font-bold text-black mb-1">
          {author}
        </p>
        <p className="text-base md:text-lg text-gray-600">{title}</p>
      </motion.div>
    </div>
  );
}

export function AboutPageContent() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver exceptional quality in every solution we create",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority, always putting clients first",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving with cutting-edge technology",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency and reliability",
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <>
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
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
      <div className="relative min-h-screen">
        <TransparentNavbar />

        {/* New Hero Section with Background Image */}
        <AboutHeroSection />

        <section style={{ backgroundColor: "#f1f0ee" }}>
          <JourneySection />
        </section>

        {/* Text Reveal Section - Our Mission */}
        <section className="relative" style={{ backgroundColor: "#f7f6f1" }}>
          <div className="flex items-center justify-center pt-12 pb-4">
            <span
              className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-semibold text-black"
              style={{ fontFamily: "Graphik, sans-serif" }}
            >
              Our Mission
            </span>
          </div>
          <TextRevealByWord text="To scale businesses to global audiences and revenue - seamlessly, efficiently, and without risk." />

          {/* The Opportunity Section - White Background with Gray Stripes */}
          <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 mt-12 relative overflow-hidden">
            {/* Gray Diagonal Stripes Background */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                #9ca3af 35px,
                #9ca3af 70px
              )`,
              }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    className="text-5xl md:text-6xl font-bold text-black mb-8"
                    style={{ fontFamily: "NeutraText, sans-serif" }}
                  >
                    The Opportunity
                  </h2>
                  <p
                    className="text-xl text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    Upright Systems is here to bridge the gap between businesses
                    and global audiences.
                  </p>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p
                    className="text-base text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    We empower you to unlock new markets and monetize
                    international reach without adding extra workload or
                    resource strain. Our team handles everything from
                    localization and translation to content distribution and
                    monetization, so you can focus on what you do best: creating
                    and growing your business.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#f7f6f1" }}
        >
          <div className="max-w-7xl mx-auto mb-16">
            {/* Label */}
            <div className="mb-8">
              <span
                className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-semibold text-black"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Our Core Values
              </span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2
                className="text-5xl md:text-6xl font-bold text-black mb-4"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                Our Core Values.
              </h2>
            </motion.div>
          </div>

          <ServiceCarousel
            services={[
              {
                number: "001",
                title: "Excellence",
                description:
                  "We deliver exceptional quality in every solution we create, maintaining rigorous standards.",
                icon: Target,
                gradient: "from-orange-100 to-orange-200",
              },
              {
                number: "002",
                title: "Client-Centric",
                description:
                  "Your success is our priority. We listen actively and adapt to align with your vision.",
                icon: Users,
                gradient: "from-blue-100 to-blue-200",
              },
              {
                number: "003",
                title: "Innovation",
                description:
                  "We stay ahead of technological trends and explore new frameworks creatively.",
                icon: Lightbulb,
                gradient: "from-purple-100 to-purple-200",
              },
              {
                number: "004",
                title: "Integrity",
                description:
                  "Trust is our foundation. We operate with transparency and accountability.",
                icon: Shield,
                gradient: "from-green-100 to-green-200",
              },
            ]}
          />
        </section>

        <section style={{ backgroundColor: "#f1f0ee" }}>
          <TimelineAboutSection />
        </section>

        <section style={{ backgroundColor: "#f1f0ee" }}>
          <LeadershipTeamSection />
        </section>

        {/* Our Founder Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#f7f6f1" }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Title Badge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-8"
            >
              <span
                className="inline-block px-6 py-2 border-2 border-black rounded-full text-sm font-semibold text-black"
                style={{ fontFamily: "Graphik, sans-serif" }}
              >
                Our Founder
              </span>
            </motion.div>

            {/* Title - Centered */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-5xl md:text-6xl font-bold text-black"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                Our Founder
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Founder Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-black mb-2"
                    style={{ fontFamily: "NeutraText, sans-serif" }}
                  >
                    {founder.name}
                  </h3>
                  <p
                    className="text-xl text-gray-600 mb-4"
                    style={{ fontFamily: "Graphik, sans-serif" }}
                  >
                    {founder.title}
                  </p>
                  <div className="flex gap-3 mb-6">
                    {founder.socials.linkedin && (
                      <a
                        href={founder.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {founder.socials.facebook && (
                      <a
                        href={founder.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                    {founder.socials.instagram && (
                      <a
                        href={founder.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-pink-600 hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="text-base text-gray-700 leading-relaxed text-justify space-y-4"
                  style={{ fontFamily: "Graphik, sans-serif" }}
                >
                  {founder.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Image Gallery */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ImageGallery images={founder.galleryImages} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Quote Section with Text Reveal */}
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#f7f6f1" }}
        >
          <div className="max-w-6xl mx-auto">
            <QuoteReveal
              quote={`"What truly drives me isn't the business itself — it's the people behind it. Their growth, their stories, and their potential inspire every decision I make. When we invest in people, we don't just build success — we build purpose."`}
              author={founder.name}
              title={founder.title}
            />
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ backgroundColor: "#f1f0ee" }}>
          <CtaBanner />
        </section>

        <Footer />
      </div>
    </>
  );
}
