"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import { EventShowcase } from "@/components/shared/event-showcase";
import { EventStats } from "@/components/shared/event-stats";
import { Workshops } from "@/components/shared/workshops";
import { Content } from "@/components/shared/content";
import { eventsData } from "@/data/events";
import { CloseButton } from "@/components/ui/close-button";
import { HeroCFC } from "@/components/shared/hero-cfc";

export default function CrewForwardConferencePage() {
  const event = eventsData.find(
    (e) => e.slug === "/events/crew-forward-conference"
  );

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Custom Font */}
      <style jsx global>{`
        @font-face {
          font-family: "NewFont";
          src: url("/fonts/newfont.woff2") format("woff2");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      
      <CloseButton />
      <HeroCFC event={event} />
      <EventStats />
      <EventShowcase />
      <Workshops event={event} />
      <Content event={event} />

      <Footer />
    </div>
  );
}
