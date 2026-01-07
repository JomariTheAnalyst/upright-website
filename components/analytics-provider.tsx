"use client";

import { useEffect, useState } from "react";
import { hasConsented, getConsentValue } from "./cookie-banner";

/**
 * Analytics Provider - Only loads analytics scripts after user consent.
 *
 * Usage in layout.tsx:
 * <AnalyticsProvider>
 *   {children}
 * </AnalyticsProvider>
 *
 * Add your analytics scripts inside this component when consent is given.
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check initial consent state
    setConsentGiven(hasConsented());

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent<string>) => {
      setConsentGiven(event.detail === "accepted");
    };

    window.addEventListener(
      "cookieConsentChanged",
      handleConsentChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "cookieConsentChanged",
        handleConsentChange as EventListener
      );
    };
  }, []);

  return (
    <>
      {children}
      {consentGiven && <AnalyticsScripts />}
    </>
  );
}

/**
 * Place your analytics scripts here.
 * They will only load after the user accepts cookies.
 */
function AnalyticsScripts() {
  useEffect(() => {
    // Example: Google Analytics
    // Uncomment and add your GA ID when ready
    /*
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
    */

    // Example: Facebook Pixel, Hotjar, etc.
    // Add your tracking scripts here

    console.log("[Analytics] Consent given - analytics scripts loaded");
  }, []);

  return null;
}

export default AnalyticsProvider;
