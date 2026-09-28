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
  const number = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="project-gallery__navigation">
      <p aria-atomic="true" aria-live="polite" className="project-gallery__counter">
        <span aria-hidden="true">{number(start)} — {number(end)} <span>/ {number(total)}</span></span>
        <span className="sr-only">Página {page + 1} de {pageCount}. Projetos {start} a {end} de {total}.</span>
      </p>
      <div className="project-gallery__arrows" aria-label="Navegação dos projetos" role="group">
        <button aria-controls="public-project-cards" aria-label="Quatro projetos anteriores" className="gallery-arrow gallery-arrow--previous" disabled={pageCount <= 1} onClick={() => onChange(-1)} type="button"><ArrowIcon /></button>
        <button aria-controls="public-project-cards" aria-label="Próximos quatro projetos" className="gallery-arrow" disabled={pageCount <= 1} onClick={() => onChange(1)} type="button"><ArrowIcon /></button>
      </div>
    </div>
  );
}
