"use client";

import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { ChevronIcon } from "@/src/presentation/components/shared/Icons";
import Image from "next/image";
import { useState } from "react";
import type { CoursesContent } from "@/src/domain/entities/course";
import { CourseCard } from "@/src/presentation/components/courses/CourseCard";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

export function CoursesSection({ content }: { readonly content: CoursesContent }) {
  const coursesPerPage = 3;
  const pageCount = Math.ceil(content.courses.length / coursesPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const visibleCourses = content.courses.slice(
    currentPage * coursesPerPage,
    currentPage * coursesPerPage + coursesPerPage,
  );

  const changePage = (direction: -1 | 1) => {
    setCurrentPage((page) => (page + direction + pageCount) % pageCount);
  };

  return (
    <EntranceSection aria-labelledby="courses-title" className="courses-section" id="cursos">
      <div aria-hidden="true" className="courses-section__pattern" />
      <div className="courses-section__inner">
        <header className="courses-section__header">
          <p className="courses-section__eyebrow" data-entrance="rise">
            <span aria-hidden="true" />
            Meus cursos
          </p>
          <h2 id="courses-title" data-entrance="heading" data-entrance-children>
            <span className="courses-section__heading-main">{content.heading[0]}</span>
            <span className="courses-section__heading-script">{content.heading[1]}</span>
          </h2>
          <div className="courses-section__note" data-entrance="paper" data-entrance-delay=".15">
            <span aria-hidden="true" className="courses-section__note-tape" />
            <p className="courses-section__description">{content.description}</p>
          </div>
          <Image
            aria-hidden="true"
            alt=""
            className="courses-section__flower courses-section__flower--one"
            height={256}
            src="/images/brand/giselly-studio-icon.svg"
            width={256}
          />
          <Image
            aria-hidden="true"
            alt=""
            className="courses-section__flower courses-section__flower--two"
            height={256}
            src="/images/brand/giselly-studio-icon.svg"
            width={256}
          />
        </header>

        <div className="courses-section__carousel" id="courses-carousel-start" data-entrance="rise">
          <Button variant="trigger"
            aria-label="Ver cursos anteriores"
            className="courses-section__arrow courses-section__arrow--desktop courses-section__arrow--previous"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(-1);
            }}
            type="button"
          >
            <ChevronIcon direction="left" />
          </Button>

          <ButtonLink variant="text"
            aria-label="Ver cursos anteriores"
            className="courses-section__arrow courses-section__arrow--mobile courses-section__arrow--previous"
            href="#courses-carousel-start"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(-1);
            }}
          >
            <ChevronIcon direction="left" />
          </ButtonLink>

          <div
            aria-atomic="true"
            aria-label={`Cursos ${currentPage * coursesPerPage + 1} a ${Math.min((currentPage + 1) * coursesPerPage, content.courses.length)} de ${content.courses.length}`}
            aria-live="polite"
            className="courses-section__grid"
            key={currentPage}
          >
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                provider={content.provider}
                providerLogo={content.providerLogo}
              />
            ))}
          </div>

          <Button variant="trigger"
            aria-label="Ver próximos cursos"
            className="courses-section__arrow courses-section__arrow--desktop courses-section__arrow--next"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(1);
            }}
            type="button"
          >
            <ChevronIcon />
          </Button>

          <ButtonLink variant="text"
            aria-label="Ver próximos cursos"
            className="courses-section__arrow courses-section__arrow--mobile courses-section__arrow--next"
            href="#courses-carousel-start"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(1);
            }}
          >
            <ChevronIcon />
          </ButtonLink>
        </div>

        <div className="courses-section__footer" data-entrance="rise" data-entrance-children>
          <p><strong>{content.courses.length} cursos</strong><span>concluídos</span></p>
          <p><strong>{content.courses.reduce((total, course) => total + course.hours, 0)} horas</strong><span>de prática e repertório</span></p>
          <ButtonLink variant="text" href="https://www.origamid.com/curso/" rel="noreferrer" target="_blank">Formação Origamid ↗</ButtonLink>
        </div>
      </div>
    </EntranceSection>
  );
}
