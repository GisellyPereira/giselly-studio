"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { Button } from "./Button";
import { ChevronIcon } from "./Icons";
import styles from "./pagination.module.css";

interface PaginationProps {
  readonly page: number;
  readonly pageCount: number;
  readonly onPageChange: (page: number) => void;
  readonly controls: string;
  readonly label?: string;
}

type PageItem = number | "gap-before" | "gap-after";

function getPageItems(page: number, pageCount: number, visibleCount: 5 | 7): PageItem[] {
  if (pageCount <= visibleCount) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const edgeCount = visibleCount - 2;
  const edgeBoundary = visibleCount === 5 ? 3 : 4;

  if (page <= edgeBoundary) {
    return [
      ...Array.from({ length: edgeCount }, (_, index) => index + 1),
      "gap-after",
      pageCount,
    ];
  }

  if (page >= pageCount - edgeBoundary + 1) {
    return [
      1,
      "gap-before",
      ...Array.from({ length: edgeCount }, (_, index) => pageCount - edgeCount + index + 1),
    ];
  }

  const siblingCount = (visibleCount - 5) / 2;

  return [
    1,
    "gap-before",
    ...Array.from({ length: siblingCount * 2 + 1 }, (_, index) => page - siblingCount + index),
    "gap-after",
    pageCount,
  ];
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  controls,
  label = "Paginação dos projetos",
}: PaginationProps) {
  const { t } = useI18n();
  const totalPages = Math.max(0, Math.floor(pageCount));

  if (totalPages <= 1) return null;

  const currentPage = Math.min(totalPages, Math.max(1, Math.floor(page)));

  function changePage(nextPage: number) {
    if (nextPage !== currentPage && nextPage >= 1 && nextPage <= totalPages) {
      onPageChange(nextPage);
    }
  }

  function renderPages(visibleCount: 5 | 7, className: string) {
    return (
      <ul className={`${styles.pages} ${className}`}>
        {getPageItems(currentPage, totalPages, visibleCount).map((item) => (
          <li key={item}>
            {typeof item === "number" ? (
              <Button
                variant="trigger"
                className={`${styles.button} ${styles.number} ${item === currentPage ? styles.current : ""}`}
                aria-label={item === currentPage ? t("Página {value0}, atual", {value0: item}) : t("Ir para a página {value0}", {value0: item})}
                aria-current={item === currentPage ? "page" : undefined}
                aria-controls={controls}
                onClick={() => changePage(item)}
              >
                {item}
              </Button>
            ) : (
              <span className={styles.gap} aria-hidden="true">…</span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className={styles.pagination} aria-label={label}>
      <Button
        variant="caseAction"
        className={`${styles.button} ${styles.direction}`}
        disabled={currentPage === 1}
        aria-label={t("Ir para a página anterior")}
        aria-controls={controls}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronIcon direction="left" />
      </Button>

      {renderPages(7, styles.desktopPages)}
      {renderPages(5, styles.compactPages)}

      <Button
        variant="caseAction"
        className={`${styles.button} ${styles.direction}`}
        disabled={currentPage === totalPages}
        aria-label={t("Ir para a próxima página")}
        aria-controls={controls}
        onClick={() => changePage(currentPage + 1)}
      >
        <ChevronIcon direction="right" />
      </Button>
    </nav>
  );
}
