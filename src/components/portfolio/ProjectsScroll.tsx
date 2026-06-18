import { projects, projectsTitle } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function ProjectsScroll() {
  return (
    <section className="projects-scroll" aria-label={projectsTitle}>
      <h2 className="projects-scroll__heading">{projectsTitle}</h2>
      <div className="projects-scroll__viewport" tabIndex={0}>
        <div className="projects-scroll__track">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
