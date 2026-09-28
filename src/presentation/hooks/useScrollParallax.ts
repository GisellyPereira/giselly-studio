"use client";

import { useEffect, useRef } from "react";

interface ScrollParallaxOptions {
  readonly start?: number;
  readonly end?: number;
}

export function useScrollParallax({ start = -30, end = 0 }: ScrollParallaxOptions = {}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = layer?.closest("section");
    if (!layer || !section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousTime = 0;
    let current = 0;
    let visible = true;

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      return start + (end - start) * progress;
    };

    const paint = (value: number) => {
      const rect = section.getBoundingClientRect();
      const height = layer.offsetHeight;
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      let safeValue = value;

      // Keep the visible section covered even during a fast scroll or resize.
      if (height > 0 && visibleBottom > visibleTop) {
        const min = (visibleBottom - rect.top - height) / height * 100;
        const max = (visibleTop - rect.top) / height * 100;
        safeValue = Math.max(min, Math.min(max, value));
      }
      layer.style.setProperty("--parallax-y", `${safeValue.toFixed(4)}%`);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };

    const sync = () => {
      stop();
      current = reducedMotion.matches ? -8.3333 : measure();
      paint(current);
    };

    const animate = (time: number) => {
      frame = 0;
      if (!visible || reducedMotion.matches || document.hidden) return;
      const target = measure();
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16.67;
      previousTime = time;
      current += (target - current) * (1 - Math.exp(-elapsed / 90));

      if (Math.abs(target - current) < .005) {
        current = target;
        previousTime = 0;
      } else {
        frame = requestAnimationFrame(animate);
      }
      paint(current);
    };

    const schedule = () => {
      if (!frame && visible && !reducedMotion.matches && !document.hidden) {
        frame = requestAnimationFrame(animate);
      }
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    const resize = new ResizeObserver(sync);

    sync();
    intersection.observe(section);
    resize.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", sync);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);

    return () => {
      stop();
      intersection.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", sync);
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, [start, end]);

  return layerRef;
}
