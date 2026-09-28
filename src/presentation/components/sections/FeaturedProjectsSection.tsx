"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import { CaseStudyModal } from "@/src/presentation/components/projects/CaseStudyModal";
import { ButtonLink } from "@/src/presentation/components/shared/Button";

interface FeaturedProjectsSectionProps {
  readonly projects: readonly Project[];
  readonly email: string;
}

export function FeaturedProjectsSection({ projects, email }: FeaturedProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const selectedProjects = projects.slice(0, 6);

  return (
    <>
      <section className="selected-work" id="projetos" aria-labelledby="selected-work-title">
        <div className="selected-work__inner">
          <header className="selected-work__header">
            <div>
              <p className="selected-work__eyebrow">Uma seleção do meu trabalho</p>
              <h2 id="selected-work-title">
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
                <button
                  className="project-cutout__button"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Conhecer o projeto ${project.title}`}
                >
                  <span className="project-cutout__picture">
                    <Image
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 700px) 82vw, (max-width: 1050px) 42vw, 30vw"
                      src={project.imageSrc}
                      style={{ objectPosition: project.imagePosition }}
                    />
                  </span>
                  <span className="project-cutout__caption">
                    <span className="project-cutout__meta">{project.category}</span>
                    <strong>{project.title}</strong>
                    <span className="project-cutout__arrow" aria-hidden="true">
                      <svg viewBox="0 0 20 20">
                        <path d="M5 15 15 5M7 5h8v8" />
                      </svg>
                    </span>
                  </span>
                </button>
              </article>
            ))}
          </div>

          <div className="selected-work__more">
            <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--five" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
            <Image aria-hidden="true" alt="" className="selected-work__flower selected-work__flower--six" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
            <ButtonLink className="selected-work__more-link" href="/projetos" variant="heroPrimary">
              Explorar todos os projetos
            </ButtonLink>
          </div>
        </div>
      </section>

      <CaseStudyModal project={selectedProject} email={email} onClose={closeProject} />
    </>
  );
}
