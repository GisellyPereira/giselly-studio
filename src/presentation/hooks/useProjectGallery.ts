"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const PROJECTS_PER_PAGE = 4;

export function useProjectGallery(total: number) {
  const [page, setPage] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pageCount = Math.ceil(total / PROJECTS_PER_PAGE);
  const currentPage = Math.min(page, Math.max(0, pageCount - 1));
  const start = currentPage * PROJECTS_PER_PAGE;

  const cancelReset = useCallback(() => {
    if (resetTimer.current !== null) {
      clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }
  }, []);

  useEffect(() => cancelReset, [cancelReset]);

  const activate = useCallback((id: string) => {
    cancelReset();
    setActiveId(id);
  }, [cancelReset]);

  const deactivate = useCallback((id: string, immediate = false) => {
    cancelReset();
    const reset = () => {
      resetTimer.current = null;
      setActiveId((current) => current === id ? null : current);
    };
    // Crossing the gap between cards must not briefly restore the default title/color.
    if (immediate) reset();
    else resetTimer.current = setTimeout(reset, 100);
  }, [cancelReset]);

  function changePage(direction: -1 | 1) {
    if (pageCount <= 1) return;
    cancelReset();
    setActiveId(null);
    setPage((currentPage + direction + pageCount) % pageCount);
  }

  return { page: currentPage, pageCount, start, activeId, activate, deactivate, changePage };
}
