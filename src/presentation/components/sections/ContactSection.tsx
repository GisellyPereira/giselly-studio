"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { WhatsAppIcon } from "@/src/presentation/components/shared/Icons";
import type { SocialLink } from "@/src/domain/entities/portfolio";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

interface ContactSectionProps {
  readonly whatsapp: SocialLink;
  readonly location: string;
  readonly description?: string;
}

export function ContactSection({
  whatsapp,
  location,
  description = "Estou disponível para conversar sobre produtos, interfaces e colaborações.",
}: ContactSectionProps) {
  const { t } = useI18n();
  return (
    <EntranceSection className="contact" id="contato">
      <div className="contact__pattern" aria-hidden="true" />
      <div className="contact__inner">
        <p className="eyebrow" data-entrance="rise">{t("Próximo projeto")}</p>
        <h2 data-entrance="heading">{t("Tem uma boa ideia?")}<em>{t("Vamos colocar no mundo.")}</em>
        </h2>
        <div className="contact__footer">
          <div className="contact__action" data-entrance="rise">
            <ButtonLink
              variant="contact"
              href={whatsapp.href}
              aria-label={t("Conversar pelo WhatsApp: {value0}", {value0: whatsapp.label})}
              icon={<WhatsAppIcon />}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsapp.label}
            </ButtonLink>
            <p>{t(description)}</p>
          </div>
          <div className="contact-details" data-entrance="rise" data-entrance-delay=".12">
            <p>{location}</p>
            <p>{t("Respondendo em até 2 dias úteis.")}</p>
          </div>
        </div>
      </div>
    </EntranceSection>
  );
}
