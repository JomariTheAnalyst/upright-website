"use client"

import { motion } from "motion/react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"

const cultureContent = [
  {
    title: "Innovation with Purpose",
    description:
      "We don't innovate for innovation's sake. Every solution we create is driven by a clear purpose: to solve real problems and deliver measurable value to our clients. We encourage creative thinking, embrace emerging technologies, and foster an environment where bold ideas can flourish. Our team has access to cutting-edge tools, dedicated time for experimentation, and the freedom to challenge conventional approaches. This purposeful innovation has led to breakthrough solutions across multiple industries.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
          alt="Innovation with Purpose"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Collaboration Over Competition",
    description:
      "We believe that the best outcomes emerge when people work together, not against each other. Our culture prioritizes teamwork, knowledge sharing, and collective success over individual achievement. We create spaces for open dialogue, encourage cross-functional collaboration, and celebrate team wins. By fostering an environment where everyone's voice matters and diverse perspectives are valued, we build stronger solutions and a more cohesive team.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
          alt="Collaboration Over Competition"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Continuous Learning and Growth",
    description:
      "In the fast-paced world of technology, standing still means falling behind. We're committed to continuous learning at every level of our organization. From comprehensive onboarding programs to ongoing training opportunities, we invest in our team's professional development. We sponsor certifications, support conference attendance, facilitate internal knowledge-sharing sessions, and provide mentorship programs. Your growth journey is our priority, and we provide the resources and support to help you reach your full potential.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop"
          alt="Continuous Learning and Growth"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Integrity in Every Action",
    description:
      "Integrity is the foundation of everything we do. We believe in doing the right thing, even when no one is watching. This means being transparent with our clients, honest in our communications, and ethical in our business practices. We hold ourselves accountable to the highest standards of professional conduct, treat everyone with respect, and build trust through consistent, principled actions. Our reputation is built on integrity, and we protect it fiercely.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
          alt="Integrity in Every Action"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Empowerment and Inclusion",
    description:
      "We believe that diverse teams create better solutions. We're committed to building an inclusive workplace where everyone feels valued, respected, and empowered to contribute their unique perspectives. We actively seek diverse talent, create equal opportunities for advancement, and foster an environment where differences are celebrated. By empowering every team member to bring their authentic selves to work, we unlock creativity, drive innovation, and build a stronger, more resilient organization.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop"
          alt="Empowerment and Inclusion"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Work-Life Balance",
    description:
      "We understand that our team members have lives outside of work, and we respect that. A healthy work-life balance isn't just a perk—it's essential for long-term success and well-being. We offer flexible working arrangements, support remote work options, encourage taking time off, and promote wellness initiatives. We believe that when our team is happy and healthy, they do their best work. Your well-being matters to us, and we're committed to creating an environment where you can thrive both professionally and personally.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop"
          alt="Work-Life Balance"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    ),
  },
]

export function CorporateCulture() {
  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
              Corporate Culture
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Scroll through to discover the principles that guide everything we do at Upright Systems
            </p>
          </motion.div>
        </div>

        {/* Sticky Scroll Component - Full Width */}
        <div className="w-full max-w-[1600px] mx-auto">
          <StickyScroll content={cultureContent} contentClassName="lg:h-[400px] lg:w-[500px]" />
        </div>
      </div>
    </section>
  )
}
