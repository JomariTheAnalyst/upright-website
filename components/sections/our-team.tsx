"use client";

import { motion } from "motion/react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

// Team members data for circular gallery
const teamMembers: GalleryItem[] = [
  {
    common: "Sarah Johnson",
    binomial: "Chief Technology Officer",
    photo: {
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
      text: "Sarah Johnson - CTO",
      pos: "50% 30%",
      by: "Upright Systems",
    },
  },
  {
    common: "Michael Chen",
    binomial: "Lead Software Architect",
    photo: {
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
      text: "Michael Chen - Lead Architect",
      pos: "50% 25%",
      by: "Upright Systems",
    },
  },
  {
    common: "Emily Rodriguez",
    binomial: "Head of Operations",
    photo: {
      url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
      text: "Emily Rodriguez - Operations",
      pos: "50% 30%",
      by: "Upright Systems",
    },
  },
  {
    common: "David Kim",
    binomial: "Senior DevOps Engineer",
    photo: {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
      text: "David Kim - DevOps",
      pos: "50% 20%",
      by: "Upright Systems",
    },
  },
  {
    common: "Jessica Martinez",
    binomial: "UX/UI Design Lead",
    photo: {
      url: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop&q=80",
      text: "Jessica Martinez - Design Lead",
      pos: "50% 30%",
      by: "Upright Systems",
    },
  },
  {
    common: "Robert Taylor",
    binomial: "Project Manager",
    photo: {
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80",
      text: "Robert Taylor - PM",
      pos: "50% 25%",
      by: "Upright Systems",
    },
  },
  {
    common: "Amanda Foster",
    binomial: "Quality Assurance Lead",
    photo: {
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80",
      text: "Amanda Foster - QA Lead",
      pos: "50% 30%",
      by: "Upright Systems",
    },
  },
  {
    common: "James Wilson",
    binomial: "Security Specialist",
    photo: {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      text: "James Wilson - Security",
      pos: "50% 25%",
      by: "Upright Systems",
    },
  },
];

export function OurTeamSection() {
  return (
    <section className="relative w-full" style={{ backgroundColor: "#f1f0ee" }}>
      {/* Circular Gallery Section */}
      <div className="relative py-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Team is Your Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Dedicated Professionals Working For Your Success
          </motion.p>
        </div>

        <div className="w-full h-[600px] overflow-hidden">
          <CircularGallery
            items={teamMembers}
            radius={500}
            autoRotateSpeed={0.015}
          />
        </div>
      </div>

      {/* Two Column Text Block with Button */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </motion.div>
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-300 hover:bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Us Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
