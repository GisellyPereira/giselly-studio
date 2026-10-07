"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { useState } from "react";
import type { Experience } from "@/src/domain/entities/portfolio";
import { Button } from "@/src/presentation/components/shared/Button";
import { ExperienceChapter } from "./ExperienceChapter";
import styles from "./experience.module.css";

export function ExperienceCollection({ experiences }: { readonly experiences: readonly Experience[] }) {
  const { t } = useI18n();
  const [selection, setSelection] = useState(() => ({
    id: experiences.find((experience) => experience.current)?.id ?? experiences[0]?.id,
    hasChanged: false,
  }));
  const selected = experiences.find((experience) => experience.id === selection.id) ?? experiences[0];

  if (!selected) return null;

  return (
    <div className={styles.collection}>
      <nav aria-label={t("Escolha uma experiência profissional")} className={styles.index}>
        <p className={styles.indexLabel}>{t("Clique em uma empresa")}</p>
        <ul className={styles.indexList} data-entrance="from-left" data-entrance-children>
          {experiences.map((experience) => (
            <li key={experience.id}>
              <Button
                variant="trigger"
                aria-controls="experience-detail"
                aria-pressed={experience.id === selected.id}
                className={styles.indexButton}
                onClick={() => {
                  if (experience.id !== selected.id) setSelection({ id: experience.id, hasChanged: true });
                }}
              >
                <span className={styles.indexCompany}>{experience.companyShort}</span>
                <span className={styles.indexPeriod}>{experience.period}</span>
                <span className={styles.indexState}>
                  {experience.id === selected.id ? t("Em leitura") : t("Abrir experiência")}
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.stage} data-entrance="paper" data-entrance-delay=".12">
        <span aria-hidden="true" className={styles.folderTab} />
        <ExperienceChapter key={selected.id} experience={selected} animateEntrance={selection.hasChanged} />
      </div>
      <p aria-live="polite" className="sr-only">{t("Exibindo experiência na")} {selected.companyShort}.</p>
    </div>
  );
}
