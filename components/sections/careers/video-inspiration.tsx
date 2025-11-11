"use client";

import { useEffect, useRef, useState } from "react";

export function VideoInspirationSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let videoDuration = 0;

    // Get video duration when metadata loads
    const handleLoadedMetadata = () => {
      videoDuration = videoElement.duration;
      console.log("Video duration loaded:", videoDuration);
    };

    // Handle time update to cut last 6 seconds
    const handleTimeUpdate = () => {
      const currentTime = videoElement.currentTime;

      // If we have duration and current time is within 6 seconds of end, loop back
      if (videoDuration > 0 && currentTime >= videoDuration - 6) {
        console.log("Looping video at:", currentTime);
        videoElement.currentTime = 0;
      }
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          videoElement.play().catch((error) => {
            console.log("Video autoplay failed:", error);
          });
        } else {
          videoElement.pause();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(videoElement);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-auto"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="https://cdn.builder.io/o/assets%2Fdf86a2c927524359b1806962d7ea4653%2F6b79875d36294992adb0fb437023984a%2Fcompressed?apiKey=df86a2c927524359b1806962d7ea4653&token=6b79875d36294992adb0fb437023984a&alt=media&optimized=true"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
