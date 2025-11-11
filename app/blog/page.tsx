import { BlogSection } from "@/components/ui/blog-section";
import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { BlogHeroSection } from "@/components/sections/blogs/blog-hero";

export const metadata = {
  title: "Blogs - Upright",
};

export default function BlogDemoPage() {
  return (
    <div className="relative min-h-screen">
      <TransparentNavbar />
      <BlogHeroSection />
      <div style={{ backgroundColor: "#f1f0ee" }}>
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}
