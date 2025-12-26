"use client";

import { useState, useRef } from "react";

export function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cursorRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-screen overflow-hidden cursor-pointer"
      onClick={handleVideoClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Full Width/Height Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/uprightsamplevideo.mp4" type="video/mp4" />
      </video>

      {/* Mobile/Tablet: Fixed mute button at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-10">
        <button
          onClick={handleVideoClick}
          className="px-6 py-3 rounded-full bg-[#ffe319] shadow-lg flex items-center justify-center"
        >
          <span className="text-black font-bold text-sm uppercase tracking-wider">
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </button>
      </div>

      {/* Desktop: Cursor-following Circle Overlay */}
      <div
        ref={cursorRef}
        className={`absolute pointer-events-none will-change-[left,top] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 hidden lg:block ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: 0, top: 0 }}
      >
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#ffe319] shadow-lg flex items-center justify-center">
          <span className="text-black font-bold text-sm md:text-base uppercase tracking-wider">
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </div>
      </div>
    </section>
  );
}
