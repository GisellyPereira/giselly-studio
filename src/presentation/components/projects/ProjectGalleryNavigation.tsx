"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { Button } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";

interface ProjectGalleryNavigationProps {
  readonly page: number;
  readonly pageCount: number;
  readonly start: number;
  readonly end: number;
  readonly total: number;
  readonly onChange: (direction: -1 | 1) => void;
}

export function ProjectGalleryNavigation({ page, pageCount, start, end, total, onChange }: ProjectGalleryNavigationProps) {
  const { t } = useI18n();
  const number = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="project-gallery__navigation">
      <p aria-atomic="true" aria-live="polite" className="project-gallery__counter">
        <span aria-hidden="true">{number(start)} — {number(end)} <span>/ {number(total)}</span></span>
        <span className="sr-only">{t("Página {value0} de {value1}. Projetos {value2} a {value3} de {value4}.", {value0: page + 1, value1: pageCount, value2: start, value3: end, value4: total})}</span>
      </p>
      <div className="project-gallery__arrows" aria-label={t("Navegação dos projetos")} role="group">
        <Button variant="trigger" aria-controls="public-project-cards" aria-label={t("Quatro projetos anteriores")} className="gallery-arrow gallery-arrow--previous" disabled={pageCount <= 1} onClick={() => onChange(-1)} type="button"><ArrowIcon /></Button>
        <Button variant="trigger" aria-controls="public-project-cards" aria-label={t("Próximos quatro projetos")} className="gallery-arrow" disabled={pageCount <= 1} onClick={() => onChange(1)} type="button"><ArrowIcon /></Button>
      </div>
    </div>
  );
}
