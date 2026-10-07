"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import type { LandingPageProject } from "@/src/domain/entities/public-project";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { NicheSketch } from "./NicheSketch";
import styles from "./landing-page-card.module.css";

interface LandingPageCardProps {
  readonly project: LandingPageProject;
  readonly nicheLabel: string;
}

export function LandingPageCard({ project, nicheLabel }: LandingPageCardProps) {
  const { t } = useI18n();
  return (
    <article className={styles.card} data-entrance="rise" data-niche={project.landingPage.niche}>
      <div className={styles.cover}>
        <div className={styles.chrome}>
          <span className={styles.dots} aria-hidden="true"><i /><i /><i /></span>
          <span>{project.landingPage.format}</span>
        </div>
        <div className={styles.art}>
          {project.imageSrc ? (
            <Image
              alt={t("Arte do projeto {value0}", {value0: project.title})}
              className={styles.image}
              src={project.imageSrc}
              fill
              sizes="(max-width: 767px) 94vw, (max-width: 1099px) 46vw, (max-width: 1535px) 30vw, 320px"
            />
          ) : (
            <div className={styles.lettering} aria-hidden="true">
              <NicheSketch niche={project.landingPage.niche} className={styles.coverSketch} />
              <span className={styles.monogram}>{project.monogram ?? project.title}</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.caption}>
        <p className={styles.meta}>{nicheLabel}</p>
        <h2>{project.title}</h2>
        <div className={styles.actions}>
          {project.deployUrl ? (
            <ButtonLink variant="caseAction" className={styles.visit} href={project.deployUrl} target="_blank" rel="noopener noreferrer" aria-label={t("Ver site: {value0}", {value0: project.title})}>{t("Ver site")}</ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
