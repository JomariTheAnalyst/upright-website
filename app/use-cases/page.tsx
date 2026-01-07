import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Use Cases",
  description:
    "Discover how we solve sector challenges at scale across maritime, government, and logistics industries.",
};

export default function UseCasesPage() {
  return (
    <div className="relative min-h-screen">
      <TransparentNavbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Use Cases
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Discover how we solve sector challenges at scale across maritime,
            government, and logistics industries.
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gray-500 text-lg">Content coming soon...</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
