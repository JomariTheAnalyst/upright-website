import { BlogSection } from "@/components/ui/blog-section";
import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Blogs - Upright",
};

export default function BlogDemoPage() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#faf8ed" }}
    >
      <ProfessionalNavbar />
      <main className="pt-24 pb-16">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
