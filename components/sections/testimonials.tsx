"use client";

import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Upright Systems transformed our banking infrastructure with their innovative solutions. Their expertise and dedication exceeded expectations.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    name: "Maria Santos",
    role: "CTO, BDO Unibank",
  },
  {
    text: "The maritime training platform revolutionized how we train our crew. It's intuitive, powerful, and significantly improved our outcomes.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Captain Roberto Cruz",
    role: "Training Director, Magsaysay Maritime",
  },
  {
    text: "Their cybersecurity solutions gave us peace of mind. Professional, responsive, and truly understands enterprise security needs.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Jennifer Reyes",
    role: "IT Director, DICT Philippines",
  },
  {
    text: "Working with Upright Systems was a game-changer for our digital transformation. Delivered on time and exceeded quality expectations.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Michael Tan",
    role: "VP Technology, Ayala Corporation",
  },
];

const testimonials2 = [
  {
    text: "The cloud migration project was seamless. We saw immediate improvements in performance and significant cost savings.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    name: "Angela Lopez",
    role: "Operations Manager, PLDT",
  },
  {
    text: "Their healthcare EHR system transformed patient care at our hospital network. Implementation was smooth and support outstanding.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Dr. Ramon Garcia",
    role: "Medical Director, St. Luke's Medical Center",
  },
  {
    text: "Upright Systems doesn't just deliver technology—they deliver solutions that drive real business value. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    name: "Sofia Mendoza",
    role: "VP Technology, SM Retail",
  },
  {
    text: "Their commitment to community through scholarship programs shows they're more than a tech company—they're making a real difference.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Carlos Villanueva",
    role: "Dean, Ateneo de Manila University",
  },
];

const testimonials3 = [
  {
    text: "Their green technology initiative aligns perfectly with our sustainability goals. A forward-thinking partner.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Patricia Ramos",
    role: "Sustainability Officer, San Miguel Corporation",
  },
  {
    text: "The AI-powered solutions they developed have given us a competitive edge. Their innovation is world-class.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop",
    name: "David Chen",
    role: "Innovation Lead, Jollibee Foods Corporation",
  },
  {
    text: "From consultation to deployment, Upright Systems demonstrated exceptional professionalism and technical expertise.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    name: "Isabel Torres",
    role: "Project Manager, GCash",
  },
  {
    text: "Their 24/7 support team is incredible. Any issue we've had was resolved quickly and professionally. True partners in success.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=200&auto=format&fit=crop",
    name: "Mark Johnson",
    role: "CIO, Shangri-La Hotels",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs w-full"
                  key={i}
                >
                  <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-gray-900 dark:text-white text-sm tracking-tight leading-tight">
                        {name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#fbf9ef" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted by leading organizations across the Philippines
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px]">
        <TestimonialsColumn testimonials={testimonials} duration={15} />
        <TestimonialsColumn
          testimonials={testimonials2}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={testimonials3}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </section>
  );
}
