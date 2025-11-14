"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { TextRevealByWord } from "@/components/ui/text-reveal";

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: string;
  category: string;
  date: string;
}

export interface NewsProps {
  title?: string;
  description?: string;
  articles?: NewsArticle[];
}

const defaultArticles: NewsArticle[] = [
  {
    id: "ai-innovation-award",
    title:
      "Upright Systems Wins Innovation Award for AI-Powered Maritime Training Platform",
    summary:
      "Our revolutionary AI-enhanced learning management system for maritime professionals receives national recognition for technological excellence.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "December 15, 2024",
  },
  {
    id: "banking-partnership-2024",
    title: "Strategic Partnership with Leading Philippine Banks Announced",
    summary:
      "Upright Systems partners with three major banks to modernize their core banking systems and enhance digital services nationwide.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "December 10, 2024",
  },
  {
    id: "typhoon-relief-food-2024",
    title:
      "Upright Systems Delivers 10,000 Relief Packs to Typhoon-Affected Families",
    summary:
      "Our team distributed food, clean water, clothing, and emergency supplies to communities devastated by Typhoon Kristine in Bicol Region.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "December 5, 2024",
  },
  {
    id: "government-digital-transformation",
    title:
      "Major Government Digital Transformation Project Successfully Completed",
    summary:
      "Upright Systems delivers comprehensive digital infrastructure upgrade for key government agencies, improving public service delivery.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 28, 2024",
  },
  {
    id: "cybersecurity-summit",
    title:
      "Upright Systems Hosts National Cybersecurity Summit for Enterprise Leaders",
    summary:
      "Industry experts and government officials gather to discuss emerging cybersecurity threats and innovative protection strategies.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 20, 2024",
  },
  {
    id: "scholarship-program",
    title:
      "100 IT Scholarships Awarded to Underprivileged Students Across the Philippines",
    summary:
      "Our annual scholarship program expands to support aspiring IT professionals from underserved communities in their educational journey.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 15, 2024",
  },
  {
    id: "cloud-migration-success",
    title: "Successful Cloud Migration for Major Telecommunications Provider",
    summary:
      "Upright Systems completed seamless migration of legacy systems to cloud infrastructure, reducing operational costs by 40% and improving scalability.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 8, 2024",
  },
  {
    id: "excellence-award-2024",
    title:
      "Upright Systems Recognized as Top IT Solutions Provider in Southeast Asia",
    summary:
      "We received the prestigious ASEAN ICT Excellence Award for outstanding contributions to digital transformation and innovation across multiple industries.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "October 30, 2024",
  },
  {
    id: "healthcare-ehr-launch",
    title: "Revolutionary Healthcare EHR System Launched for Hospital Network",
    summary:
      "Our comprehensive electronic health records platform now serves 15 hospitals, improving patient care coordination and reducing administrative time by 50%.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "October 25, 2024",
  },
  {
    id: "green-tech-initiative",
    title:
      "Launching Green Technology Initiative: Sustainable IT Solutions for the Future",
    summary:
      "Upright Systems commits to carbon-neutral operations by 2025 while helping clients reduce their environmental footprint through smart technology.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "October 18, 2024",
  },
];

export function CaseStudiesSection({
  title = "What's new in Upright",
  articles = defaultArticles,
}: NewsProps) {
  const titleRef = useRef(null);

  // Trigger confetti on card hover
  const handleCardHover = () => {
    const duration = 1500;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 30 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  // Show only first 3 articles
  const displayedArticles = articles.slice(0, 3);

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#fafafa" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Header with View All Button */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-4">
            <motion.h2
              ref={titleRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-black max-w-4xl leading-tight"
            >
              {title}
            </motion.h2>

            {/* View All Articles Button - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="shrink-0"
            >
              <a href="/blog">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View all articles →
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={handleCardHover}
            >
              <a
                href="/blog"
                className="group block h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Image with Overlay Content */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Large Stat at Top */}
                    <div>
                      <div className="text-6xl md:text-7xl font-black text-white mb-2">
                        {index === 0 ? "15x" : index === 1 ? "20hrs" : "750%"}
                      </div>
                      <div className="text-sm text-white/90 font-medium">
                        {index === 0
                          ? "field technician efficiency"
                          : index === 1
                          ? "saved per week"
                          : "revenue growth"}
                      </div>
                    </div>

                    {/* Description and Button at Bottom */}
                    <div>
                      <p className="text-white text-base mb-6 leading-relaxed">
                        {article.summary}
                      </p>
                      <button className="px-6 py-2.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm font-semibold rounded-lg transition-all duration-300 border border-white/30">
                        Read story
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CEO Quote Card - FULL WIDTH NO MARGINS */}
      </div>

      {/* Card Outside Container - Full Bleed */}
      <div
        className="relative w-full py-20 md:py-24 lg:py-28"
        style={{
          backgroundColor: "#f5f591",
          borderRadius: "60px",
        }}
      >
        {/* Text Reveal Animation */}
        <div className="relative">
          <TextRevealByWord
            text={`"True progress isn't just measured by what we build, but by how we empower others to grow with it."`}
            className="min-h-[50vh]"
          />
        </div>

        {/* CEO Info - Centered Below Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-5 mt-8"
        >
          {/* CEO Image with Circular Background */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#c8e6e6",
                transform: "scale(1.15)",
              }}
            />
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
              <img
                src="/images/founders/greg-sevilla.jpg"
                alt="Greg Sevilla"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CEO Details */}
          <div className="text-center">
            <div className="text-base md:text-lg font-bold text-black">
              Capt. Gregory Nick Sevilla
            </div>
            <div className="text-sm md:text-base text-black/70">
              CEO & Founder, Upright Soultions and Systems Consultancy corp.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Closing container div */}
      </div>
    </section>
  );
}
