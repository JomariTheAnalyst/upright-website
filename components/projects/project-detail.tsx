"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectItem } from "@/data/projects-data";
import { CloseButton } from "@/components/ui/close-button";
import Link from "next/link";

interface ProjectDetailProps {
  project: ProjectItem;
  allProjects: ProjectItem[];
  nextProjectLink?: string;
  prevProjectLink?: string;
}

// Logo mapping based on project slug
const getClientLogo = (slug: string): string => {
  if (slug.includes("lbc")) return "/images/logo/LBC.jpg";
  if (slug.includes("gerrys")) return "/images/logo/client-logos/gerrys.png";
  if (slug.includes("mycado")) return "/images/logo/client-logos/mycado.png";
  if (slug.includes("one-health-pass")) return "/images/logo/client-logos/BOQ.png";
  if (slug.includes("avior") || slug.includes("myavior")) return "/images/logo/client-logos/avior.png";
  return "";
};

export function ProjectDetail({ project, allProjects }: ProjectDetailProps) {
  const clientLogo = getClientLogo(project.slug);
  
  // Get other projects (exclude current one), shuffle, and take 2
  const otherProjects = [...allProjects]
    .filter(p => p.id !== project.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <>
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: 'NeutraTextTF-BoldAlt';
          src: url('/fonts/NeutraTextTF-BoldAlt.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Graphik-Regular';
          src: url('/fonts/Graphik-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      
      {/* Close Button - Fixed position */}
      <CloseButton />

      {/* Main Container - Flexbox layout */}
      <div className="bg-[#1e2226] text-white">
        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT COLUMN - Sticky within the flex container */}
          <div className="w-full lg:w-1/2 lg:self-start lg:sticky lg:top-0 lg:h-screen flex flex-col items-center justify-center bg-[#1e2226] p-8 md:p-16">
              
              {/* Project Image */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.7 }}
                 className="relative w-full max-w-xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10"
              >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
              </motion.div>
          </div>

          {/* RIGHT COLUMN - Regular flow, scrolls naturally */}
          <div className="w-full lg:w-1/2 bg-[#1e2226] p-8 md:p-16 lg:p-20 xl:p-28 lg:min-h-screen">
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="max-w-2xl"
              >
                  {/* Category Label */}
                  <div className="mb-10">
                      <span 
                        className="text-[#c9a227] text-xl uppercase tracking-[0.3em] font-bold" 
                        style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                      >
                          {project.category || 'Project'}
                      </span>
                  </div>

                  {/* Title - Much Bigger */}
                  <h1 
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white mb-10 leading-[0.85] tracking-tighter" 
                    style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                  >
                      {project.title}
                  </h1>

                  {/* Short Description - Bigger */}
                  <p 
                    className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-20 font-light" 
                    style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                  >
                      {project.shortDescription}
                  </p>

                  {/* Full Description / Content Sections */}
                  <div className="space-y-16">
                      <div>
                          <h3 
                            className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-wide" 
                            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                          >
                              Project Overview
                          </h3>
                          {project.fullDescription.split('\n\n').map((paragraph, i) => (
                               <p 
                                 key={i} 
                                 className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed" 
                                 style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                               >
                                   {paragraph}
                               </p>
                          ))}
                      </div>

                      {project.highlights && project.highlights.length > 0 && (
                          <div>
                               <h3 
                                 className="text-3xl md:text-4xl font-bold text-white mb-10 uppercase tracking-wide" 
                                 style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                               >
                                  Key Highlights
                              </h3>
                              <ul className="space-y-6">
                                  {project.highlights.map((item, idx) => (
                                      <li key={idx} className="flex items-start gap-5">
                                          <span className="mt-3 min-w-3 h-3 rounded-full bg-[#c9a227]" />
                                          <span 
                                            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                                            style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                                          >
                                            {item}
                                          </span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      )}

                      {/* Additional Metadata */}
                      <div className="grid grid-cols-1 gap-10 pt-12 border-t border-white/10">
                          {(project.client || project.partner) && (
                              <div>
                                  <h4 
                                    className="text-lg uppercase text-gray-500 mb-3 tracking-[0.2em]" 
                                    style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                                  >
                                      Client / Partner
                                  </h4>
                                  <p 
                                    className="text-white text-2xl md:text-3xl font-bold" 
                                    style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                                  >
                                      {project.client || project.partner}
                                  </p>
                              </div>
                          )}
                          
                          {project.recognition && (
                              <div>
                                  <h4 
                                    className="text-lg uppercase text-gray-500 mb-3 tracking-[0.2em]" 
                                    style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                                  >
                                      Recognition
                                  </h4>
                                  <p 
                                    className="text-white text-xl md:text-2xl font-medium leading-relaxed" 
                                    style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                                  >
                                      {project.recognition}
                                  </p>
                              </div>
                          )}
                      </div>

                      {/* Client Logo at Bottom Right */}
                      {clientLogo && (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-12 flex justify-end"
                          >
                              <div className="bg-white rounded-lg p-6 w-48 h-24 flex items-center justify-center">
                                  <div className="relative w-full h-full">
                                      <Image 
                                        src={clientLogo} 
                                        alt="Client Logo"
                                        fill
                                        className="object-contain"
                                      />
                                  </div>
                              </div>
                          </motion.div>
                      )}
                  </div>
              </motion.div>
          </div>
        </div>

        {/* OTHER PROJECTS SECTION */}
        {otherProjects.length > 0 && (
          <div className="bg-[#1e2226] relative overflow-hidden py-20 md:py-28 border-t border-white/5">
            {/* Topographic Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ 
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
                 }} 
            />

            <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
              {/* Section Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-16 tracking-tight"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
              >
                Other Projects
              </motion.h2>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {otherProjects.map((otherProject, idx) => {
                  const logo = getClientLogo(otherProject.slug);
                  return (
                    <motion.div
                      key={otherProject.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <Link 
                        href={otherProject.slug}
                        className="group block relative h-[450px] w-full overflow-hidden border border-white/10"
                      >
                        {/* Project Image - Full Cover */}
                        <Image 
                            src={otherProject.image}
                            alt={otherProject.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                        {/* Centered Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           {/* Title */}
                           <h3 
                            className="text-3xl md:text-5xl font-black uppercase text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
                            style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                          >
                            {otherProject.title}
                          </h3>

                           {/* Read More Button with Top-to-Bottom Fill Effect */}
                           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                               <div className="relative border border-white overflow-hidden group/btn px-8 py-3 cursor-pointer">
                                   <span className="relative z-10 text-white font-bold uppercase tracking-[0.2em] text-sm group-hover/btn:text-white transition-colors duration-300">
                                       Read More
                                   </span>
                                   {/* Fill Effect */}
                                   <div className="absolute inset-0 bg-[#0000ff] transform -translate-y-full transition-transform duration-500 ease-in-out group-hover/btn:translate-y-0" />
                               </div>
                           </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
