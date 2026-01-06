"use client";

import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { ContactSection } from "@/components/sections/contact";
import { MapSection } from "@/components/sections/map";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#fafafa" }}
    >
      <TransparentNavbar />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}
