"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import { CaseStudyModal } from "@/src/presentation/components/projects/CaseStudyModal";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

interface FeaturedProjectsSectionProps {
  readonly projects: readonly Project[];
}

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const selectedProjects = projects.filter((project) => project.title !== "RamenGo" && project.title !== "App Reino").slice(0, 6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectTrigger = useRef<HTMLButtonElement | null>(null);
  const closeProject = useCallback(() => {
    setSelectedProject(null);
    requestAnimationFrame(() => projectTrigger.current?.focus({ preventScroll: true }));
  }, []);

  return (
    <>
    <EntranceSection className="selected-work" id="projetos" aria-labelledby="selected-work-title">
      <div className="selected-work__inner">
        <header className="selected-work__header">
          <div>
            <p className="selected-work__eyebrow" data-entrance="rise">Uma seleção do meu trabalho</p>
            <h2 id="selected-work-title" data-entrance="heading" data-entrance-children>
              <span>Projetos em</span>
              <em>destaque.</em>
            </h2>
          </div>
        </header>

        <div className="selected-work__canvas">
          <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--one" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
          <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--two" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
          <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--three" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
          <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--four" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />

          {selectedProjects.map((project) => (
              <article className={`project-cutout project-cutout--${project.color}`} key={project.title}>
                <Button
                  variant="trigger"
                  className="project-cutout__button"
                  data-entrance="paper"
                  aria-label={`Abrir detalhes do projeto ${project.title}`}
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    projectTrigger.current = event.currentTarget;
                    setSelectedProject(project);
                  }}
                >
                  <span className="project-cutout__picture">
                    <Image
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 700px) 82vw, (max-width: 1050px) 42vw, 30vw"
                      src={project.imageSrc}
                      style={{ objectPosition: project.imagePosition, ...(project.storeLinks?.length ? { objectFit: "contain", backgroundColor: "#e8f0f6" } : {}) }}
                    />
                  </span>
                  <span className="project-cutout__caption">
                    <span className="project-cutout__meta">{project.category}</span>
                    <strong>{project.title}</strong>
                  </span>
                </Button>
              </article>
          ))}
        </div>

        <div className="selected-work__more" data-entrance="rise">
          <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--five" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
          <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--six" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
          <ButtonLink className="selected-work__more-link" href="/projetos" variant="heroPrimary">
            Explorar todos os projetos
          </ButtonLink>
        </div>
      </div>
    </EntranceSection>
    <CaseStudyModal project={selectedProject} onClose={closeProject} />
    </>
  );
}
