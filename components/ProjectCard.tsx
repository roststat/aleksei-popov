import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <div className="border border-neutral-200 rounded-xl p-6 flex flex-col gap-3 h-full hover:border-neutral-900 transition-colors">
      <h2 className="text-lg font-semibold">{project.title}</h2>
      <p className="text-sm text-neutral-500 flex-1">{project.description}</p>
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-neutral-100 rounded-md text-neutral-600">
              {tag}
            </span>
          ))}
        </div>
      )}
      {(project.href || project.link) && (
        <span className="text-sm text-neutral-900 font-medium mt-1">
          Подробнее →
        </span>
      )}
    </div>
  );

  if (project.href) {
    return <Link href={project.href} className="block">{content}</Link>;
  }

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
