"use client";

import { useState, useEffect, useCallback } from "react";

interface AssetPreloaderOptions {
  images?: string[];
  fonts?: string[];
  timeout?: number;
}

interface AssetPreloaderResult {
  isReady: boolean;
  progress: number;
  loadedCount: number;
  totalCount: number;
}

/**
 * Hook to preload critical assets (images and fonts) before showing content.
 * Returns isReady=true when all assets are loaded or timeout is reached.
 */
export function useAssetPreloader(
  options: AssetPreloaderOptions = {}
): AssetPreloaderResult {
  const { images = [], fonts = [], timeout = 3000 } = options;

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const totalCount = images.length + fonts.length;

  const incrementLoaded = useCallback(() => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  }, []);

  useEffect(() => {
    if (totalCount === 0) {
      setIsReady(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let isMounted = true;

    // Timeout fallback - never hang on slow networks
    timeoutId = setTimeout(() => {
      if (isMounted && !isReady) {
        setIsReady(true);
      }
    }, timeout);

    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        if (isMounted) incrementLoaded();
      };
      img.onerror = () => {
        if (isMounted) incrementLoaded(); // Count errors as loaded to not block
      };
      img.src = src;
    });

    // Preload fonts using FontFace API
    fonts.forEach(async (fontUrl) => {
      try {
        // Extract font name from URL for FontFace
        const fontName =
          fontUrl.split("/").pop()?.split(".")[0] || "CustomFont";
        const font = new FontFace(fontName, `url(${fontUrl})`);
        await font.load();
        document.fonts.add(font);
        if (isMounted) incrementLoaded();
      } catch {
        if (isMounted) incrementLoaded(); // Count errors as loaded
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [images, fonts, timeout, totalCount, incrementLoaded, isReady]);

  // Check if all assets are loaded
  useEffect(() => {
    if (loadedCount >= totalCount && totalCount > 0) {
      setIsReady(true);
    }
  }, [loadedCount, totalCount]);

  const progress = totalCount > 0 ? (loadedCount / totalCount) * 100 : 100;

  return {
    isReady,
    progress,
    loadedCount,
    totalCount,
  };
}

/**
 * Utility to warm up an image on hover (for navigation prefetching)
 */
export function warmUpImage(src: string): void {
  if (typeof window === "undefined") return;
  const img = new Image();
  img.src = src;
}

/**
 * Utility to warm up multiple images
 */
export function warmUpImages(srcs: string[]): void {
  srcs.forEach(warmUpImage);
}
