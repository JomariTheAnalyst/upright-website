"use client";

import { motion } from "motion/react";
import Image from "next/image";

const workplaceMedia = [
  // Videos
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3196630/3196630-uhd_2560_1440_25fps.mp4",
    alt: "Team collaboration",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    alt: "Office workspace",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/5495787/5495787-uhd_2560_1440_25fps.mp4",
    alt: "Team meeting",
  },
  // Images
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 2",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 3",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 4",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 5",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 6",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 7",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    alt: "Team collaboration 8",
  },
];

export function WorkplaceSection() {
  // Duplicate for seamless loop
  const duplicatedMedia = [...workplaceMedia, ...workplaceMedia];

  return (
    <section className="py-8 bg-white overflow-hidden">
      {/* Full-width Black Background - No Margins */}
      <div className="bg-white py-12 md:py-16">
        {/* Marquee Container */}
        <div className="relative">
          

          {/* Scrolling media */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-slow gap-6 pl-6">
              {duplicatedMedia.map((media, index) => (
                <div
                  key={`media-${index}`}
                  className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }

        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
