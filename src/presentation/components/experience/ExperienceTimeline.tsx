"use client";

import { useState } from "react";
import type { Experience } from "@/src/domain/entities/portfolio";
import { ExperienceChapter } from "@/src/presentation/components/experience/ExperienceChapter";
import styles from "@/src/presentation/components/experience/experience.module.css";

export function ExperienceTimeline({ experiences }: { readonly experiences: readonly Experience[] }) {
  const [openId, setOpenId] = useState<string | null>(() => experiences.find((experience) => experience.current)?.id ?? experiences[0]?.id ?? null);

  return (
    <ol aria-label="Experiências profissionais, da mais recente à primeira" className={styles.timeline}>
      {experiences.map((experience, index) => (
        <ExperienceChapter
          experience={experience}
          index={index}
          key={experience.id}
          onToggle={() => setOpenId((current) => current === experience.id ? null : experience.id)}
          open={openId === experience.id}
        />
      ))}
    </ol>
  );
}
