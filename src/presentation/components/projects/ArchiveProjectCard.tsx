import Image from "next/image";
import type { Project } from "@/src/domain/entities/portfolio";
import type { ArchiveProject } from "@/src/domain/entities/project-archive";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { ArchiveProjectCover } from "./ArchiveProjectCover";
import { getProjectDestination } from "./project-destination";
import styles from "./archive-project-card.module.css";

interface ArchiveProjectCardProps {
  readonly project: ArchiveProject;
  readonly githubUrl: string;
  readonly onOpenDetails?: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ArchiveProjectCard({ project, githubUrl, onOpenDetails }: ArchiveProjectCardProps) {
  const titleId = `archive-project-${project.id}`;
  const tags = [...new Set(project.technology.split(" · ").map((tag) => tag.trim()).filter(Boolean))];
  const destination = getProjectDestination(project, githubUrl);
  const destinationLabel = !project.deployUrl && !project.repositoryUrl
    ? `Perfil de Giselly no GitHub — ${project.title} (abre em nova aba)`
    : `${destination.label}: ${project.title} (abre em nova aba)`;

  return (
    <article aria-labelledby={titleId} className={styles.card} data-category={project.category} data-entrance="fade">
      <ButtonLink
        aria-label={destinationLabel}
        className={styles.bodyLink}
        href={destination.href}
        rel="noopener noreferrer"
        tabIndex={-1}
        target="_blank"
        variant="text"
      >
        <div className={styles.picture}>
          {project.imageSrc ? (
            <Image
              alt={project.imageAlt}
              className={styles.image}
              fill
              sizes="(max-width: 767px) 92vw, (max-width: 1050px) 46vw, (max-width: 1199px) 30vw, (max-width: 1295px) 23vw, 286px"
              src={project.imageSrc}
              style={{ objectPosition: project.imagePosition ?? "center", ...(project.imageFit ? { objectFit: project.imageFit, backgroundColor: "#fffdf8", transform: "none" } : {}) }}
            />
          ) : (
            <ArchiveProjectCover category={project.category} layout={project.coverLayout} monogram={project.monogram} title={project.title} />
          )}
        </div>

        <div className={styles.content}>
          <h3 id={titleId}>{project.title}</h3>
          {tags.length > 0 ? (
            <div className={styles.technology}>
              <TagList tags={tags} />
            </div>
          ) : null}
        </div>
      </ButtonLink>

      <div className={styles.actions}>
        {project.featured?.screenshots?.length && onOpenDetails ? <Button variant="trigger" className={styles.details} aria-haspopup="dialog" aria-label={`Ver telas e detalhes de ${project.title}`} onClick={event => onOpenDetails(project.featured!, event.currentTarget)}>Ver telas</Button> : null}
        {project.storeLinks?.length ? project.storeLinks.map((store) => (
          <ButtonLink key={store.href} aria-label={`${store.label}: ${project.title} (abre em nova aba)`} className={styles.primary} href={store.href} rel="noopener noreferrer" target="_blank" variant="caseAction">
            {store.label}
          </ButtonLink>
        )) : <ButtonLink
          aria-label={destinationLabel}
          className={styles.primary}
          href={destination.href}
          rel="noopener noreferrer"
          target="_blank"
          variant="caseAction"
        >
          {destination.label}
        </ButtonLink>}
        {project.deployUrl && project.repositoryUrl ? (
          <ButtonLink
            aria-label={`Código de ${project.title} no GitHub (abre em nova aba)`}
            className={styles.secondary}
            href={project.repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            Ver código
          </ButtonLink>
        ) : null}
      </div>
    </article>
  );
}
