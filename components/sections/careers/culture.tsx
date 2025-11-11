"use client";

import { motion } from "motion/react";
import Image from "next/image";

const cultureItems = [
  {
    id: 1,
    title: "Growth and learning",
    description:
      "Growth is in our DNA. We set bold goals and provide the tools, support, and freedom to exceed them. With endless development opportunities, you'll be constantly challenged to elevate your skills, reach new heights, and inspire others to do the same.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    layout: "left",
  },
  {
    id: 2,
    title: "Innovation and creativity",
    description:
      "We believe the best ideas come from diverse perspectives. Here, you're encouraged to think differently, challenge the status quo, and bring fresh solutions to complex problems. Your creativity drives our innovation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    layout: "right",
  },
  {
    id: 3,
    title: "Work-life balance",
    description:
      "We understand that great work happens when you're at your best. That's why we prioritize flexibility, wellness, and time for what matters most. Your well-being is essential to our collective success.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    layout: "left",
  },
  {
    id: 4,
    title: "Collaborative culture",
    description:
      "Teamwork makes the dream work. We foster an environment where collaboration thrives, ideas flow freely, and every voice is heard. Together, we achieve more than we ever could alone.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
    layout: "right",
  },
];

export function CultureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            What it's like working at Upright
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We cultivate an environment of ambition and excellence. You'll
            collaborate with exceptional global talent, tackle exciting
            challenges, and help drive the evolution of fintech. We prioritise
            flexibility to support your success.
          </p>
          <motion.button
            onClick={() => {
              const jobsSection = document.getElementById("jobs-section");
              jobsSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Explore all careers
          </motion.button>
        </motion.div>

        {/* Culture Items */}
        <div className="space-y-40">
          {cultureItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                item.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-24 min-h-[70vh]`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
