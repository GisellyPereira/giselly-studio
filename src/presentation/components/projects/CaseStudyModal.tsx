"use client";

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
        <div className="case-sheet-top">
          <span>
            Case {project.number}
            {project.year ? ` / ${project.year}` : ""}
          </span>
          <Button variant="modalClose" autoFocus aria-label="Fechar estudo de caso" onClick={onClose}>
            ×
          </Button>
        </div>
        <div className="case-sheet-grid">
          <div>
            <p className="eyebrow">
              <span /> {project.category}
            </p>
            <h2 id="case-title">{project.title}</h2>
            <TagList tags={project.tags} />
          </div>
          <div className="case-notes">
            <div>
              <span>01</span>
              <h3>O desafio</h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <span>02</span>
              <h3>O resultado</h3>
              <p>{project.result}</p>
            </div>
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
              {!hasPublicLink ? (
                <p className="case-link-note">
                  Projeto institucional ou proprietário, sem link público informado.
                </p>
              ) : null}
              <ButtonLink
                variant="caseAction"
                href={`mailto:${email}?subject=Quero conversar sobre o projeto ${project.title}`}
                icon={<ArrowIcon diagonal />}
              >
                Conversar sobre este case
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
