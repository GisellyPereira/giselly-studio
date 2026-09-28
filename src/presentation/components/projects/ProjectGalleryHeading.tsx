"use client";

import { useLayoutEffect, useRef } from "react";
import type { PublicProject } from "@/src/domain/entities/public-project";

interface ProjectGalleryHeadingProps {
  readonly heading: readonly string[];
  readonly projects: readonly PublicProject[];
  readonly activeId: string | null;
}

export function ProjectGalleryHeading({ heading, projects, activeId }: ProjectGalleryHeadingProps) {
  const stageRef = useRef<HTMLSpanElement>(null);
  const slides = [
    { id: null, lines: heading },
    ...projects.map((project) => ({ id: project.id, lines: project.heading ?? [project.title] })),
  ];
  const current = slides.find((slide) => slide.id === activeId) ?? slides[0];

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let disposed = false;

    const fitHeadings = () => {
      if (disposed) return;
      stage.querySelectorAll<HTMLElement>(".project-gallery__title-slide").forEach((slide) => {
        const widths = [...slide.querySelectorAll<HTMLElement>(".project-gallery__title-measure")].map((line) => line.offsetWidth);
        const naturalWidth = Math.max(1, ...widths);
        slide.style.setProperty("--gallery-heading-scale", String(Math.min(1, (stage.clientWidth - 4) / naturalWidth)));
      });
    };

    const observer = new ResizeObserver(fitHeadings);
    observer.observe(stage);
    fitHeadings();
    void document.fonts.ready.then(fitHeadings);
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [heading, projects]);

  return (
    <h2 aria-label={current.lines.join(" ")} id="project-gallery-title">
      <span aria-hidden="true" className="project-gallery__title-stage" ref={stageRef}>
        {slides.map((slide) => (
          <span
            className="project-gallery__title-slide"
            data-active={slide.id === current.id}
            key={slide.id ?? "default"}
          >
            {slide.lines.map((line, index) => <span className="project-gallery__title-line" key={index}><span className="project-gallery__title-measure">{line}</span></span>)}
          </span>
        ))}
      </span>
    </h2>
  );
}
