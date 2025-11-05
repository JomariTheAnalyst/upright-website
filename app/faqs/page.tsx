import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { Footer } from "@/components/layout/footer";
import { FAQSection } from "@/components/sections/faq";

export const metadata = {
  title: "FAQs - Upright Systems Inc.",
  description:
    "Frequently asked questions about our IT solutions, services, pricing, and support. Get answers to common questions about working with Upright Systems Inc.",
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
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#faf8ed" }}
    >
      <ProfessionalNavbar />
      <FAQSection />
      <Footer />
    </div>
  );
}
