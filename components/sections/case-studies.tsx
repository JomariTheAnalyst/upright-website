"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { motion, useInView } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import confetti from "canvas-confetti"

export interface NewsArticle {
  id: string
  title: string
  summary: string
  href: string
  image: string
  category: string
  date: string
}

export interface NewsProps {
  title?: string
  description?: string
  articles?: NewsArticle[]
}

const defaultArticles: NewsArticle[] = [
  {
    id: "ai-innovation-award",
    title: "Upright Systems Wins Innovation Award for AI-Powered Maritime Training Platform",
    summary: "Our revolutionary AI-enhanced learning management system for maritime professionals receives national recognition for technological excellence.",
    href: "#",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "December 15, 2024"
  },
  {
    id: "banking-partnership-2024",
    title: "Strategic Partnership with Leading Philippine Banks Announced",
    summary: "Upright Systems partners with three major banks to modernize their core banking systems and enhance digital services nationwide.",
    href: "#",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "December 10, 2024"
  },
  {
    id: "typhoon-relief-food-2024",
    title: "Upright Systems Delivers 10,000 Relief Packs to Typhoon-Affected Families",
    summary: "Our team distributed food, clean water, clothing, and emergency supplies to communities devastated by Typhoon Kristine in Bicol Region.",
    href: "#",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "December 5, 2024"
  },
  {
    id: "government-digital-transformation",
    title: "Major Government Digital Transformation Project Successfully Completed",
    summary: "Upright Systems delivers comprehensive digital infrastructure upgrade for key government agencies, improving public service delivery.",
    href: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 28, 2024"
  },
  {
    id: "cybersecurity-summit",
    title: "Upright Systems Hosts National Cybersecurity Summit for Enterprise Leaders",
    summary: "Industry experts and government officials gather to discuss emerging cybersecurity threats and innovative protection strategies.",
    href: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 20, 2024"
  },
  {
    id: "scholarship-program",
    title: "100 IT Scholarships Awarded to Underprivileged Students Across the Philippines",
    summary: "Our annual scholarship program expands to support aspiring IT professionals from underserved communities in their educational journey.",
    href: "#",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 15, 2024"
  },
  {
    id: "cloud-migration-success",
    title: "Successful Cloud Migration for Major Telecommunications Provider",
    summary: "Upright Systems completed seamless migration of legacy systems to cloud infrastructure, reducing operational costs by 40% and improving scalability.",
    href: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "November 8, 2024"
  },
  {
    id: "excellence-award-2024",
    title: "Upright Systems Recognized as Top IT Solutions Provider in Southeast Asia",
    summary: "We received the prestigious ASEAN ICT Excellence Award for outstanding contributions to digital transformation and innovation across multiple industries.",
    href: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "October 30, 2024"
  },
  {
    id: "healthcare-ehr-launch",
    title: "Revolutionary Healthcare EHR System Launched for Hospital Network",
    summary: "Our comprehensive electronic health records platform now serves 15 hospitals, improving patient care coordination and reducing administrative time by 50%.",
    href: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "October 25, 2024"
  },
  {
    id: "green-tech-initiative",
    title: "Launching Green Technology Initiative: Sustainable IT Solutions for the Future",
    summary: "Upright Systems commits to carbon-neutral operations by 2025 while helping clients reduce their environmental footprint through smart technology.",
    href: "#",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    category: "Citation Reads",
    date: "October 18, 2024"
  }
]

export function CaseStudiesSection({
  title = "What's New at Upright",
  description = "Stay informed about Upright Systems' latest achievements, community initiatives, and technological innovations.",
  articles = defaultArticles,
}: NewsProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    const updateSelection = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap())
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }

    updateSelection()
    carouselApi.on("select", updateSelection)

    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  // Trigger confetti on title hover
  const handleTitleHover = () => {
    const duration = 2000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white cursor-pointer"
              onMouseEnter={handleTitleHover}
            >
              {title}
            </h2>
            {/* Smiley Drawing - Tilted */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              style={{ transform: "rotate(-8deg)" }}
            >
              {/* Left eye */}
              <circle cx="18" cy="20" r="4" fill="#000000" />
              {/* Right eye */}
              <circle cx="42" cy="20" r="4" fill="#000000" />
              {/* Smile */}
              <path
                d="M 12 35 Q 30 50 48 35"
                stroke="#000000"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Carousel with Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="absolute -top-20 right-0 flex gap-2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-12 w-12 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="h-12 w-12 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {articles.map((article, index) => (
                <CarouselItem
                  key={article.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={article.href}
                      className="group block h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Yellow to Blue gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 via-blue-900/50 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block px-4 py-1.5 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-full shadow-lg">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                          Read More
                        </p>
                      </div>
                    </a>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {Array.from({ length: Math.ceil(articles.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${Math.floor(currentSlide / 4) === index
                ? "w-10 bg-blue-600"
                : "w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              onClick={() => carouselApi?.scrollTo(index * 4)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="/blog">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Articles
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
