"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import type { ArchiveCategory } from "@/src/domain/entities/project-archive";
import type { ProjectCoverLayout } from "@/src/domain/entities/public-project";
import { ArchiveCategoryIcon } from "./ArchiveCategoryIcon";
import styles from "./archive-project-cover.module.css";

interface ArchiveProjectCoverProps {
  readonly category: ArchiveCategory;
  readonly title: string;
  readonly monogram?: string;
  readonly layout?: ProjectCoverLayout;
}

export function ArchiveProjectCover({ category, title, monogram, layout }: ArchiveProjectCoverProps) {
  const { t } = useI18n();
  const initials = monogram ?? title.trim().split(/\s+/).slice(0, 2).map((word) => word[0]).join("");
  const coverLayout = category === "Mobile" ? "phone" : layout ?? (category === "Experimento" ? "editor" : "browser");

  return (
    <div aria-hidden="true" className={styles.cover} data-layout={coverLayout}>
      <span className={styles.category}>
        <ArchiveCategoryIcon category={category} />
        {category === "Experimento" ? t("Experimentos & estudos") : category}
      </span>

      <div className={styles.backing} />
      <div className={styles.window}>
        <span className={styles.chrome}>
          <span className={styles.dots}><i /><i /><i /></span>
          <span className={styles.codeMark}>{"</>"}</span>
        </span>
        <span className={styles.monogram}>{initials}</span>
        {coverLayout === "editor" ? <span className={styles.codeLines}><i /><i /><i /></span> : null}
        <span className={styles.imprint}>Giselly Studio</span>
      </div>
    </div>
  );
}
