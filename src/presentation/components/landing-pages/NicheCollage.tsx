import Image from "next/image";
import type { LandingPageGroup } from "@/src/domain/entities/landing-page";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { TagList } from "@/src/presentation/components/shared/TagList";
import { CurvedArrowDoodle } from "./CollageDoodles";
import styles from "./niche-collage.module.css";

interface NicheCollageProps {
  readonly label: string;
  readonly hint: string;
  readonly catalogHref: string;
  readonly groups: readonly LandingPageGroup[];
}

export function NicheCollage({ label, hint, catalogHref, groups }: NicheCollageProps) {
  return (
    <nav className={styles.catalog} aria-label={label} data-entrance="rise" data-entrance-delay=".1">
      <div className={styles.label}><TagList tags={[label]} /></div>
      <div className={styles.board}>
        <ul className={styles.papers}>
          {groups.map((group) => (
            <li key={group.id} data-group={group.id}>
              <ButtonLink
                variant="caseAction"
                className={styles.paper}
                aria-label={group.label}
                href={`${catalogHref}?categoria=${group.id}#referencias`}
              >
                <span className={styles.paperContent}>
                  <span className={styles.name}>{group.label}</span>
                </span>
              </ButtonLink>
            </li>
          ))}
        </ul>
        <Image className={styles.flower} src="/images/brand/giselly-studio-icon.svg" width={80} height={80} alt="" aria-hidden="true" />
      </div>
      <p className={styles.hint}><CurvedArrowDoodle className={styles.hintArrow} /><span>{hint}</span></p>
    </nav>
  );
}
