"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useLayoutEffect, useRef, type HTMLAttributes } from "react";
import { entrancePresets } from "./entrance-presets";

gsap.registerPlugin(ScrollTrigger);

interface EntranceSectionProps extends HTMLAttributes<HTMLElement> {
  readonly as?: "section" | "header" | "footer" | "div";
  readonly startOnMount?: boolean;
  readonly revealTogether?: boolean;
}

export function EntranceSection({ as: Element = "section", startOnMount = false, revealTogether = false, children, ...props }: EntranceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const setSectionRef = useCallback((element: HTMLElement | null) => {
    sectionRef.current = element;
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    let refreshFrame = 0;
    let disposed = false;
    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    media.add({
      desktop: "(min-width: 768px)",
      compact: "(max-width: 767px)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      if (context.conditions?.reduced) return;
      const presets = entrancePresets(Boolean(context.conditions?.compact));
      const groups = section.querySelectorAll<HTMLElement | SVGElement>("[data-entrance]");
      const animations: { group: Element; tween: gsap.core.Tween }[] = [];

      groups.forEach((group) => {
        const recipe = presets[group.dataset.entrance ?? ""];
        if (!recipe || !group.getClientRects().length) return;
        // A direct anchor or restored scroll position must keep earlier content visible.
        if (group.getBoundingClientRect().bottom <= 0) return;
        const targets = group.hasAttribute("data-entrance-children")
          ? Array.from(group.children)
          : group;
        const tween = gsap.from(targets, {
          opacity: 0,
          ease: "power3.out",
          clearProps: "transform,transformOrigin,opacity",
          ...recipe,
          delay: Number(group.dataset.entranceDelay ?? 0),
          scrollTrigger: startOnMount ? undefined : {
            trigger: revealTogether ? section : group,
            start: "top 90%",
            end: "bottom top",
            once: true,
            fastScrollEnd: true,
          },
        });
        animations.push({ group, tween });
      });

      // Keyboard navigation can reach an offscreen control before its scroll reveal.
      const revealFocused = (event: FocusEvent) => {
        const target = event.target;
        if (!(target instanceof Node)) return;
        animations.forEach(({ group, tween }) => {
          if (group.contains(target)) tween.progress(1);
        });
      };
      section.addEventListener("focusin", revealFocused);
      return () => section.removeEventListener("focusin", revealFocused);
    }, section);

    // Font loading and interactive catalogs can change subsequent trigger positions.
    const resize = new ResizeObserver(refresh);
    resize.observe(section);
    document.fonts.ready.then(() => { if (!disposed) refresh(); });

    return () => {
      disposed = true;
      resize.disconnect();
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, [startOnMount, revealTogether]);

  return <Element ref={setSectionRef} {...props}>{children}</Element>;
}
