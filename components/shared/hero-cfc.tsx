"use client";

import { motion } from "framer-motion";
import { EventItem } from "@/data/events";
import { Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface HeroCFCProps {
  event: EventItem;
}

export function HeroCFC({ event }: HeroCFCProps) {
  return (
    <section className="bg-[#1d2125] text-white pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Font Customization */}
      <style jsx global>{`
        @font-face {
           font-family: "NeutraTextTF-BoldAlt";
           src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
           font-weight: bold;
           font-style: normal;
           font-display: swap;
        }
        @font-face {
           font-family: "Graphik-Regular";
           src: url("/fonts/Graphik-Regular.woff2") format("woff2");
           font-weight: normal;
           font-style: normal;
           font-display: swap;
        }
      `}</style>
        
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Header Content */}
        <div className="max-w-4xl mb-12 md:mb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-8xl lg:text-[10rem] uppercase font-black leading-[0.85] mb-8 tracking-tighter"
                style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
            >
                {event.title}
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
                style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
            >
                {event.shortDescription}
            </motion.p>
        </div>

        {/* Featured Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[16/9] md:aspect-[21/9] relative rounded-xl overflow-hidden mb-8 md:mb-12 bg-white flex items-center justify-center p-8"
        >
             <img 
                src="/images/logo/Crew Forward Logo (2).png" 
                alt={event.title}
                className="w-full h-full object-contain"
             />
        </motion.div>

        {/* Bottom Info Bar */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-8 md:pb-10"
        >
            {/* Left Side: Author & Date */}
            <div className="flex flex-col gap-4 mb-6 md:mb-0">
                <div className="flex items-center gap-2">
                     <span 
                        className="text-white font-bold text-lg" 
                        style={{ fontFamily: "'NeutraTextTF-BoldAlt', sans-serif" }}
                     >
                        {event.leadBy}
                     </span>
                     <span className="text-gray-400">•</span>
                     <span 
                        className="text-gray-400"
                        style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                     >
                        Organizer
                     </span>
                </div>
                
                <div 
                    className="flex items-center gap-4 text-sm md:text-base text-gray-400"
                    style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                >
                    <span>{event.date}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{event.readingTime} minutes</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Share Buttons */}
            <div className="flex items-center gap-3">
                 <span 
                    className="text-gray-400 mr-2"
                    style={{ fontFamily: "'Graphik-Regular', sans-serif" }}
                 >
                    Share:
                 </span>
                 <SocialButton icon={<Twitter className="w-4 h-4" />} href="#" />
                 <SocialButton icon={<Facebook className="w-4 h-4" />} href="#" />
                 <SocialButton icon={<Linkedin className="w-4 h-4" />} href="#" />
            </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <Link 
            href={href}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
            {icon}
        </Link>
    )
}
