"use client";

import Image from "next/image";
import { useState } from "react";
import type { CoursesContent } from "@/src/domain/entities/course";
import { CourseCard } from "@/src/presentation/components/courses/CourseCard";

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
    <section aria-labelledby="courses-title" className="courses-section" id="cursos">
      <div aria-hidden="true" className="courses-section__pattern" />
      <div className="courses-section__inner">
        <header className="courses-section__header">
          <p className="courses-section__eyebrow">
            <span aria-hidden="true" />
            Meus cursos
          </p>
          <h2 id="courses-title">
            <span className="courses-section__heading-main">{content.heading[0]}</span>
            <span className="courses-section__heading-script">{content.heading[1]}</span>
          </h2>
          <div className="courses-section__note">
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

        <div className="courses-section__carousel" id="courses-carousel-start">
          <button
            aria-label="Ver cursos anteriores"
            className="courses-section__arrow courses-section__arrow--desktop courses-section__arrow--previous"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(-1);
            }}
            type="button"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>

          <a
            aria-label="Ver cursos anteriores"
            className="courses-section__arrow courses-section__arrow--mobile courses-section__arrow--previous"
            href="#courses-carousel-start"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(-1);
            }}
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </a>

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

          <button
            aria-label="Ver próximos cursos"
            className="courses-section__arrow courses-section__arrow--desktop courses-section__arrow--next"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(1);
            }}
            type="button"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>

          <a
            aria-label="Ver próximos cursos"
            className="courses-section__arrow courses-section__arrow--mobile courses-section__arrow--next"
            href="#courses-carousel-start"
            onClick={(event) => {
              event.currentTarget.blur();
              changePage(1);
            }}
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="courses-section__footer">
          <p><strong>{content.courses.length} cursos</strong><span>concluídos</span></p>
          <p><strong>{content.courses.reduce((total, course) => total + course.hours, 0)} horas</strong><span>de prática e repertório</span></p>
          <a href="https://www.origamid.com/curso/" rel="noreferrer" target="_blank">Formação Origamid ↗</a>
        </div>
      </div>
    </section>
  );
}
