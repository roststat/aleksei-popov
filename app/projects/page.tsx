import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Проекты</h1>
      <p className="text-neutral-500 mb-12">Реализованные работы и инициативы</p>
      {projects.length === 0 ? (
        <p className="text-neutral-400">Проекты скоро появятся.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
