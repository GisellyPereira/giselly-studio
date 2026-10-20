"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { landingPageContent as originalLandingPageContent, landingPageGroups as originalLandingPageGroups, landingPageNiches as originalLandingPageNiches, landingPageProjects as originalLandingPageProjects } from "@/src/data/landing-pages";
import { landingPagesCalloutContent as originalCalloutContent } from "@/src/data/landing-pages-callout";
import { portfolioData as originalPortfolioData } from "@/src/data/portfolio";
import type { LandingPageNiche } from "@/src/domain/entities/landing-page";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { LandingPageCatalog } from "@/src/presentation/components/landing-pages/LandingPageCatalog";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { Header } from "@/src/presentation/components/layout/Header";
import { LandingPagesCallout } from "@/src/presentation/components/sections/LandingPagesCallout";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { WhatsAppIcon } from "@/src/presentation/components/shared/Icons";
import styles from "./studio-page.module.css";

interface StudioPageProps {
  readonly initialNiche: LandingPageNiche | "todos";
}

export function StudioPage({ initialNiche }: StudioPageProps) {
  const { t, localize, locale } = useI18n();
  const landingPageContent = localize(originalLandingPageContent);
  const landingPageGroups = localize(originalLandingPageGroups);
  const landingPageNiches = localize(originalLandingPageNiches);
  const landingPageProjects = localize(originalLandingPageProjects);
  const portfolioData = localize(originalPortfolioData);
  const translatedCallout = localize(originalCalloutContent);
  const calloutContent = locale === "en"
    ? { ...translatedCallout, handwrittenNotes: { ...translatedCallout.handwrittenNotes, human: [...translatedCallout.handwrittenNotes.human].reverse() } }
    : translatedCallout;

  return (
    <main className={styles.page}>
      <Header email={portfolioData.email} accent />
      <div className={styles.opening}>
        <LandingPagesCallout content={calloutContent} headingLevel="h1" />
      </div>
      <LandingPageCatalog
        initialNiche={initialNiche}
        projects={landingPageProjects}
        niches={landingPageNiches}
        groups={landingPageGroups}
        heading={landingPageContent.catalogHeading}
        headingLevel="h2"
        note={landingPageContent.catalogNote}
      />
      <EntranceSection className={styles.process} id="como-funciona" aria-labelledby="studio-process-title">
        <div className={styles.processInner}>
          <h2 id="studio-process-title" data-entrance="heading" data-entrance-children>
            <span>{landingPageContent.processHeading[0]}</span> <em>{landingPageContent.processHeading[1]}</em>
          </h2>
          <ol className={styles.processSteps} data-entrance="rise" data-entrance-children>
            {landingPageContent.processSteps.map((step) => (
              <li key={step.number}>
                <span className={styles.processNumber} aria-hidden="true">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </EntranceSection>
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
          </div>
        </div>
      </EntranceSection>
      <Footer role={t("Giselly Studio · sites e landing pages para negócios")} socials={portfolioData.socials} />
    </main>
  );
}
