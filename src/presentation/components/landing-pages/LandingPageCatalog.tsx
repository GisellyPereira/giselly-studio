"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { useState } from "react";
import type { LandingPageGroup, LandingPageNiche, LandingPageNicheOption } from "@/src/domain/entities/landing-page";
import type { LandingPageProject } from "@/src/domain/entities/public-project";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { Button, ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { LandingPageCard } from "./LandingPageCard";
import styles from "./landing-page-catalog.module.css";

interface LandingPageCatalogProps {
  readonly initialNiche: LandingPageNiche | "todos";
  readonly projects: readonly LandingPageProject[];
  readonly niches: readonly LandingPageNicheOption[];
  readonly groups: readonly LandingPageGroup[];
  readonly heading: string;
  readonly note: string;
}

export function LandingPageCatalog({ initialNiche, projects, niches, groups, heading, note }: LandingPageCatalogProps) {
  const { t } = useI18n();
  const [activeGroup, setActiveGroup] = useState<LandingPageGroup["id"] | "todos">(
    () => initialNiche === "todos" ? "todos" : groups.find((group) => group.niches.includes(initialNiche))?.id ?? "todos",
  );
  const options = [{ id: "todos", label: t("Ver tudo") }, ...groups] as const;
  const selectedGroup = groups.find((group) => group.id === activeGroup);
  const visibleProjects = selectedGroup
    ? projects.filter((project) => selectedGroup.niches.includes(project.landingPage.niche))
    : projects;

  return (
    <EntranceSection className={styles.section} id="referencias" aria-labelledby="niche-title">
      <header className={styles.header} data-entrance="rise">
        <div>
          <h1 id="niche-title">{heading}</h1>
          <p className={styles.note}><span className={styles.flower} aria-hidden="true" />{note}</p>
        </div>
      </header>
      <div className={styles.filters} aria-label={t("Filtrar referências por categoria")} data-entrance="rise">
        {options.map((group) => (
          <Button
            variant="caseAction"
            className={styles.filter}
            key={group.id}
            aria-pressed={activeGroup === group.id}
            aria-controls="landing-page-results"
            onClick={() => setActiveGroup(group.id)}
          >
            <span className={styles.filterContent}>
              <span>{group.label}</span>
              <span className={styles.filterCount} aria-hidden="true">{group.id === "todos" ? projects.length : projects.filter((project) => group.niches.includes(project.landingPage.niche)).length}</span>
            </span>
          </Button>
        ))}
      </div>
      <p className={styles.count} role="status">
        {visibleProjects.length} {visibleProjects.length === 1 ? t("referência") : t("referências")}
        {" "}{selectedGroup ? t("em {value0}", {value0: selectedGroup.label}) : t("para explorar")}
      </p>
      <div className={styles.grid} id="landing-page-results">
        {visibleProjects.map((project) => (
          <LandingPageCard
            project={project}
            nicheLabel={niches.find((niche) => niche.id === project.landingPage.niche)?.label ?? ""}
            key={project.id}
          />
        ))}
      </div>
      <div className={styles.more} data-entrance="rise">
        <div><p>{t("Tem mais coisa por aqui.")}</p><span>{t("Também gosto de criar apps, sistemas e experimentar outras ideias.")}</span></div>
        <ButtonLink variant="heroSecondary" className={styles.archiveLink} href="/projetos" icon={<ArrowIcon />}>{t("Ver todos os projetos")}</ButtonLink>
      </div>
    </EntranceSection>
  );
}
