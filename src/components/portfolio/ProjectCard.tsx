import type { Project } from "@/types/portfolio";
import { IoOpenOutline } from "react-icons/io5";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="project-card__tag">
            {tag}
          </li>
        ))}
      </ul>
      {project.url ? (
        <span className="project-card__link-hint">
          <IoOpenOutline size={14} aria-hidden />
          Visitar sitio
        </span>
      ) : null}
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card project-card--link"
      >
        {content}
      </a>
    );
  }

  return <article className="project-card">{content}</article>;
}
