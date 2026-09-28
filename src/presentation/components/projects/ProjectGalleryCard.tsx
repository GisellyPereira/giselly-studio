"use client";

import Image from "next/image";
import type { GalleryTone, PublicProject } from "@/src/domain/entities/public-project";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { GlassPanel } from "@/src/presentation/components/shared/GlassPanel";
import { SparkIcon } from "@/src/presentation/components/shared/Icons";

interface ProjectGalleryCardProps {
  readonly project: PublicProject;
  readonly tone: GalleryTone;
  readonly active: boolean;
  readonly onActivate: (id: string) => void;
  readonly onDeactivate: (id: string, immediate?: boolean) => void;
}

export function ProjectGalleryCard({ project, tone, active, onActivate, onDeactivate }: ProjectGalleryCardProps) {
  const titleId = `gallery-title-${project.id}`;
  const detailsId = `gallery-details-${project.id}`;
  const destination = project.deployUrl ?? project.repositoryUrl;

  return (
    <article
      aria-labelledby={titleId}
      className="gallery-card"
      data-active={active}
      data-tone={tone}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onActivate(project.id);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && !event.currentTarget.contains(document.activeElement)) onDeactivate(project.id);
      }}
      onFocus={(event) => {
        if (event.target.matches(":focus-visible")) onActivate(project.id);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onDeactivate(project.id);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") onDeactivate(project.id, true);
      }}
    >
      {project.imageSrc ? (
        <Image alt="" className="gallery-card__image" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 600px" src={project.imageSrc} />
      ) : (
        <div aria-hidden="true" className="gallery-card__artwork">
          <span className="gallery-card__orbit" />
          <span className="gallery-card__monogram">{project.monogram ?? "</>"}</span>
          <SparkIcon className="gallery-card__artwork-spark" />
          <span className="gallery-card__artwork-caption">Giselly Pereira / code & creativity</span>
        </div>
      )}
      <div aria-hidden="true" className="gallery-card__shade" />
      <div aria-hidden={active} className="gallery-card__caption">
        <span>{project.category}</span>
        <p>{project.title}</p>
      </div>

      <button
        aria-controls={detailsId}
        aria-expanded={active}
        aria-label={`Ver detalhes de ${project.title}`}
        className="gallery-card__trigger"
        onClick={() => onActivate(project.id)}
        type="button"
      />

      <div className="gallery-card__reveal" aria-hidden={!active} inert={!active} id={detailsId}>
        <GlassPanel className="gallery-card__glass" contentClassName="gallery-card__details">
          <span className="gallery-card__category">{project.category} / {project.deployUrl ? "Publicado" : "GitHub"}</span>
          <h3 id={titleId}>{project.title}</h3>
          <p className="gallery-card__description">{project.description}</p>
          <p className="gallery-card__technology">{project.technology}</p>
          {destination ? (
            <div className="gallery-card__actions">
              <ButtonLink
                aria-label={`Ver projeto ${project.title}${project.deployUrl ? " publicado" : " no GitHub"} (abre em nova aba)`}
                href={destination}
                rel="noopener noreferrer"
                target="_blank"
                variant="galleryProject"
              >Ver projeto</ButtonLink>
              {project.deployUrl && project.repositoryUrl ? (
                <a className="gallery-card__source" href={project.repositoryUrl} rel="noopener noreferrer" target="_blank" aria-label={`Código de ${project.title} no GitHub (abre em nova aba)`}>Código ↗</a>
              ) : null}
            </div>
          ) : null}
        </GlassPanel>
      </div>
    </article>
  );
}
