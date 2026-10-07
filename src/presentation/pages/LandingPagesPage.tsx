"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { landingPageContent as originalLandingPageContent, landingPageGroups as originalLandingPageGroups, landingPageNiches as originalLandingPageNiches, landingPageProjects as originalLandingPageProjects } from "@/src/data/landing-pages";
import { portfolioData as originalPortfolioData } from "@/src/data/portfolio";
import type { LandingPageNiche } from "@/src/domain/entities/landing-page";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { LandingPageCatalog } from "@/src/presentation/components/landing-pages/LandingPageCatalog";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { Header } from "@/src/presentation/components/layout/Header";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { WhatsAppIcon } from "@/src/presentation/components/shared/Icons";
import styles from "./landing-pages.module.css";

interface LandingPagesPageProps {
  readonly initialNiche: LandingPageNiche | "todos";
}

export function LandingPagesPage({ initialNiche }: LandingPagesPageProps) {
  const { t, localize } = useI18n();
  const landingPageContent = localize(originalLandingPageContent);
  const landingPageGroups = localize(originalLandingPageGroups);
  const landingPageNiches = localize(originalLandingPageNiches);
  const landingPageProjects = localize(originalLandingPageProjects);
  const portfolioData = localize(originalPortfolioData);
  return (
    <main className={styles.page} id="inicio">
      <Header email={portfolioData.email} accent />
      <LandingPageCatalog
        initialNiche={initialNiche}
        projects={landingPageProjects}
        niches={landingPageNiches}
        groups={landingPageGroups}
        heading={landingPageContent.catalogHeading}
        note={landingPageContent.catalogNote}
      />
      <EntranceSection className={styles.contact} id="contato" aria-labelledby="landing-contact-title">
        <div className={styles.contactInner}>
          <div data-entrance="heading">
            <p className={styles.eyebrow}>{t("Seu próximo site")}</p>
            <h2 id="landing-contact-title">{t("Vamos criar")} <em>{t("o seu?")}</em></h2>
          </div>
          <div className={styles.contactCopy} data-entrance="rise">
            <p>{landingPageContent.contactDescription}</p>
            <ButtonLink variant="contact" className={styles.whatsapp} href={portfolioData.whatsapp.href} icon={<WhatsAppIcon />} target="_blank" rel="noopener noreferrer" aria-label={t("Conversar pelo WhatsApp: {value0}", {value0: portfolioData.whatsapp.label})}>
              {portfolioData.whatsapp.label}
            </ButtonLink>
            <span>{t("Respondendo em até 2 dias úteis.")}</span>
          </div>
        </div>
      </EntranceSection>
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
    </main>
  );
}
