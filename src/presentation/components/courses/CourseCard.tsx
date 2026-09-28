"use client";

import Image from "next/image";
import { useState } from "react";
import type { Course } from "@/src/domain/entities/course";

interface CourseCardProps {
  readonly course: Course;
  readonly provider: string;
  readonly providerLogo: string;
}

export function CourseCard({ course, provider, providerLogo }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = `course-title-${course.id}`;
  const detailsId = `course-details-${course.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="course-card"
      data-open={isOpen}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsOpen(false);
      }}
    >
      <div className="course-card__paper">
        <span aria-hidden="true" className="course-card__tape" />

        <div className="course-card__visual">
          <Image
            alt=""
            className="course-card__image"
            fill
            sizes="(max-width: 639px) 86vw, (max-width: 1023px) 44vw, 390px"
            src={course.imageSrc}
          />
          <div aria-hidden="true" className="course-card__shade" />

          <div aria-hidden={!isOpen} className="course-card__reveal" id={detailsId}>
            <div className="course-card__details">
              <span className="course-card__reveal-label">O que ficou na bagagem</span>
              <Image alt={provider} className="course-card__provider" height={30} src={providerLogo} width={162} />
              <p className="course-card__hours">{course.hours} horas de aprendizado</p>
              <p className="course-card__description">{course.description}</p>
            </div>
          </div>
        </div>

        <div className="course-card__caption">
          <p className="course-card__meta">
            <span>{provider}</span>
            <span>{course.hours}h</span>
          </p>
          <h3 className="course-card__title" id={titleId}>{course.title}</h3>
          <span aria-hidden="true" className="course-card__hint">ver detalhes</span>
        </div>
      </div>

      <button
        aria-controls={detailsId}
        aria-describedby={isOpen ? detailsId : undefined}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Ocultar" : "Ver"} detalhes do curso ${course.title}`}
        className="course-card__trigger"
        onBlur={() => setIsOpen(false)}
        onClick={() => {
          const hasMouseHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
          if (!hasMouseHover) setIsOpen((open) => !open);
        }}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible")) setIsOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
        }}
        type="button"
      >
        <span aria-hidden="true" className="course-card__touch-close">fechar</span>
      </button>
    </article>
  );
}
