"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import type { Experience } from "@/src/domain/entities/portfolio";
import { TagList } from "@/src/presentation/components/shared/TagList";
import styles from "./experience.module.css";

interface ExperienceChapterProps {
  readonly experience: Experience;
  readonly animateEntrance?: boolean;
}

export function ExperienceChapter({ experience, animateEntrance = false }: ExperienceChapterProps) {
  const { t } = useI18n();
  const paperRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const paper = paperRef.current;
    // The section already reveals the first sheet with its folder on scroll.
    if (!paper || !animateEntrance) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const compact = window.matchMedia("(max-width: 767px)").matches;
      const content = paper.querySelectorAll("[data-chapter-reveal]");

      gsap.timeline({ defaults: { ease: "power3.out", clearProps: "transform,transformOrigin,opacity" } })
        .from(paper, {
          opacity: 0,
          y: compact ? 16 : 26,
          rotation: -.8,
          scale: .985,
          transformOrigin: "50% 20%",
          duration: .6,
        })
        .from(content, {
          opacity: 0,
          y: compact ? 10 : 14,
          duration: .42,
          stagger: .045,
        }, .12);
    }, paper);

    // A new keyed sheet unmounts the previous one, cancelling rapid-click tweens.
    return () => media.revert();
  }, [animateEntrance]);

  return (
    <article ref={paperRef} aria-labelledby="experience-company" className={styles.paper} id="experience-detail">
      <span aria-hidden="true" className={styles.paperFold} />
      <div className={styles.chapterMeta} data-chapter-reveal>
        <p>{experience.period}</p>
        {experience.current ? <span className={styles.current}>{t("Experiência atual")}</span> : null}
      </div>

      <header className={styles.chapterHeader}>
        <p className={styles.focus} data-chapter-reveal>{experience.focus}</p>
        <h3 id="experience-company" data-chapter-reveal>{experience.companyShort}</h3>
        <p className={styles.role} data-chapter-reveal>{experience.role}</p>
      </header>

      <div className={styles.chapterBody}>
        <div className={styles.description}>
          {experience.company !== experience.companyShort ? <p className={styles.organization} data-chapter-reveal>{experience.company}</p> : null}
          {experience.description.split("\n\n").map((paragraph) => (
            <p className={styles.descriptionText} data-chapter-reveal key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.stack} data-chapter-reveal><TagList tags={experience.tags} /></div>
        </div>
      </div>
    </article>
  );
}
