"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { LoadingImage } from "@/src/presentation/components/shared/LoadingImage";
import type { ReactNode } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import type { ArchiveProject } from "@/src/domain/entities/project-archive";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { ArchiveProjectCover } from "./ArchiveProjectCover";
import styles from "./archive-project-card.module.css";

interface ArchiveProjectCardProps {
  readonly project: ArchiveProject;
  readonly onOpenCase?: (project: Project, trigger: HTMLElement) => void;
}

export function ArchiveProjectCard({ project, onOpenCase }: ArchiveProjectCardProps) {
  const { t } = useI18n();
  const titleId = `archive-project-${project.id}`;
  const tags = [...new Set(project.technology.split(" · ").map((tag) => tag.trim()).filter(Boolean))];
  const caseStudy = onOpenCase && project.featured ? project.featured : undefined;
  const hasLink = Boolean(project.deployUrl || project.repositoryUrl);

  const body: ReactNode = (
    <>
      <div className={styles.picture}>
        {project.imageSrc ? (
          <LoadingImage
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
        {project.badge ? <span className={styles.badge} data-badge={project.badge}>{t(project.badge)}</span> : null}
      </div>

      <div className={styles.content}>
        <h3 id={titleId}>{project.title}</h3>
        {tags.length > 0 ? (
          <div className={styles.technology}>
            <TagList tags={tags} />
          </div>
        ) : null}
      </div>
    </>
  );

  return (
    <article aria-labelledby={titleId} className={styles.card} data-category={project.category} data-entrance="fade">
      {caseStudy ? (
        <Button
          variant="trigger"
          aria-haspopup="dialog"
          aria-label={t("Abrir estudo de caso: {value0}", {value0: project.title})}
          className={styles.bodyLink}
          onClick={(event) => onOpenCase?.(caseStudy, event.currentTarget)}
          tabIndex={-1}
        >
          {body}
        </Button>
      ) : hasLink ? (
        <ButtonLink
          aria-label={t("{value0}: {value1} (abre em nova aba)", {value0: project.deployUrl ? t("Ver projeto") : t("Ver GitHub"), value1: project.title})}
          className={styles.bodyLink}
          href={project.deployUrl ?? project.repositoryUrl}
          rel="noopener noreferrer"
          tabIndex={-1}
          target="_blank"
          variant="text"
        >
          {body}
        </ButtonLink>
      ) : (
        <div className={styles.bodyLink}>{body}</div>
      )}

      <div className={styles.actions}>
        {caseStudy ? (
          <Button
            variant="caseAction"
            aria-haspopup="dialog"
            aria-label={t("Abrir estudo de caso: {value0}", {value0: project.title})}
            className={styles.primary}
            onClick={(event) => onOpenCase?.(caseStudy, event.currentTarget)}
          >{t("Estudo de caso")}</Button>
        ) : null}
        {project.deployUrl ? (
          <ButtonLink
            aria-label={t("Ver projeto: {value0} (abre em nova aba)", {value0: project.title})}
            className={caseStudy ? styles.secondary : styles.primary}
            href={project.deployUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant={caseStudy ? "text" : "caseAction"}
          >{t("Ver projeto")}</ButtonLink>
        ) : null}
        {project.repositoryUrl ? (
          <ButtonLink
            aria-label={t("Ver GitHub: {value0} (abre em nova aba)", {value0: project.title})}
            className={caseStudy || project.deployUrl ? styles.secondary : styles.primary}
            href={project.repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant={caseStudy || project.deployUrl ? "text" : "caseAction"}
          >{t("Ver GitHub")}</ButtonLink>
        ) : null}
        {!hasLink ? <span className={styles.private}>{t("Código privado")}</span> : null}
      </div>
    </article>
  );
}
