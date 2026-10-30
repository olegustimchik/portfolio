import type { ReactNode } from "react";

import type { Project } from "@/lib/resume";

// Card for a single project; links out when the project has an href.
// Usage: <ProjectCard project={project} />
type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({
  project: { name, summary, stack, href },
}: ProjectCardProps): ReactNode => (
  <article className="flex flex-col rounded-md border border-line bg-surface p-6">
    <h3 className="font-semibold">
      {href ? (
        <a href={href} className="hover:text-accent" target="_blank" rel="noopener noreferrer">
          {name} ↗
        </a>
      ) : (
        name
      )}
    </h3>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
    {stack.length > 0 && (
      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded border border-line px-2 py-0.5 font-mono text-xs">
            {tech}
          </li>
        ))}
      </ul>
    )}
  </article>
);
