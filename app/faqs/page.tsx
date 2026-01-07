import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { FAQsHeroSection } from "@/components/sections/faqs/faqs-hero";
import { FAQSection } from "@/components/sections/faq";

export const metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about our IT solutions, services, pricing, and support. Get answers to common questions about working with Upright Solutions and Systems Consultancy Corp.",
  keywords: [
    "FAQ",
    "IT solutions",
    "support",
    "pricing",
    "services",
    "Philippines",
  ],
};

export default function FAQPage() {
  return (
    <div className="relative min-h-screen">
      <TransparentNavbar />
      <FAQsHeroSection />
      <div style={{ backgroundColor: "#faf8ed" }}>
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
