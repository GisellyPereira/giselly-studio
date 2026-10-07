"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import type { ArchiveProject } from "@/src/domain/entities/project-archive";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { ArchiveProjectCover } from "./ArchiveProjectCover";
import { getProjectDestination } from "./project-destination";
import styles from "./archive-project-card.module.css";

interface ArchiveProjectCardProps {
  readonly project: ArchiveProject;
  readonly githubUrl: string;
}

export function ArchiveProjectCard({ project, githubUrl }: ArchiveProjectCardProps) {
  const { t } = useI18n();
  const titleId = `archive-project-${project.id}`;
  const tags = [...new Set(project.technology.split(" · ").map((tag) => tag.trim()).filter(Boolean))];
  const destination = getProjectDestination(project, githubUrl);
  const destinationLabel = !project.deployUrl && !project.repositoryUrl
    ? t("Perfil de Giselly no GitHub — {value0} (abre em nova aba)", {value0: project.title})
    : t("{value0}: {value1} (abre em nova aba)", {value0: t(destination.label), value1: project.title});

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
              style={{ objectPosition: project.imagePosition ?? "center" }}
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
        {project.deployUrl ? (
          <ButtonLink
            aria-label={t("Ver projeto: {value0} (abre em nova aba)", {value0: project.title})}
            className={styles.primary}
            href={project.deployUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant="caseAction"
          >{t("Ver projeto")}</ButtonLink>
        ) : null}
        {project.repositoryUrl ? (
          <ButtonLink
            aria-label={t("Ver GitHub: {value0} (abre em nova aba)", {value0: project.title})}
            className={project.deployUrl ? styles.secondary : styles.primary}
            href={project.repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant={project.deployUrl ? "text" : "caseAction"}
          >{t("Ver GitHub")}</ButtonLink>
        ) : null}
        {!project.deployUrl && !project.repositoryUrl ? (
          <ButtonLink
            aria-label={t("Ver GitHub de Giselly — referência para {value0} (abre em nova aba)", {value0: project.title})}
            className={styles.primary}
            href={githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant="caseAction"
          >{t("Ver GitHub")}</ButtonLink>
        ) : null}
      </div>
    </article>
  );
}
