"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

const NAVIGATION_OFFSET = -80;

type LenisStore = ReturnType<typeof createLenisStore>;

function createLenisStore() {
  let current: Lenis | null = null;
  const listeners = new Set<() => void>();

  return {
    getSnapshot: () => current,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    set: (next: Lenis | null) => {
      if (current === next) return;
      current = next;
      listeners.forEach((listener) => listener());
    },
  };
}

const LenisContext = createContext<Lenis | null>(null);
const lenisLockCounts = new WeakMap<Lenis, number>();

let nativeScrollLockCount = 0;
let previousBodyOverflow = "";

function isAdminPath(pathname: string) {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

function getServerSnapshot() {
  return null;
}

function decodeHash(hash: string) {
  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [store] = useState<LenisStore>(createLenisStore);
  const lenis = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    getServerSnapshot
  );
  const adminRoute = isAdminPath(pathname);

  useEffect(() => {
    if (adminRoute) {
      store.set(null);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const instance = new Lenis({
      anchors: { offset: NAVIGATION_OFFSET },
      autoRaf: false,
    });
    const raf = (time: number) => instance.raf(time * 1000);

    instance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    store.set(instance);

    return () => {
      store.set(null);
      lenisLockCounts.delete(instance);
      instance.start();
      instance.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(raf);
      instance.destroy();
    };
  }, [adminRoute, store]);

  useEffect(() => {
    if (adminRoute || !lenis || !window.location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(
        decodeHash(window.location.hash.slice(1))
      );
      if (target) {
        lenis.scrollTo(target, {
          immediate: true,
          offset: NAVIGATION_OFFSET,
        });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [adminRoute, lenis, pathname]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

export function useLenisScrollLock(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!locked) return;

    if (nativeScrollLockCount === 0) {
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    nativeScrollLockCount += 1;

    if (lenis) {
      const nextCount = (lenisLockCounts.get(lenis) ?? 0) + 1;
      lenisLockCounts.set(lenis, nextCount);
      if (nextCount === 1) lenis.stop();
    }

    return () => {
      nativeScrollLockCount = Math.max(0, nativeScrollLockCount - 1);
      if (nativeScrollLockCount === 0) {
        document.body.style.overflow = previousBodyOverflow;
      }

      if (!lenis) return;

      const currentCount = lenisLockCounts.get(lenis);
      if (currentCount === undefined) return;

      const nextCount = Math.max(0, currentCount - 1);
      if (nextCount === 0) {
        lenisLockCounts.delete(lenis);
        lenis.start();
      } else {
        lenisLockCounts.set(lenis, nextCount);
      }
    };
  }, [lenis, locked]);
}
