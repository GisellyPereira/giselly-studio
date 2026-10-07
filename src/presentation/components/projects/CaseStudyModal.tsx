"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { usePageScrollLock } from "@/src/presentation/hooks/usePageScrollLock";
import galleryStyles from "./case-study-gallery.module.css";

interface CaseStudyModalProps {
  readonly project: Project | null;
  readonly email?: string;
  readonly onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { t } = useI18n();
  const dialogRef = useRef<HTMLElement>(null);
  usePageScrollLock(Boolean(project));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;

    const focusableControls = () => Array.from(dialog.querySelectorAll<HTMLElement>(
      "a[href], button, input, select, textarea, [tabindex], [contenteditable='true']",
    )).filter((element) =>
      element.tabIndex >= 0 && !element.hasAttribute("disabled") &&
      element.getClientRects().length > 0 && window.getComputedStyle(element).visibility !== "hidden",
    );

    const focusFirst = () => (focusableControls()[0] ?? dialog).focus({ preventScroll: true });
    if (!dialog.contains(document.activeElement)) focusFirst();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const controls = focusableControls();
      const first = controls[0];
      const last = controls[controls.length - 1];
      const active = document.activeElement;

      if (!first || !last) {
        event.preventDefault();
        dialog.focus({ preventScroll: true });
      } else if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    const containFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !dialog.contains(event.target)) focusFirst();
    };

    window.addEventListener("keydown", handleKeydown);
    document.addEventListener("focusin", containFocus);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("focusin", containFocus);
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
        ref={dialogRef}
        aria-labelledby="case-title"
        aria-modal="true"
        className={`case-sheet case-${project.color} case-project-${project.number}`}
        data-lenis-prevent
        role="dialog"
        tabIndex={-1}
      >
        <span aria-hidden="true" className="case-sheet__flower case-sheet__flower--one" />
        <span aria-hidden="true" className="case-sheet__flower case-sheet__flower--two" />

        <div className="case-close-anchor">
          <Button variant="modalClose" autoFocus aria-label={t("Fechar estudo de caso")} onClick={onClose}>
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
                  style={{ objectPosition: project.imagePosition, ...(project.imageFit ? { objectFit: project.imageFit } : {}) }}
                />
              </div>
            </figure>
          </section>

          {!project.hideDetailGallery && project.screenshots && project.screenshots.length > 0 ? (
            <section className={galleryStyles.gallery} data-screens={project.screenshots.length} aria-label={t("Telas do {value0}", {value0: project.title})}>
              {project.screenshots.map((screenshot) => (
                <figure className={galleryStyles.screen} key={screenshot.src}>
                  <Image alt={screenshot.alt} src={screenshot.src} width={screenshot.width} height={screenshot.height} sizes="(max-width: 760px) 84vw, 30vw" className={galleryStyles.image} />
                  <figcaption>{screenshot.caption}</figcaption>
                </figure>
              ))}
            </section>
          ) : null}

          <section aria-label={t("Resumo do estudo de caso")} className="case-notes">
            <div className="case-note case-note--challenge">
              <span className="case-note__label">{t("Ponto de partida")}</span>
              <h3>{t("O desafio")}</h3>
              <p>{project.challenge}</p>
            </div>
            <div className="case-note case-note--result">
              <span className="case-note__label">{t("O que ganhou forma")}</span>
              <h3>{t("O resultado")}</h3>
              <p>{project.result}</p>
            </div>
          </section>

          <div className="case-actions">
            {project.storeLinks?.length ? project.storeLinks.map((store) => (
              <ButtonLink key={store.href} variant="caseAction" href={store.href} target="_blank" rel="noopener noreferrer" aria-label={t("{value0}: {value1} (abre em nova aba)", {value0: store.label, value1: project.title})}>
                {store.label}
              </ButtonLink>
            )) : project.deployUrl ? (
              <ButtonLink variant="caseAction" href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                {project.deployLabel ?? t("Ver projeto")}
              </ButtonLink>
            ) : project.presentationUrl ? null : (
              <Button variant="caseAction" disabled aria-label={t("Link do projeto ainda não disponível")}>{t("Ver projeto")}</Button>
            )}
            {project.presentationUrl ? (
              <ButtonLink variant="caseAction" href={project.presentationUrl} target="_blank" rel="noopener noreferrer" aria-label={t("Ver apresentação na jornada pedagógica no LinkedIn (abre em nova aba)")}>{t("Ver apresentação no LinkedIn")}</ButtonLink>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}
