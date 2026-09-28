import type { Experience } from "@/src/domain/entities/portfolio";
import { SparkIcon } from "@/src/presentation/components/shared/Icons";
import { TagList } from "@/src/presentation/components/shared/TagList";
import styles from "@/src/presentation/components/experience/experience.module.css";

interface ExperienceChapterProps {
  readonly experience: Experience;
  readonly index: number;
  readonly open: boolean;
  readonly onToggle: () => void;
}

export function ExperienceChapter({ experience, index, open, onToggle }: ExperienceChapterProps) {
  const triggerId = `experience-${experience.id}-trigger`;
  const panelId = `experience-${experience.id}-panel`;

  return (
    <li className={styles.chapter} data-open={open}>
      <span aria-hidden="true" className={styles.marker}>{String(index + 1).padStart(2, "0")}</span>
      <article className={styles.card}>
        <h3 className={styles.chapterHeading}>
          <button
            aria-controls={panelId}
            aria-expanded={open}
            aria-label={`${open ? "Recolher" : "Expandir"} experiência na ${experience.companyShort}`}
            className={styles.trigger}
            id={triggerId}
            onClick={onToggle}
            type="button"
          >
            <span className={styles.companyGroup}>
              <span className={styles.meta}>
                <span className={styles.focus}>{experience.focus}</span>
                {experience.current ? <span className={styles.current}><span aria-hidden="true" />Atualmente</span> : null}
              </span>
              <span className={styles.company}>{experience.companyShort}</span>
              <span className={styles.role}>{experience.role}</span>
            </span>
            <span className={styles.period}>{experience.period}</span>
            <span aria-hidden="true" className={styles.toggleIcon}><span /><span /></span>
          </button>
        </h3>

        <div aria-hidden={!open} aria-labelledby={triggerId} className={styles.reveal} id={panelId} inert={!open} role="region">
          <div className={styles.revealInner}>
            <div className={styles.body}>
              <div className={styles.note}>
                <SparkIcon className={styles.noteSpark} />
                <p>{experience.highlight.map((line) => <span key={line}>{line}</span>)}</p>
              </div>
              <div className={styles.description}>
                {experience.company !== experience.companyShort ? <p className={styles.organization}>{experience.company}</p> : null}
                <p className={styles.descriptionText}>{experience.description}</p>
                <div className={styles.stack}><TagList tags={experience.tags} /></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
