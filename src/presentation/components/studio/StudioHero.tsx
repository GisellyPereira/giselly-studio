"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import Image from "next/image";
import type { SocialLink } from "@/src/domain/entities/portfolio";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { WhatsAppIcon } from "@/src/presentation/components/shared/Icons";
import { LoadingImage } from "@/src/presentation/components/shared/LoadingImage";
import styles from "./studio-hero.module.css";

// Sites reais do catálogo, mostrados como janelas soltas sobre a mesa.
const showcase = [
  { src: "/images/featured-projects/teatro-arthur-azevedo-hero-80283d7c.png", alt: "Site do Teatro Arthur Azevedo", label: "Cultura", position: "center top" },
  { src: "/images/project-gallery/dog-room.jpg", alt: "Landing page Dog Room, de banho e tosa", label: "Pets", position: "center" },
  { src: "/images/project-gallery/nutriviva.webp", alt: "Site da Nutriviva, de nutrição", label: "Saúde", position: "center top" },
] as const;

export function StudioHero({ whatsapp }: { readonly whatsapp: SocialLink }) {
  const { t } = useI18n();
  return (
    <EntranceSection aria-labelledby="studio-hero-title" className={styles.hero} id="inicio" startOnMount>
      <div aria-hidden="true" className={styles.stripes} />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow} data-entrance="rise">
            <Image alt="" aria-hidden="true" height={20} src="/images/brand/giselly-studio-icon.svg" width={20} />
            Giselly Studio
          </p>
          <h1 className={styles.title} data-entrance="heading" data-entrance-children id="studio-hero-title">
            <span>{t("Sites com a")}</span>
            <em>{t("cara do seu negócio.")}</em>
          </h1>
          <p className={styles.lede} data-entrance="rise">
            {t("Landing pages e sites institucionais feitos sob medida, do visual ao código, para apresentar o que você faz e trazer clientes até você.")}
          </p>
          <div className={styles.actions} data-entrance="rise">
            <ButtonLink
              aria-label={t("Conversar pelo WhatsApp: {value0}", {value0: whatsapp.label})}
              className={styles.primary}
              href={whatsapp.href}
              icon={<WhatsAppIcon />}
              rel="noopener noreferrer"
              target="_blank"
              variant="heroPrimary"
            >{t("Pedir meu site")}</ButtonLink>
            <ButtonLink className={styles.secondary} href="#referencias" variant="heroSecondary">{t("Ver referências")}</ButtonLink>
          </div>
        </div>

        <div aria-label={t("Alguns sites que eu fiz")} className={styles.showcase} data-entrance="paper" data-entrance-delay=".2" role="group">
          {showcase.map((site, index) => (
            <figure className={styles.window} data-index={index} key={site.src}>
              <div aria-hidden="true" className={styles.chrome}><i /><i /><i /></div>
              <div className={styles.shot}>
                <LoadingImage alt={t(site.alt)} fill sizes="(max-width: 767px) 70vw, 28vw" src={site.src} style={{ objectFit: "cover", objectPosition: site.position }} />
              </div>
              <figcaption>{t(site.label)}</figcaption>
            </figure>
          ))}
          <p aria-hidden="true" className={styles.note}>{t("feito sob medida")}</p>
        </div>
      </div>
    </EntranceSection>
  );
}
