"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import { Button } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { usePageScrollLock } from "@/src/presentation/hooks/usePageScrollLock";

interface CaseStudyModalProps {
  readonly project: Project | null;
  readonly email: string;
  readonly onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
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
        className={`case-sheet case-${project.color} case-project-${project.number}`}
        data-lenis-prevent
        role="dialog"
      >
        <span aria-hidden="true" className="case-sheet__flower case-sheet__flower--one" />
        <span aria-hidden="true" className="case-sheet__flower case-sheet__flower--two" />

        <div className="case-close-anchor">
          <Button variant="modalClose" autoFocus aria-label="Fechar estudo de caso" onClick={onClose}>
            ×
          </Button>
        </div>

        <div className="case-sheet__content">
          <section className="case-sheet-grid">
            <div className="case-intro">
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

          <div className="case-actions case-actions--public">
            <Button
              variant="caseAction"
              aria-label="Ver projeto — link será adicionado em breve"
              disabled
              icon={<ArrowIcon diagonal />}
            >
              Ver projeto
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
