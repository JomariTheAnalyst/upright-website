import { BlogSection } from "@/components/ui/blog-section";
import { ProfessionalNavbar } from "@/components/layout/navbar-professional";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Blog Demo - Upright Systems Inc.",
  description: "Demo of the new blog section component",
};

export default function BlogDemoPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <ProfessionalNavbar />
      <main className="pt-24 pb-16">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
