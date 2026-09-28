"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { usePageScrollLock } from "@/src/presentation/hooks/usePageScrollLock";

interface CaseStudyModalProps {
  readonly project: Project | null;
  readonly email: string;
  readonly onClose: () => void;
}

export function CaseStudyModal({ project, email, onClose }: CaseStudyModalProps) {
  usePageScrollLock(Boolean(project));

  useEffect(() => {
    if (!project) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasPublicLink = Boolean(project.deployUrl || project.repositoryUrl);

  return (
    <div
      className="case-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        aria-labelledby="case-title"
        aria-modal="true"
        className={`case-sheet case-${project.color}`}
        data-lenis-prevent
        role="dialog"
      >
        <span aria-hidden="true" className="case-sheet__flower case-sheet__flower--one" />
        <span aria-hidden="true" className="case-sheet__flower case-sheet__flower--two" />

        <div className="case-sheet-top">
          <div className="case-sheet-top__meta">
            <span aria-hidden="true" className="case-sheet-top__mark" />
            <span>{project.category} · projeto em destaque</span>
            <strong>{project.year ?? "Portfólio selecionado"}</strong>
          </div>
          <Button variant="modalClose" autoFocus aria-label="Fechar estudo de caso" onClick={onClose}>
            ×
          </Button>
        </div>

        <div className="case-sheet__content">
          <section className="case-sheet-grid">
            <div className="case-intro">
              <p className="case-intro__eyebrow">Projeto selecionado</p>
              <h2 id="case-title">{project.title}</h2>
              <p className="case-intro__lede">{project.description}</p>
              <TagList tags={project.tags} />
            </div>

            <figure className="case-visual">
              <span aria-hidden="true" className="case-visual__tape" />
              <div className="case-visual__frame">
                <Image
                  alt={project.imageAlt}
                  className="case-visual__image"
                  fill
                  sizes="(max-width: 760px) 92vw, 50vw"
                  src={project.imageSrc}
                  style={{ objectPosition: project.imagePosition }}
                />
              </div>
              <figcaption>
                <span>{project.category}</span>
                <span>{project.year ?? "Projeto profissional"}</span>
              </figcaption>
            </figure>
          </section>

          <section aria-label="Resumo do estudo de caso" className="case-notes">
            <div className="case-note case-note--challenge">
              <span className="case-note__label">Ponto de partida</span>
              <h3>O desafio</h3>
              <p>{project.challenge}</p>
            </div>
            <div className="case-note case-note--result">
              <span className="case-note__label">O que ganhou forma</span>
              <h3>O resultado</h3>
              <p>{project.result}</p>
            </div>
          </section>

          <footer className="case-sheet__footer">
            {!hasPublicLink ? (
              <p className="case-link-note">
                Projeto institucional ou proprietário, sem link público informado.
              </p>
            ) : (
              <p className="case-sheet__footer-note">Quer conhecer os detalhes técnicos ou o processo?</p>
            )}

            <div className="case-actions">
              {project.deployUrl ? (
                <ButtonLink
                  variant="caseAction"
                  href={project.deployUrl}
                  icon={<ArrowIcon diagonal />}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver projeto no ar
                </ButtonLink>
              ) : null}
              {project.repositoryUrl ? (
                <ButtonLink
                  variant="caseAction"
                  href={project.repositoryUrl}
                  icon={<ArrowIcon diagonal />}
                  rel="noreferrer"
                  target="_blank"
                >
                  Abrir repositório
                </ButtonLink>
              ) : null}
              <ButtonLink
                variant="caseAction"
                href={`mailto:${email}?subject=Quero conversar sobre o projeto ${project.title}`}
                icon={<ArrowIcon diagonal />}
              >
                Conversar sobre este case
              </ButtonLink>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
