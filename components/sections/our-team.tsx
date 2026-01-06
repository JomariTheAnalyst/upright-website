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
        value: "10+",
        label: "YEARS OF INDUSTRY EXPERIENCE",
        gradient: "from-teal-400 to-cyan-500",
      },
      {
        type: "person",
        name: "Team Member",
        role: "Development",
        image: "/images/team/team1.JPG",
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
        name: "Team Member",
        role: "Operations",
        image: "/images/team/team2.jpg",
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
        name: "Team Member",
        role: "Engineering",
        image: "/images/team/team3.jpeg",
        overlayColor: "from-cyan-500/80 via-cyan-500/40",
      },
      {
        type: "stat",
        value: "50+",
        label: "SUCCESSFUL PROJECTS DELIVERED",
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
        name: "Team Member",
        role: "Design",
        image: "/images/team/team4.JPG",
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
        value: "100+",
        label: "CLIENTS SERVED ACROSS INDUSTRIES",
        gradient: "from-pink-400 to-purple-500",
      },
      {
        type: "person",
        name: "Team Member",
        role: "Support",
        image: "/images/team/team5.jpg",
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
        name: "Team Member",
        role: "Management",
        image: "/images/team/team6.jpg",
        overlayColor: "from-blue-500/80 via-blue-500/40",
      },
    ],
  },
  // Group 7: Two-row with more team images
  {
    type: "group",
    layout: "two-row",
    rowPattern: "image-card",
    items: [
      {
        type: "person",
        name: "Team Member",
        role: "Technical Lead",
        image: "/images/team/team-1.png",
        overlayColor: "from-green-500/80 via-green-500/40",
      },
      {
        type: "stat",
        value: "24/7",
        label: "DEDICATED SUPPORT AVAILABLE",
        gradient: "from-blue-400 to-indigo-500",
      },
    ],
  },
  // Group 8: Single-column
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Team Member",
        role: "Project Manager",
        image: "/images/team/team-2.png",
        overlayColor: "from-indigo-500/80 via-indigo-500/40",
      },
    ],
  },
  // Group 9: Two-row
  {
    type: "group",
    layout: "two-row",
    rowPattern: "card-image",
    items: [
      {
        type: "stat",
        value: "15+",
        label: "EXPERT TEAM MEMBERS",
        gradient: "from-emerald-400 to-teal-500",
      },
      {
        type: "person",
        name: "Team Member",
        role: "Solutions Architect",
        image: "/images/team/team-3.png",
        overlayColor: "from-teal-500/80 via-teal-500/40",
      },
    ],
  },
  // Group 10: Single-column
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Team Member",
        role: "Quality Assurance",
        image: "/images/team/IMG_5908.JPG",
        overlayColor: "from-rose-500/80 via-rose-500/40",
      },
    ],
  },
  // Group 11: Two-row
  {
    type: "group",
    layout: "two-row",
    rowPattern: "image-card",
    items: [
      {
        type: "person",
        name: "Team Member",
        role: "Business Analyst",
        image: "/images/team/99ed458b270a6e1149bd1151539b3d68.jpeg",
        overlayColor: "from-amber-500/80 via-amber-500/40",
      },
      {
        type: "stat",
        value: "99%",
        label: "CLIENT SATISFACTION RATE",
        gradient: "from-rose-400 to-pink-500",
      },
    ],
  },
  // Group 12: Single-column
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Team Member",
        role: "IT Specialist",
        image: "/images/team/6087042e-8544-4b7b-9a55-162b3493f503.jpg",
        overlayColor: "from-violet-500/80 via-violet-500/40",
      },
    ],
  },
  // Group 13: Two-row
  {
    type: "group",
    layout: "two-row",
    rowPattern: "card-image",
    items: [
      {
        type: "stat",
        value: "5+",
        label: "INDUSTRIES WE SERVE",
        gradient: "from-cyan-400 to-blue-500",
      },
      {
        type: "person",
        name: "Team Member",
        role: "Systems Engineer",
        image: "/images/team/70c47189-96e2-4326-ae64-b789bf65c1cf.jpg",
        overlayColor: "from-sky-500/80 via-sky-500/40",
      },
    ],
  },
  // Group 14: Single-column
  {
    type: "group",
    layout: "single-column",
    items: [
      {
        type: "person",
        name: "Team Member",
        role: "Developer",
        image:
          "/images/team/att.f77iwkFfmm0oB8X2Kq1vKI5vG7enjMjo8M-duCkY7jc.jpg",
        overlayColor: "from-fuchsia-500/80 via-fuchsia-500/40",
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
      style={{ backgroundColor: "#f7f6f1" }}
    >
      {/* Font Definitions */}
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
      `}</style>
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
        >
          Meet the Team
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

      {/* Continuous Marquee with Groups */}
      <div className="relative">
        <motion.div
          animate={{ x: [0, -4900] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-4"
        >
          {[...groups, ...groups].map((group, groupIndex) => (
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
