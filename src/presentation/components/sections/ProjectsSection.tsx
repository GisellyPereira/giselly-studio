"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { useCallback, useState } from "react";
import type { Project } from "@/src/domain/entities/portfolio";
import { CaseStudyModal } from "@/src/presentation/components/projects/CaseStudyModal";
import { ProjectCard } from "@/src/presentation/components/projects/ProjectCard";
import { SectionTopline } from "@/src/presentation/components/shared/SectionTopline";

interface ProjectsSectionProps {
  readonly projects: readonly Project[];
  readonly email: string;
}

export function ProjectsSection({ projects, email }: ProjectsSectionProps) {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section className="projects" id="projetos">
        <div className="projects-heading">
          <SectionTopline label="Trabalho selecionado" index="02 — Projetos" />
          <h2>{t("Projetos que colocaram")}<br />
            <em>{t("ideias em movimento.")}</em>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </section>

      <CaseStudyModal project={selectedProject} email={email} onClose={closeProject} />
    </>
  );
}
