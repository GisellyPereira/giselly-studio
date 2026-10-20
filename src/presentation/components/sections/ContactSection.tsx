"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon, MailIcon } from "@/src/presentation/components/shared/Icons";
import type { SocialLink } from "@/src/domain/entities/portfolio";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { resumeUrl } from "@/src/presentation/components/sections/HeroSection";

interface ContactSectionProps {
  readonly email: string;
  readonly whatsapp: SocialLink;
  readonly socials: readonly SocialLink[];
  readonly location: string;
}

export function ContactSection({ email, whatsapp, socials, location }: ContactSectionProps) {
  const { t } = useI18n();
  const linkedin = socials.find((social) => social.label === "LinkedIn");
  return (
    <EntranceSection className="contact" id="contato">
      <div className="contact__pattern" aria-hidden="true" />
      <div className="contact__inner">
        <p className="eyebrow" data-entrance="rise">{t("Contato")}</p>
        <h2 data-entrance="heading">{t("Vamos trabalhar")}<em>{t("juntos?")}</em>
        </h2>
        <div className="contact__footer">
          <div className="contact__action" data-entrance="rise">
            <ButtonLink variant="contact" href={`mailto:${email}`} aria-label={t("Enviar e-mail para {value0}", {value0: email})} icon={<MailIcon />}>
              {email}
            </ButtonLink>
            <p>{t("Estou aberta a conversar sobre novas oportunidades, projetos e colaborações em front-end e mobile.")}</p>
            <nav className="contact__links" aria-label={t("Outras formas de contato")}>
              {linkedin ? (
                <ButtonLink variant="text" href={linkedin.href} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon diagonal /></ButtonLink>
              ) : null}
              <ButtonLink variant="text" href={whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label={t("Conversar pelo WhatsApp: {value0}", {value0: whatsapp.label})}>WhatsApp <ArrowIcon diagonal /></ButtonLink>
              <ButtonLink variant="text" href={resumeUrl} download>{t("Currículo")} <ArrowIcon diagonal /></ButtonLink>
            </nav>
          </div>
          <div className="contact-details" data-entrance="rise" data-entrance-delay=".12">
            <p>{location}</p>
          </div>
        </div>
      </div>
    </EntranceSection>
  );
}
