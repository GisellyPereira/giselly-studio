import Image from "next/image";
import type { Project } from "@/src/domain/entities/portfolio";

interface FeaturedProjectCardProps {
  readonly project: Project;
  readonly onOpen: (project: Project) => void;
}

export function FeaturedProjectCard({ project, onOpen }: FeaturedProjectCardProps) {
  return (
    <article className={`featured-project-card featured-project-card--${project.color}`}>
      <button
        aria-label={`Abrir detalhes do projeto ${project.title}`}
        onClick={() => onOpen(project)}
        type="button"
      >
        <span className="featured-project__visual">
          <Image
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
            src={project.imageSrc}
            style={{ objectPosition: project.imagePosition }}
          />
        </span>

        <span className="featured-project__body">
          <strong>{project.title}</strong>
          <span className="featured-project__summary">{project.description}</span>
          <span className="sr-only">Abrir detalhes do projeto</span>
        </span>
      </button>
    </article>
  );
}
