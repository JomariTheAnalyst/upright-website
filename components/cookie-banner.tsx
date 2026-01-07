"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Banner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";

const COOKIE_NAME = "upright_cookie_consent";
const COOKIE_EXPIRY_DAYS = 180;

type ConsentValue = "accepted" | "rejected" | null;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export function getConsentValue(): ConsentValue {
  const value = getCookie(COOKIE_NAME);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function hasConsented(): boolean {
  return getConsentValue() === "accepted";
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if consent cookie exists
    const consent = getConsentValue();
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_EXPIRY_DAYS);
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
    // Dispatch event for analytics scripts to listen to
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: "accepted" })
    );
  };

  const handleReject = () => {
    setCookie(COOKIE_NAME, "rejected", COOKIE_EXPIRY_DAYS);
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: "rejected" })
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isClosing ? 100 : 0, opacity: isClosing ? 0 : 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="max-w-4xl mx-auto">
            <Banner
              rounded="default"
              className="bg-white dark:bg-gray-900 shadow-2xl shadow-black/10 border-gray-200 dark:border-gray-700"
              icon={
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0">
                  <Cookie className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              }
            >
              <div className="w-full">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div className="space-y-1">
                    <h2
                      id="cookie-banner-title"
                      className="text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      We value your privacy
                    </h2>
                    <p
                      id="cookie-banner-description"
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      We use cookies to improve your experience and analyze site
                      traffic.{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2 max-md:flex-wrap">
                    <Button
                      size="sm"
                      onClick={handleAccept}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      aria-label="Accept cookies"
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleReject}
                      aria-label="Decline cookies"
                    >
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            </Banner>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;
