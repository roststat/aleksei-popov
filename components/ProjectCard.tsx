import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-neutral-200 rounded-xl p-6 flex flex-col gap-3">
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
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-900 font-medium hover:underline mt-1"
        >
          Открыть →
        </a>
      )}
    </div>
  );
}
