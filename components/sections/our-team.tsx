"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface PersonItem {
  type: "person";
  name: string;
  role: string;
  image: string;
  overlayColor?: string;
}

interface StatItem {
  type: "stat";
  value: string;
  label: string;
  gradient: string;
}

interface GroupItem {
  type: "group";
  layout: "two-row" | "single-column";
  rowPattern?: "image-card" | "card-image"; // Only for two-row groups
  items: (PersonItem | StatItem)[];
}

// Define 6 groups with alternating patterns
const groups: GroupItem[] = [
  // Group 1: Two-row (stat top, image bottom)
  {
    type: "group",
    layout: "two-row",
    rowPattern: "card-image",
    items: [
      {
        type: "stat",
        value: "100K+",
        label: "BUSINESSES BUILT BY CREATORS",
        gradient: "from-teal-400 to-cyan-500",
      },
      {
        type: "person",
        name: "Tyler Tometich",
        role: "Design & Art",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80",
        overlayColor: "from-yellow-500/80 via-yellow-500/40",
      },
    ],
  },
  // Group 2: Single-column (full height image) - ALWAYS IMAGE
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Eno Eka",
        role: "Education",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80",
        overlayColor: "from-purple-500/80 via-purple-500/40",
      },
    ],
  },
  // Group 3: Two-row (image top, stat bottom) - ALTERNATING PATTERN
  {
    type: "group",
    layout: "two-row",
    rowPattern: "image-card",
    items: [
      {
        type: "person",
        name: "Spencer Russell",
        role: "Education",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
        overlayColor: "from-cyan-500/80 via-cyan-500/40",
      },
      {
        type: "stat",
        value: "$10B+",
        label: "EARNED BY CREATORS IN REVENUE",
        gradient: "from-purple-500 via-red-500 to-orange-500",
      },
    ],
  },
  // Group 4: Single-column (full height image) - ALWAYS IMAGE
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Patricia Nikole",
        role: "Beauty & Lifestyle",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
        overlayColor: "from-pink-500/80 via-pink-500/40",
      },
    ],
  },
  // Group 5: Two-row (stat top, image bottom)
  {
    type: "group",
    layout: "two-row",
    rowPattern: "card-image",
    items: [
      {
        type: "stat",
        value: "75M+",
        label: "CUSTOMERS SERVED BY OUR CREATORS",
        gradient: "from-pink-400 to-purple-500",
      },
      {
        type: "person",
        name: "Action Jacquelyn",
        role: "Fitness",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
        overlayColor: "from-orange-500/80 via-orange-500/40",
      },
    ],
  },
  // Group 6: Single-column (full height image) - ALWAYS IMAGE
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Robert Blake",
        role: "Business",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
        overlayColor: "from-blue-500/80 via-blue-500/40",
      },
    ],
  },
];

const renderCard = (
  item: PersonItem | StatItem,
  height: string,
  className?: string
) => {
  if (item.type === "stat") {
    return (
      <div
        className={`${height} ${className} rounded-2xl overflow-hidden relative shadow-lg bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-center items-center text-white`}
      >
        <h3 className="text-5xl md:text-6xl font-black mb-4">{item.value}</h3>
        <p className="text-xs font-bold text-center uppercase leading-tight">
          {item.label}
        </p>
      </div>
    );
  }

  const overlayGradient = item.overlayColor || "from-black/70 via-black/20";

  return (
    <div
      className={`${height} ${className} rounded-2xl overflow-hidden relative shadow-lg`}
    >
      <Image src={item.image} alt={item.name} fill className="object-cover" />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${overlayGradient} to-transparent`}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl md:text-2xl font-bold mb-2 italic leading-tight">
          {item.name}
        </h3>
        <span className="inline-block px-3 py-1 bg-transparent border border-white rounded-full text-xs font-medium">
          {item.role}
        </span>
      </div>
    </div>
  );
};

export function OurTeamSection() {
  return (
    <section
      className="relative w-full py-16 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
        >
          Our Team is Your Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600"
        >
          Dedicated Professionals Working For Your Success
        </motion.p>
      </div>

      {/* Continuous Marquee with 6 Groups */}
      <div className="relative">
        <motion.div
          animate={{ x: [0, -2100] }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-4"
        >
          {[...groups, ...groups, ...groups].map((group, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex-shrink-0 w-[340px]"
            >
              {group.layout === "two-row" ? (
                // Two-row group: much taller (700px total)
                <div className="flex flex-col gap-4 h-[700px]">
                  {renderCard(group.items[0], "h-[340px]", "w-full")}
                  {renderCard(group.items[1], "h-[340px]", "w-full")}
                </div>
              ) : (
                // Single-column group: centered vertically (500px card in 700px container)
                <div className="h-[700px] flex items-center justify-center">
                  {renderCard(group.items[0], "h-[500px]", "w-full")}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
