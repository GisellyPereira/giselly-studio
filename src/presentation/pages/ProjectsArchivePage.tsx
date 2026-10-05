"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { archiveFilters, archiveProjects, filterArchiveProjects, projectArchiveContent } from "@/src/data/project-archive";
import { portfolioData } from "@/src/data/portfolio";
import type { Project } from "@/src/domain/entities/portfolio";
import { CaseStudyModal } from "@/src/presentation/components/projects/CaseStudyModal";
import type { ArchiveFilter } from "@/src/domain/entities/project-archive";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { Header } from "@/src/presentation/components/layout/Header";
import { ArchiveCategoryIcon } from "@/src/presentation/components/projects/ArchiveCategoryIcon";
import { ArchiveProjectCard } from "@/src/presentation/components/projects/ArchiveProjectCard";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { Pagination } from "@/src/presentation/components/shared/Pagination";
import { TagList } from "@/src/presentation/components/shared/TagList";
import styles from "./projects-archive.module.css";

const PROJECTS_PER_PAGE = 12;

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 4.5 4.5" /></svg>;
}

export function ProjectsArchivePage() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const detailTrigger = useRef<HTMLButtonElement | null>(null);
  const openDetails = useCallback((project: Project, trigger: HTMLButtonElement) => { detailTrigger.current = trigger; setSelectedProject(project); }, []);
  const closeDetails = useCallback(() => { setSelectedProject(null); requestAnimationFrame(() => detailTrigger.current?.focus({ preventScroll: true })); }, []);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const lenis = useLenis();

  const filteredProjects = useMemo(() => filterArchiveProjects(archiveProjects, activeFilter, query), [activeFilter, query]);
  const counts = useMemo(() => archiveFilters.map((filter) => filterArchiveProjects(archiveProjects, filter.id, query).length), [query]);
  const pageCount = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const currentPage = Math.min(page, Math.max(1, pageCount));
  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const pageProjects = filteredProjects.slice(start, start + PROJECTS_PER_PAGE);

  function changePage(nextPage: number) {
    setPage(nextPage);
    requestAnimationFrame(() => {
      const toolbar = toolbarRef.current;
      if (!toolbar) return;
      toolbar.focus({ preventScroll: true });
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(toolbar, { duration: .8 });
      } else {
        toolbar.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }
    });
  }

  function resetFilters() {
    setActiveFilter("all");
    setQuery("");
    setPage(1);
    requestAnimationFrame(() => searchRef.current?.focus({ preventScroll: true }));
  }

  return (
    <main className={styles.page}>
      <div className={styles.flowers} aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index} />)}
      </div>
      <Header email={portfolioData.email} accent />
      <section className={styles.catalog} id="inicio" aria-labelledby="archive-title">
        <EntranceSection as="header" className={styles.masthead} startOnMount>
          <div className={styles.headingBlock}>
            <div className={styles.eyebrow} data-entrance="rise"><TagList tags={[projectArchiveContent.eyebrow]} /></div>
            <h1 id="archive-title" data-entrance="heading" data-entrance-children>
              <span>{projectArchiveContent.heading[0]}</span>
              <em>
                {projectArchiveContent.heading[1]}
                <svg aria-hidden="true" className={styles.titleUnderline} viewBox="0 0 250 13" fill="none" preserveAspectRatio="none">
                  <path d="M3 9c47-4 83-6 123-5 45 1 82 2 121-1M25 11c45-2 88-2 129-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </em>
            </h1>
            <p className={styles.intro} data-entrance="rise">{projectArchiveContent.description}</p>
          </div>
        </EntranceSection>

        <h2 className="sr-only" id="archive-grid-title">Projetos do acervo</h2>
        <div className={styles.toolbar} ref={toolbarRef} tabIndex={-1} aria-label="Busca e filtros do acervo">
          <div className={styles.filters} role="group" aria-label="Filtrar projetos">
            {archiveFilters.map((filter, index) => (
              <Button variant="caseAction" className={styles.filter} aria-pressed={activeFilter === filter.id} aria-controls="all-projects-grid" key={filter.id} onClick={() => { setActiveFilter(filter.id); setPage(1); }}>
                <span className={styles.filterContent}><ArchiveCategoryIcon category={filter.id} /><span>{filter.label}</span><span className={styles.filterCount} aria-hidden="true">{counts[index]}</span></span>
              </Button>
            ))}
          </div>
          <label className={styles.search}>
            <span className="sr-only">{projectArchiveContent.searchLabel}</span><SearchIcon />
            <input ref={searchRef} type="search" value={query} placeholder={projectArchiveContent.searchPlaceholder} onChange={(event) => { setQuery(event.target.value); setPage(1); }} aria-controls="all-projects-grid" />
          </label>
        </div>

        <div className={styles.resultSummary} role="status" aria-live="polite" aria-atomic="true">
          <p>{filteredProjects.length > 0 ? `${start + 1}–${start + pageProjects.length} de ${filteredProjects.length} ${filteredProjects.length === 1 ? "projeto" : "projetos"}` : "Nenhum projeto encontrado"}</p>
          {pageCount > 1 ? <span>Página {currentPage} de {pageCount}</span> : null}
        </div>

        {pageProjects.length > 0 ? (
          <EntranceSection as="div" className={styles.grid} id="all-projects-grid" aria-labelledby="archive-grid-title" key={`${activeFilter}-${query}-${currentPage}`} revealTogether>
            {pageProjects.map((project) => <ArchiveProjectCard project={project} githubUrl={projectArchiveContent.githubUrl} onOpenDetails={openDetails} key={project.id} />)}
          </EntranceSection>
        ) : (
          <div className={styles.empty} id="all-projects-grid"><ArchiveCategoryIcon category="all" /><h2>{projectArchiveContent.emptyHeading}</h2><p>{projectArchiveContent.emptyDescription}</p><Button variant="caseAction" className={styles.reset} onClick={resetFilters}>Limpar busca e filtros</Button></div>
        )}

        <Pagination page={currentPage} pageCount={pageCount} onPageChange={changePage} controls="all-projects-grid" />
        <div className={styles.github}><p>Tem mais código e ideias em andamento por lá.</p><ButtonLink variant="text" href={projectArchiveContent.githubUrl} target="_blank" rel="noopener noreferrer">Explorar meu GitHub <ArrowIcon diagonal /></ButtonLink></div>

        <EntranceSection as="div">
          <aside className={styles.landingCallout} aria-label="Landing pages para negócios" data-entrance="rise">
            <div><p className={styles.calloutLabel}>Para o seu negócio</p><h2>{projectArchiveContent.landingHeading}</h2><p>{projectArchiveContent.landingDescription}</p></div>
            <ButtonLink variant="heroPrimary" className={styles.landingButton} href="/landing-pages" icon={<ArrowIcon />}>Explorar por nicho</ButtonLink>
          </aside>
        </EntranceSection>
      </section>
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
      <CaseStudyModal project={selectedProject} onClose={closeDetails} />
    </main>
  );
}
