import type { LandingPagesCalloutContent } from "@/src/domain/entities/landing-pages-callout";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { NicheCollage } from "@/src/presentation/components/landing-pages/NicheCollage";
import { HandwrittenNote } from "@/src/presentation/components/landing-pages/HandwrittenNote";
import { SprigDoodle } from "@/src/presentation/components/landing-pages/CollageDoodles";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";
import { TornPaperCorners } from "@/src/presentation/components/shared/TornPaperCorners";
import styles from "./landing-pages-callout.module.css";

interface LandingPagesCalloutProps {
  readonly content: LandingPagesCalloutContent;
}

export function LandingPagesCallout({ content }: LandingPagesCalloutProps) {
  return (
    <EntranceSection
      className={styles.section}
      id="landing-pages"
      aria-labelledby="landing-pages-callout-heading"
    >
      <TornPaperCorners />
      <SprigDoodle className={styles.cornerSprig} />
      <div className={styles.inner}>
        <HandwrittenNote lines={content.handwrittenNotes.human} className={styles.humanNote} />
        <div className={styles.intro}>
          <p className={styles.eyebrow} data-entrance="rise">{content.eyebrow}</p>
          <h2 id="landing-pages-callout-heading" className={styles.heading} data-entrance="heading" data-entrance-children>
            <span>{content.heading[0]}</span>
            <em>{content.heading[1]}</em>
          </h2>
          <div className={styles.copy} data-entrance="rise">
            <p>{content.description}</p>
            <div className={styles.actions}>
              <ButtonLink variant="heroPrimary" className={styles.primary} href={content.primaryAction.href} icon={<ArrowIcon />}>
                {content.primaryAction.label}
              </ButtonLink>
              <ButtonLink variant="heroSecondary" className={styles.secondary} href={content.secondaryAction.href}>
                {content.secondaryAction.label}
              </ButtonLink>
            </div>
          </div>
          <HandwrittenNote lines={content.handwrittenNotes.ideas} className={styles.ideasNote} />
        </div>
        <NicheCollage
          label={content.catalogLabel}
          hint={content.catalogHint}
          catalogHref={content.primaryAction.href}
          groups={content.groups}
        />
      </div>
    </EntranceSection>
  );
}
