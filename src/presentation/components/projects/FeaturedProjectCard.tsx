"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import type { Project } from "@/src/domain/entities/portfolio";
import { Button } from "@/src/presentation/components/shared/Button";

interface FeaturedProjectCardProps {
  readonly project: Project;
  readonly onOpen: (project: Project) => void;
}

export function FeaturedProjectCard({ project, onOpen }: FeaturedProjectCardProps) {
  const { t } = useI18n();
  return (
    <article className={`featured-project-card featured-project-card--${project.color}`}>
      <Button
        variant="trigger"
        aria-label={t("Abrir detalhes do projeto {value0}", {value0: project.title})}
        onClick={() => onOpen(project)}
        type="button"
      >
        <span className="featured-project__visual">
          <Image
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
            src={project.imageSrc}
            style={{ objectPosition: project.imagePosition, ...(project.imageFit ? { objectFit: project.imageFit } : {}) }}
          />
        </span>

        <span className="featured-project__body">
          <strong>{project.title}</strong>
          <span className="featured-project__summary">{project.description}</span>
          <span className="sr-only">{t("Abrir detalhes do projeto")}</span>
        </span>
      </Button>
    </article>
  );
}
