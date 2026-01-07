import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { CtaBanner } from "@/components/sections/home/cta-banner";
import { HeroProjects } from "@/components/sections/projects/hero-projects";
import { ProjectShowcase } from "@/components/sections/projects/project-showcase";

export const metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of maritime, software, and hardware solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#131b1e] min-h-screen">
      <TransparentNavbar />
      <HeroProjects />
      <ProjectShowcase />
      <CtaBanner />
      <Footer />
    </main>
  );
}
