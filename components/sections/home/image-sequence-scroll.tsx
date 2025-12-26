"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 101; // ezgif-frame-001.png to ezgif-frame-101.png
const IMAGE_PATH = "/images/upright-imagesec/ezgif-frame-";

// Generate frame paths
const getFramePath = (index: number): string => {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `${IMAGE_PATH}${frameNumber}.png`;
};

export function ImageSequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const frameIndexRef = useRef({ value: 0 });

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loaded = 0;

      const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loaded++;
            setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
            resolve(img);
          };
          img.onerror = reject;
          img.src = getFramePath(i);
        });
      });

      try {
        const results = await Promise.all(promises);
        loadedImages.push(...results);
        setImages(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, []);

  // Setup canvas and GSAP animation
  useEffect(() => {
    if (isLoading || images.length === 0) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const canvasWrapper = canvasWrapperRef.current;
    if (!canvas || !container || !canvasWrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const aspectRatio = images[0].width / images[0].height;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate dimensions to cover the viewport while maintaining aspect ratio
      let canvasWidth = windowWidth;
      let canvasHeight = windowWidth / aspectRatio;

      if (canvasHeight < windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth = windowHeight * aspectRatio;
      }

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Draw frame function
    const drawFrame = (index: number) => {
      const frameIndex = Math.min(Math.floor(index), images.length - 1);
      const img = images[frameIndex];
      if (img && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // Draw first frame
    drawFrame(0);

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%", // 3x viewport height for smooth scrubbing
        pin: true,
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1,
        onUpdate: (self) => {
          const frameIndex = Math.floor(self.progress * (FRAME_COUNT - 1));
          frameIndexRef.current.value = frameIndex;
          drawFrame(frameIndex);
        },
      },
    });

    // Add zoom-out effect on canvas wrapper
    tl.fromTo(
      canvasWrapper,
      { scale: 1.1 },
      {
        scale: 1,
        ease: "power3.inOut",
        duration: 1,
      },
      0
    );

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [isLoading, images]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <div className="text-white text-xl font-['Poppins'] mb-4">
            Loading Experience...
          </div>
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <div className="text-white/70 text-sm mt-2">{loadProgress}%</div>
        </div>
      )}

      {/* Canvas Wrapper with zoom effect */}
      <div
        ref={canvasWrapperRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <canvas
          ref={canvasRef}
          className="max-w-none"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Scroll Indicator */}
      {!isLoading && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm font-['Poppins'] mb-2">
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
