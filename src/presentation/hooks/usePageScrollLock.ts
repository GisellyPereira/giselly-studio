"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

export function usePageScrollLock(isLocked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isLocked) return;

    const previousOverflow = document.body.style.overflow;
    const wasStopped = lenis?.isStopped;

    lenis?.stop();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (!wasStopped) lenis?.start();
    };
  }, [isLocked, lenis]);
}
