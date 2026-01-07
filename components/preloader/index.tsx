"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
  useCallback,
} from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./loader";
import gsap from "gsap";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  isFirstVisit: boolean;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  isFirstVisit: true,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

// Critical assets to preload before showing content
const CRITICAL_IMAGES = [
  "/images/logo/Upright Logo2.png",
  // Home hero background (external CDN)
  "https://cdn.builder.io/api/v1/image/assets%2Fdf86a2c927524359b1806962d7ea4653%2Fb261f7095ab74ea484cc4cf493b21031",
];

const CRITICAL_FONTS = [
  "/fonts/Graphik-Regular.woff2",
  "/fonts/NeutraTextTF-BoldAlt.woff2",
];

// Timeout fallback to prevent hanging on slow networks
const PRELOAD_TIMEOUT_FIRST_VISIT = 5000; // 5 seconds for first visit
const PRELOAD_TIMEOUT_RETURN_VISIT = 2500; // 2.5 seconds for return visits
const MIN_LOADING_TIME_FIRST_VISIT = 3000; // Minimum time to show animation
const MIN_LOADING_TIME_RETURN_VISIT = 1000;
const VISITED_KEY = "upright_has_visited";

function Preloader({ children, disabled = false }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [assetsReady, setAssetsReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const loadingTween = useRef<gsap.core.Tween | null>(null);
  const loadingPercentRef = useRef<{ value: number }>({ value: 0 });

  const bypassLoading = useCallback(() => {
    loadingTween.current?.progress(0.99).kill();
    setLoadingPercent(100);
    setIsLoading(false);
  }, []);

  // Preload critical assets
  useEffect(() => {
    const hasVisited = localStorage.getItem(VISITED_KEY);
    const timeout = hasVisited
      ? PRELOAD_TIMEOUT_RETURN_VISIT
      : PRELOAD_TIMEOUT_FIRST_VISIT;

    let loadedCount = 0;
    const totalAssets = CRITICAL_IMAGES.length + CRITICAL_FONTS.length;
    let isMounted = true;

    const checkAllLoaded = () => {
      loadedCount++;
      if (isMounted && loadedCount >= totalAssets) {
        setAssetsReady(true);
      }
    };

    // Timeout fallback
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setAssetsReady(true);
      }
    }, timeout);

    // Preload images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Don't block on errors
      img.src = src;
    });

    // Preload fonts
    CRITICAL_FONTS.forEach(async (fontUrl) => {
      try {
        const fontName = fontUrl.split("/").pop()?.split(".")[0] || "Font";
        const font = new FontFace(fontName, `url(${fontUrl})`);
        await font.load();
        document.fonts.add(font);
      } catch {
        // Font loading failed, continue anyway
      }
      if (isMounted) checkAllLoaded();
    });

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle minimum loading time for animation
  useEffect(() => {
    const hasVisited = localStorage.getItem(VISITED_KEY);
    setIsFirstVisit(!hasVisited);

    if (!hasVisited) {
      localStorage.setItem(VISITED_KEY, "true");
    }

    const minTime = hasVisited
      ? MIN_LOADING_TIME_RETURN_VISIT
      : MIN_LOADING_TIME_FIRST_VISIT;

    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minTime);

    return () => clearTimeout(timer);
  }, []);

  // Animate loading percentage based on asset loading
  useEffect(() => {
    const hasVisited = localStorage.getItem(VISITED_KEY);
    const duration = hasVisited ? 2 : 4;

    loadingTween.current = gsap.to(loadingPercentRef.current, {
      value: assetsReady ? 100 : 85, // Go to 85% while loading, 100% when ready
      duration: assetsReady ? 0.5 : duration,
      ease: assetsReady ? "power2.out" : "slow(0.7,0.7,false)",
      onUpdate: () => {
        setLoadingPercent(loadingPercentRef.current.value);
      },
    });

    return () => {
      loadingTween.current?.kill();
    };
  }, [assetsReady]);

  // Complete loading when both assets are ready AND minimum time has elapsed
  useEffect(() => {
    if (assetsReady && minTimeElapsed) {
      // Small delay to ensure 100% is shown
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [assetsReady, minTimeElapsed]);

  return (
    <preloaderContext.Provider
      value={{ isLoading, bypassLoading, loadingPercent, isFirstVisit }}
    >
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
