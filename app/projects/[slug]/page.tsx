import { ProjectDetail } from "@/components/projects/project-detail";
import { projectsData } from "@/data/projects-data";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug.replace("/projects/", ""),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  
  const projectIndex = projectsData.findIndex(
    (p) => p.slug === `/projects/${decodedSlug}` || p.slug.endsWith(`/${decodedSlug}`)
  );
  
  if (projectIndex === -1) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#131b1e] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400">Could not find project with slug: {decodedSlug}</p>
        </div>
      </div>
    );
  }

  const project = projectsData[projectIndex];
  
  // Calculate next/prev links for navigation
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <ProjectDetail 
        project={project}
        allProjects={projectsData}
        prevProjectLink={prevProject?.slug}
        nextProjectLink={nextProject?.slug}
    />
  );
}
