import Image from "next/image";
import type { Experience, ExperienceContent } from "@/src/domain/entities/portfolio";
import { ExperienceCollection } from "@/src/presentation/components/experience/ExperienceCollection";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import styles from "@/src/presentation/components/experience/experience.module.css";

interface ExperienceSectionProps {
  readonly experiences: readonly Experience[];
  readonly content: ExperienceContent;
}

export function ExperienceSection({ experiences, content }: ExperienceSectionProps) {
  return (
    <EntranceSection aria-labelledby="experience-title" className={styles.section} id="experiencia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="experience-title" data-entrance="heading" data-entrance-children>
            <span className={styles.headingMain}>{content.heading[0]}</span>
            <em className={styles.headingScript}>{content.heading.slice(1).join(" ")}</em>
          </h2>
          <Image alt="" aria-hidden="true" className={styles.headerFlower} data-entrance="bloom" height={256} src="/images/brand/giselly-studio-icon.svg" width={256} />
        </header>

        <ExperienceCollection experiences={experiences} />
        <p className={styles.closing} data-entrance="rise">{content.closing}</p>
      </div>
    </EntranceSection>
  );
}
