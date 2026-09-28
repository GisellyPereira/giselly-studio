"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import type { PublicProject } from "@/src/domain/entities/public-project";
import { portfolioData } from "@/src/data/portfolio";
import { projectGalleryContent } from "@/src/data/public-projects";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { Header } from "@/src/presentation/components/layout/Header";
import { CaseStudyModal } from "@/src/presentation/components/projects/CaseStudyModal";

type ArchiveFilter = "Todos" | "Web" | "Mobile" | "Experimento";

type ArchiveItem = {
  readonly id: string;
  readonly title: string;
  readonly category: "Web" | "Mobile" | "Experimento";
  readonly description: string;
  readonly technology: string;
  readonly imageSrc?: string;
  readonly imageAlt: string;
  readonly deployUrl?: string;
  readonly repositoryUrl?: string;
  readonly featured?: Project;
};

const filters: readonly ArchiveFilter[] = ["Todos", "Web", "Mobile", "Experimento"];

function fromFeatured(project: Project): ArchiveItem {
  return {
    id: `case-${project.number}`,
    title: project.title,
    category: project.category === "Mobile" ? "Mobile" : "Web",
    description: project.description,
    technology: project.tags.join(" · "),
    imageSrc: project.imageSrc,
    imageAlt: project.imageAlt,
    deployUrl: project.deployUrl,
    repositoryUrl: project.repositoryUrl,
    featured: project,
  };
}

function fromPublic(project: PublicProject): ArchiveItem {
  return {
    id: `github-${project.id}`,
    title: project.title,
    category: project.category,
    description: project.description,
    technology: project.technology,
    imageSrc: project.imageSrc,
    imageAlt: `Prévia do projeto ${project.title}`,
    deployUrl: project.deployUrl,
    repositoryUrl: project.repositoryUrl,
  };
}

export function ProjectsArchivePage() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  const projects = useMemo<readonly ArchiveItem[]>(() => {
    const featured = portfolioData.projects.map(fromFeatured);
    const publicProjects = projectGalleryContent.projects
      .filter((project) => project.id !== "procon-ma")
      .map(fromPublic);
    return [...featured, ...publicProjects];
  }, []);

  const visibleProjects = activeFilter === "Todos"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="projects-archive">
      <Header email={portfolioData.email} />

      <section className="projects-archive__hero" id="inicio" aria-labelledby="archive-title">
        <div className="projects-archive__hero-inner">
          <p>Arquivo de projetos · {projects.length} trabalhos</p>
          <h1 id="archive-title">
            <span>Projetos com</span>
            <em>história.</em>
          </h1>
          <div className="projects-archive__hero-note">
            <span>Web · Mobile · Experimentos</span>
            <p>Uma coleção do trabalho profissional aos estudos que construíram meu repertório.</p>
          </div>
        </div>
      </section>

      <section className="projects-archive__catalog" aria-labelledby="catalog-title">
        <div className="projects-archive__catalog-head">
          <div>
            <p className="projects-archive__kicker">Navegue pelo acervo</p>
            <h2 id="catalog-title">Todos, em um só lugar.</h2>
          </div>
          <div className="projects-archive__filters" aria-label="Filtrar projetos">
            {filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <p className="projects-archive__count" aria-live="polite">
          {String(visibleProjects.length).padStart(2, "0")} projetos encontrados
        </p>

        <div className="archive-list">
          {visibleProjects.map((project) => {
            const destination = project.deployUrl ?? project.repositoryUrl;
            const actionLabel = project.featured
              ? "Ver case"
              : project.deployUrl
                ? "Visitar projeto"
                : "Abrir GitHub";

            return (
              <article className="archive-row" data-featured={Boolean(project.featured)} key={project.id}>
                <div className="archive-row__thumb">
                  {project.imageSrc ? (
                    <Image alt={project.imageAlt} fill sizes="(max-width: 767px) 38vw, 190px" src={project.imageSrc} />
                  ) : (
                    <span aria-hidden="true">{project.title.slice(0, 2)}</span>
                  )}
                </div>
                <div className="archive-row__main">
                  <div className="archive-row__meta">
                    <span>{project.category}</span>
                    <span>{project.featured ? "Destaque" : project.deployUrl ? "Publicado" : "GitHub"}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <p className="archive-row__tech">{project.technology}</p>
                {project.featured ? (
                  <button className="archive-row__action" type="button" onClick={() => setSelectedProject(project.featured ?? null)}>
                    {actionLabel} <span aria-hidden="true">↗</span>
                  </button>
                ) : destination ? (
                  <a className="archive-row__action" href={destination} rel="noreferrer" target="_blank">
                    {actionLabel} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>

        <a className="projects-archive__github" href={projectGalleryContent.githubUrl} rel="noreferrer" target="_blank">
          Ver perfil completo no GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <Footer role={portfolioData.role} socials={portfolioData.socials} />
      <CaseStudyModal project={selectedProject} email={portfolioData.email} onClose={closeProject} />
    </main>
  );
}
