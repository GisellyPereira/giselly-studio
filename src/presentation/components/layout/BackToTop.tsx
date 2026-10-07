"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import styles from "./back-to-top.module.css";

const arrowTones = ["rose", "wine", "pink", "olive", "cream", "lime", "ink"] as const;
type ArrowTone = typeof arrowTones[number];

function backgroundTone(element: Element | null): ArrowTone {
  // Each section chooses a palette color, even when its background is similarly light.
  const section = element?.closest("section, footer");
  const sectionTone = section && getComputedStyle(section).getPropertyValue("--back-to-top-tone").trim();
  const assignedTone = arrowTones.find((tone) => tone === sectionTone);
  if (assignedTone) return assignedTone;

  while (element) {
    const channels = getComputedStyle(element).backgroundColor.match(/[\d.]+/g)?.map(Number);
    if (channels && (channels[3] ?? 1) >= .9) {
      const [red, green, blue] = channels.map((channel) => {
        const value = channel / 255;
        return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
      });
      const luminance = .2126 * red + .7152 * green + .0722 * blue;
      return luminance > .6 ? "rose" : luminance > .22 ? "wine" : "pink";
    }
    element = element.parentElement;
  }
  return "rose";
}

export function BackToTop() {
  const { t } = useI18n();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const [appearance, setAppearance] = useState<{ visible: boolean; tone: ArrowTone }>({
    visible: false,
    tone: "rose",
  });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      // Sample the surface underneath the arrow, including cards inside a section.
      const surface = document.elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
        .find((element) => !button.contains(element));
      const visible = window.scrollY > 0;
      const tone = backgroundTone(surface ?? null);
      setAppearance((previous) => previous.visible === visible && previous.tone === tone
        ? previous
        : { visible, tone });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis) {
      lenis.scrollTo(0, { immediate: reducedMotion });
    } else {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
    }
  };

  return (
    <button
      ref={buttonRef}
      className={styles.arrow}
      data-tone={appearance.tone}
      data-visible={appearance.visible}
      aria-label={t("Voltar ao topo")}
      aria-hidden={!appearance.visible}
      tabIndex={appearance.visible ? 0 : -1}
      onClick={scrollToTop}
      type="button"
    >
      <ArrowIcon />
    </button>
  );
}
