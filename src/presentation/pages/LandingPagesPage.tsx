import { landingPageContent, landingPageGroups, landingPageNiches, landingPageProjects } from "@/src/data/landing-pages";
import { portfolioData } from "@/src/data/portfolio";
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
            <p className={styles.eyebrow}>Seu próximo site</p>
            <h2 id="landing-contact-title">Vamos criar <em>o seu?</em></h2>
          </div>
          <div className={styles.contactCopy} data-entrance="rise">
            <p>{landingPageContent.contactDescription}</p>
            <ButtonLink variant="contact" className={styles.whatsapp} href={portfolioData.whatsapp.href} icon={<WhatsAppIcon />} target="_blank" rel="noopener noreferrer" aria-label={`Conversar pelo WhatsApp: ${portfolioData.whatsapp.label}`}>
              {portfolioData.whatsapp.label}
            </ButtonLink>
            <span>Respondendo em até 2 dias úteis.</span>
          </div>
        </div>
      </EntranceSection>
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
    </main>
  );
}
