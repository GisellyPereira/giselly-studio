"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import type { AboutContent, AboutPhoto } from "@/src/domain/entities/about";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import styles from "./about-section.module.css";

function Polaroid({ photo, className, priority = false }: {
  readonly photo: AboutPhoto;
  readonly className: string;
  readonly priority?: boolean;
}) {
  return (
    <figure className={`${styles.polaroid} ${className}`}>
      <span aria-hidden="true" className={styles.tape} />
      <div className={styles.photoWindow}>
        <Image
          alt={photo.alt}
          className={photo.sideways ? styles.sidewaysPhoto : styles.photo}
          height={photo.height}
          priority={priority}
          sizes="(max-width: 700px) 85vw, (max-width: 1000px) 50vw, 440px"
          src={photo.src}
          width={photo.width}
        />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

function Flower({ className }: { readonly className: string }) {
  return <Image aria-hidden="true" alt="" className={className} height={96} src="/images/brand/giselly-studio-icon.svg" width={96} />;
}

function AboutDecoration() {
  return (
    <div aria-hidden="true" className={styles.backgroundDecor}>
      {Array.from({ length: 10 }, (_, index) => (
        <span className={styles.backgroundFlower} key={index} />
      ))}
    </div>
  );
}

function HobbySketch({ index }: { readonly index: number }) {
  return (
    <svg aria-hidden="true" className={styles.hobbySketch} fill="none" viewBox="0 0 96 96">
      <g transform={index === 0 ? "translate(0 13)" : index === 1 ? "translate(0 3)" : undefined}>
      {index === 0 ? (
        <>
          <path d="M17 24c13-5 23-3 31 3 8-6 18-8 31-3v48c-13-5-23-3-31 3-8-6-18-8-31-3V24Z" />
          <path d="M48 27v48M25 36c6-2 11-1 16 2m-16 9c6-2 11-1 16 2m-16 9c6-2 11-1 16 2m14-23c5-3 10-4 16-2m-16 13c5-3 10-4 16-2m-16 13c5-3 10-4 16-2" />
        </>
      ) : index === 1 ? (
        <>
          <circle cx="43" cy="51" r="26" />
          <path d="M21 38c20 0 35 14 38 33M18 49c16 1 30 11 33 27M27 29c16 4 31 19 37 33M39 26c-13 13-18 28-16 41m28-39C37 43 32 61 35 76m33-22c16 2 11 18 4 22s-7 10 1 9M65 38l15-23c3-4 7 0 5 3l-4 5" />
        </>
      ) : (
        <>
          <path d="M39 20c-23 0-31 18-26 35 4 15 21 21 31 13 5-4 2-8 5-11 4-4 10 1 17-5 12-11-1-30-27-32Z" />
          <circle cx="25" cy="40" r="4" /><circle cx="38" cy="30" r="4" /><circle cx="53" cy="36" r="4" />
          <path d="m53 76 24-31 6 5-24 31-6-5Zm24-31c-4-8 6-14 11-19 0 8 4 18-5 24M53 76l-6 12 12-7" />
        </>
      )}
      </g>
    </svg>
  );
}

export function AboutSection({ content }: { readonly content: AboutContent }) {
  const { t } = useI18n();
  return (
    <section aria-labelledby="about-title" className={styles.section} id="inicio">
      <AboutDecoration />
      <EntranceSection as="div" className={`${styles.inner} ${styles.heroGrid}`} startOnMount>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow} data-entrance="rise">{t("Sobre mim")}</p>
          <h1 id="about-title" data-entrance="heading" data-entrance-children>
            <span>{content.heading[0]}</span>
            <em>{content.heading[1]}</em>
          </h1>
          <div className={styles.copy} data-entrance="rise" data-entrance-delay=".1">
            {content.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className={styles.details} data-entrance="rise">
            {content.details.map((detail) => <span key={detail}>{detail}</span>)}
          </div>
          <div className={styles.actions} data-entrance="rise" data-entrance-delay=".2">
            <ButtonLink className={styles.secondaryButton} href="/#projetos" variant="heroSecondary">{t("Ver meus projetos")}</ButtonLink>
          </div>
        </div>
        <div className={styles.portraitComposition} data-entrance="paper" data-entrance-delay=".15">
          <span className={styles.photoNote}>{t("prazer, giselly :)")}</span>
          <Polaroid className={styles.portrait} photo={content.portrait} priority />
          <Flower className={styles.portraitFlower} />
          <svg aria-hidden="true" className={styles.doodle} fill="none" viewBox="0 0 110 95">
            <path d="M8 10c62-12 91 8 66 34-18 18-42 7-23-8 18-14 39 0 42 46m-12-8 12 10 8-16" />
          </svg>
        </div>
      </EntranceSection>

      <EntranceSection as="div" className={`${styles.inner} ${styles.story} ${styles.storySpread}`} id="minha-historia">
        <header className={styles.storyHeader}>
          <p className={styles.eyebrow} data-entrance="rise">{t("Minha história")}</p>
          <h2 id="story-title" data-entrance="heading" data-entrance-children>
            <span>{content.story.heading[0]}</span>{" "}<em>{content.story.heading[1]}</em>
          </h2>
        </header>
        <div className={styles.storyAlbum}>
          {content.story.photos.map((photo) => (
            <div className={styles.albumMemory} data-entrance="paper" key={photo.src}>
              <Polaroid className={styles.albumPhoto} photo={photo} />
            </div>
          ))}
        </div>
        <div className={`${styles.copy} ${styles.storyCopy}`} data-entrance="rise">
          {content.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </EntranceSection>

      <EntranceSection as="div" className={`${styles.inner} ${styles.interests} ${styles.interestsGrid}`} id="fora-das-telas">
        <div className={styles.interestsCopy}>
          <p className={styles.eyebrow} data-entrance="rise">{t("No meu tempo")}</p>
          <h2 id="interests-title" data-entrance="heading" data-entrance-children>
            <span>{content.interests.heading[0]}</span><em>{content.interests.heading[1]}</em>
          </h2>
          <p className={styles.copy} data-entrance="rise">{content.interests.introduction}</p>
          <ul className={styles.hobbies} data-entrance="rise" data-entrance-children>
            {content.interests.items.map((item, index) => (
              <li key={item.name}>
                <HobbySketch index={index} />
                <h3>{item.name}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.paintingComposition} data-entrance="paper">
          <Polaroid className={styles.painting} photo={content.interests.photo} />
        </div>
      </EntranceSection>
    </section>
  );
}
