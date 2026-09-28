import type { Project } from "@/src/domain/entities/portfolio";
import { ProjectArtwork } from "@/src/presentation/components/projects/ProjectArtwork";
import { Button } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { TagList } from "@/src/presentation/components/shared/TagList";

interface ProjectCardProps {
  readonly project: Project;
  readonly onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className={`project-card project-${project.color}`}>
      <div className="project-meta">
        <span>{project.number}</span>
        <p>{project.category}</p>
        <span>{project.year}</span>
      </div>
      <div className="project-layout">
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <TagList tags={project.tags} />
          <Button
            variant="project"
            icon={<ArrowIcon diagonal />}
            onClick={() => onOpen(project)}
            aria-label={`Ver estudo de caso ${project.title}`}
          >
            Ver case
          </Button>
        </div>
        <ProjectArtwork color={project.color} />
      </div>
    </article>
  );
}
