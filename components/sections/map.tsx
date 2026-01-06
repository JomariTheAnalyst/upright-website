"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, ChevronUp, ChevronDown } from "lucide-react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MapControls,
} from "@/components/ui/map";

// Office locations data with correct coordinates
const offices = [
  {
    id: "main",
    name: "MAIN OFFICE",
    tabName: "Main Office",
    address:
      "OCEANWIDE Maritime Services Corp. - Manila Office, 2111 1014, Elias, Santa Cruz, Manila, 1008 Metro Manila",
    tel: "09565134330",
    email: "info@uprightsystems.com",
    coordinates: { lng: 120.98794626768314, lat: 14.618820134540577 },
    zoom: 17,
    googleMapsUrl: "https://maps.app.goo.gl/dEZp72QvCQuZoj2S9",
  },
  {
    id: "cavite",
    name: "CAVITE OFFICE",
    tabName: "Cavite Office",
    address: "Oceanwide Maritime Bacoor, Cavite Training Site",
    tel: "09565134330",
    email: "cavite@uprightsystems.com",
    coordinates: { lng: 120.93805309176695, lat: 14.46040974826165 },
    zoom: 17,
    googleMapsUrl: "https://maps.app.goo.gl/BLjvJTaJhA6HCJgY6",
  },
];

export function MapSection() {
  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const [isCardExpanded, setIsCardExpanded] = useState(true);

  return (
    <section className="relative w-full z-0">
      {/* Font Definitions */}
      <style jsx global>{`
        @font-face {
          font-family: "NeutraText";
          src: url("/fonts/NeutraTextTF-BoldAlt.woff2") format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Graphik";
          src: url("/fonts/Graphik-Regular.woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* Tabs */}
      <div className="flex w-full">
        {offices.map((office) => (
          <button
            key={office.id}
            onClick={() => {
              setActiveOffice(office);
              setIsCardExpanded(true);
            }}
            className={`flex-1 py-4 px-6 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${
              activeOffice.id === office.id
                ? "bg-[#fece53] text-black"
                : "bg-[#9ca3af] text-white hover:bg-[#6b7280]"
            }`}
            style={{ fontFamily: "NeutraText, sans-serif" }}
          >
            {office.tabName}
          </button>
        ))}
      </div>

      {/* Map and Info Container - Fixed height to prevent overlap */}
      <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
        {/* Map */}
        <div className="absolute inset-0">
          <Map
            key={activeOffice.id}
            center={[
              activeOffice.coordinates.lng,
              activeOffice.coordinates.lat,
            ]}
            zoom={activeOffice.zoom}
            styles={{
              light:
                "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
              dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
            }}
          >
            {/* Marker for active office */}
            <MapMarker
              longitude={activeOffice.coordinates.lng}
              latitude={activeOffice.coordinates.lat}
            >
              <MarkerContent>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#fece53] rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                    <MapPin className="w-5 h-5 text-black" fill="#fece53" />
                  </div>
                  {/* Pulse animation */}
                  <div className="absolute inset-0 w-10 h-10 bg-[#fece53] rounded-full animate-ping opacity-30" />
                </div>
              </MarkerContent>
            </MapMarker>
            <MapControls position="top-right" showZoom={true} />
          </Map>
        </div>

        {/* Office Info Card - Collapsible on mobile */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-auto md:top-6 md:left-6 md:right-auto z-10">
          <motion.div
            key={activeOffice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/95 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden md:max-w-sm"
          >
            {/* Collapsible Header - Mobile Only */}
            <button
              onClick={() => setIsCardExpanded(!isCardExpanded)}
              className="w-full flex items-center justify-between p-4 md:hidden"
            >
              <h3
                className="text-lg font-bold text-black uppercase tracking-tight"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                {activeOffice.name}
              </h3>
              {isCardExpanded ? (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Desktop Header - Always visible */}
            <div className="hidden md:block p-6 pb-0">
              <h3
                className="text-2xl md:text-3xl font-bold text-black mb-4 uppercase tracking-tight"
                style={{ fontFamily: "NeutraText, sans-serif" }}
              >
                {activeOffice.name}
              </h3>
            </div>

            {/* Collapsible Content */}
            <AnimatePresence initial={false}>
              {(isCardExpanded ||
                (typeof window !== "undefined" &&
                  window.innerWidth >= 768)) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 md:p-6 md:pt-0">
                    {/* Address */}
                    <p
                      className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed"
                      style={{ fontFamily: "Graphik, sans-serif" }}
                    >
                      {activeOffice.address}
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4 md:mb-6">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm font-bold text-black"
                          style={{ fontFamily: "Graphik, sans-serif" }}
                        >
                          Tel:
                        </span>
                        <span
                          className="text-sm text-gray-700"
                          style={{ fontFamily: "Graphik, sans-serif" }}
                        >
                          {activeOffice.tel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm text-gray-700"
                          style={{ fontFamily: "Graphik, sans-serif" }}
                        >
                          {activeOffice.email}
                        </span>
                      </div>
                    </div>

                    {/* Google Maps Link */}
                    <a
                      href={activeOffice.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#fece53] hover:text-[#e5b84a] transition-colors group mb-4"
                      style={{ fontFamily: "Graphik, sans-serif" }}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span>View on Google Maps</span>
                    </a>

                    {/* View Other Office Links */}
                    <div className="pt-4 border-t border-gray-200">
                      {offices
                        .filter((office) => office.id !== activeOffice.id)
                        .map((office) => (
                          <button
                            key={office.id}
                            onClick={() => {
                              setActiveOffice(office);
                              setIsCardExpanded(true);
                            }}
                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-600 hover:text-[#fece53] transition-colors group"
                            style={{ fontFamily: "Graphik, sans-serif" }}
                          >
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            <span>View Our {office.tabName}</span>
                          </button>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Collapsed state hint - Mobile only */}
            {!isCardExpanded && (
              <div className="px-4 pb-3 md:hidden">
                <p className="text-xs text-gray-500">Tap to expand details</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
