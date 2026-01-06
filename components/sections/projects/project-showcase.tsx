"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects-data";

const getClientLogo = (slug: string) => {
  if (slug.includes("lbc")) return "/images/logo/client-logos/lbc.png";
  if (slug.includes("gerrys")) return "/images/logo/client-logos/gerrys.png";
  if (slug.includes("mycado")) return "/images/logo/client-logos/mycado.png";
  if (slug.includes("one-health-pass")) return "/images/logo/client-logos/BOQ.png";
  if (slug.includes("avior") || slug.includes("myavior")) return "/images/logo/client-logos/avior.png";
  return null;
};

export function ProjectShowcase() {
  return (
    <section className="bg-[#ffffff] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
       {/* Inject Handwritten Font */}
       <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
      `}</style>
      
       <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-24">
          {projectsData.map((project, idx) => {
            const logo = getClientLogo(project.slug);
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="block group relative perspective-1000">
                {/* Yellow Background Layer (appears on hover) */}
                <div className="absolute inset-0 bg-[#fece53] rounded-none opacity-0 group-hover:opacity-100 transform origin-center transition-all duration-500 ease-out group-hover:rotate-3 group-hover:scale-[1.03] z-0" />

                {/* Main Card */}
                <div className="relative z-10 bg-[#f5f5f2] p-8 md:p-12 shadow-sm transition-all duration-500 ease-out transform -rotate-1 group-hover:-rotate-2 group-hover:-translate-y-4 min-h-[500px] md:min-h-[700px] flex items-center">
                  
                  {/* Inner Frame Border */}
                  <div className="absolute inset-2 sm:inset-3 border border-gray-400/50 pointer-events-none z-10" />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full h-full relative z-20">
                    
                    {/* LEFT COLUMN: TEXT (7 cols) */}
                    <div className="md:col-span-7 flex flex-col justify-center items-start pt-10 md:pt-0">
                        {/* Label */}
                        <span 
                          className="inline-block text-xs font-bold uppercase tracking-widest text-[#1e2226] mb-6"
                          style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                        >
                          {project.category || "PROJECT"}
                        </span>

                        {/* Title */}
                        <h2 
                          className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#2a6db5] mb-8 leading-[0.9] tracking-tight"
                          style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                        >
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p 
                          className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-light"
                          style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                        >
                          {project.shortDescription}
                        </p>

                        {/* Tags / "Ideal For" */}
                        <div>
                          <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                            Details:
                          </span>
                          <div className="flex flex-wrap gap-3">
                             {project.highlights?.slice(0, 4).map((tag, i) => (
                               <span 
                                key={i}
                                className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600 bg-white"
                                style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                               >
                                 {tag.length > 20 ? tag.substring(0, 20) + "..." : tag}
                               </span>
                             ))}
                          </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CLIENT LOGO (5 cols) */}
                    <div className="md:col-span-5 relative flex items-center justify-center p-8">
                       {/* Client Logo Image */}
                       <div className="relative w-full aspect-square flex items-center justify-center">
                          {logo ? (
                            <div className="relative w-3/4 h-3/4">
                              <Image 
                                src={logo}
                                alt={`${project.title} Client Logo`}
                                fill
                                className="object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                              />
                            </div>
                          ) : (
                             // Fallback if no logo found
                            <div className="relative w-full h-full overflow-hidden rounded-lg opacity-80">
                               <Image 
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                       </div>

                       {/* HANDWRITTEN ANNOTATIONS */}
                       <div className="absolute -top-6 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none md:block hidden">
                          <span className="font-['Caveat',_cursive] text-3xl text-[#2a6db5] -rotate-12 block">
                            Partner
                          </span>
                       </div>
                    </div>

                  </div>

                  {/* Corner Arrow Interaction - CLICKABLE LINK */}
                  <Link href={project.slug} className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center cursor-pointer z-30">
                     {/* The Drawing Box Container */}
                     <div className="absolute right-0 bottom-0 w-full h-full"> 
                        {/* Top Border - Draws from right to left */}
                        <span className="absolute top-0 right-0 h-[1px] bg-gray-400 w-0 group-hover:w-full transition-all duration-700 ease-in-out delay-100" />
                        {/* Left Border - Draws from bottom to top */}
                        <span className="absolute bottom-0 left-0 w-[1px] bg-gray-400 h-0 group-hover:h-full transition-all duration-700 ease-in-out delay-100" />
                     </div>
                     
                     {/* Arrow Icon itself - Big and Thick */}
                     <ArrowRight className="w-12 h-12 sm:w-16 sm:h-16 text-[#1e2226] stroke-[3]" />
                  </Link>

                </div>
              </div>
            </motion.div>
          );
          })}
       </div>
    </section>
  );
}
