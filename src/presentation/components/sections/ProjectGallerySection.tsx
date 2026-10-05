"use client";

import { ButtonLink } from "@/src/presentation/components/shared/Button";
import type { GalleryTone, ProjectGalleryContent } from "@/src/domain/entities/public-project";
import { ProjectGalleryCard } from "@/src/presentation/components/projects/ProjectGalleryCard";
import { ProjectGalleryHeading } from "@/src/presentation/components/projects/ProjectGalleryHeading";
import { ProjectGalleryNavigation } from "@/src/presentation/components/projects/ProjectGalleryNavigation";
import { PROJECTS_PER_PAGE, useProjectGallery } from "@/src/presentation/hooks/useProjectGallery";

const tones: readonly GalleryTone[] = ["rose", "mauve", "banana", "sky"];

export function ProjectGallerySection({ content }: { readonly content: ProjectGalleryContent }) {
  const gallery = useProjectGallery(content.projects.length);
  const projects = content.projects.slice(gallery.start, gallery.start + PROJECTS_PER_PAGE);
  const activeIndex = projects.findIndex((project) => project.id === gallery.activeId);

  if (projects.length === 0) return null;

  return (
    <section aria-labelledby="project-gallery-title" className="project-gallery" data-tone={activeIndex < 0 ? "ivory" : tones[activeIndex]} id="todos-projetos">
      <div className="project-gallery__inner">
        <header className="project-gallery__header">
          <p className="project-gallery__eyebrow">Todos os projetos</p>
          <ProjectGalleryHeading activeId={gallery.activeId} heading={content.heading} projects={content.projects} />
        </header>

        <div aria-label="Galeria de projetos" className="project-gallery__cards" data-active-index={activeIndex} id="public-project-cards">
          {projects.map((project, index) => (
            <ProjectGalleryCard active={project.id === gallery.activeId} key={project.id} onActivate={gallery.activate} onDeactivate={gallery.deactivate} project={project} tone={tones[index]} />
          ))}
        </div>

        <div className="project-gallery__footer">
          <ButtonLink variant="text" className="project-gallery__github" href={content.githubUrl} rel="noopener noreferrer" target="_blank">Explore meu GitHub <span aria-hidden="true">↗</span></ButtonLink>
          <ProjectGalleryNavigation end={gallery.start + projects.length} onChange={gallery.changePage} page={gallery.page} pageCount={gallery.pageCount} start={gallery.start + 1} total={content.projects.length} />
        </div>
      </div>
    </section>
  );
}
