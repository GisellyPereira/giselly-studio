import type { Experience, ExperienceContent } from "@/src/domain/entities/portfolio";
import { ExperienceTimeline } from "@/src/presentation/components/experience/ExperienceTimeline";
import { SparkIcon } from "@/src/presentation/components/shared/Icons";
import styles from "@/src/presentation/components/experience/experience.module.css";

interface ExperienceSectionProps {
  readonly experiences: readonly Experience[];
  readonly content: ExperienceContent;
}

export function ExperienceSection({ experiences, content }: ExperienceSectionProps) {
  return (
    <section aria-labelledby="experience-title" className={styles.section} id="experiencia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}><span aria-hidden="true" />{content.eyebrow}</p>
            <h2 id="experience-title">{content.heading.map((line) => <span key={line}>{line}</span>)}</h2>
          </div>
          <div className={styles.intro}>
            <SparkIcon className={styles.headerSpark} />
            <p>{content.description}</p>
            <span className={styles.handwritten}>código, pessoas & novos caminhos</span>
          </div>
        </header>

        <div className={styles.timelineTopline}>
          <span>Experiências</span>
          <span>Da mais recente ao começo <span aria-hidden="true">↘</span></span>
        </div>
        <ExperienceTimeline experiences={experiences} />

        <div className={styles.closing}>
          <SparkIcon className={styles.closingSpark} />
          <p>{content.closing}</p>
          <span className={styles.closingLine} aria-hidden="true" />
          <span aria-hidden="true" className={styles.signature}>Gi.</span>
        </div>
      </div>
    </section>
  );
}
