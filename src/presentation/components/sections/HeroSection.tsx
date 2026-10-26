"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { HeroLogo } from "@/src/presentation/components/sections/HeroLogo";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { DownloadIcon } from "@/src/presentation/components/shared/Icons";

export const resumeUrl = "/curriculo-giselly-pereira.pdf";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <EntranceSection aria-label={t("Início")} className="hero-campaign hero-campaign--brand" id="inicio" startOnMount>
      <div className="hero-campaign__identity">
        <HeroLogo />
        <h1 className="hero-campaign__role" data-entrance="rise" data-entrance-delay=".4">
          <span className="sr-only">Giselly Pereira — </span>
          {t("Desenvolvedora front-end sênior")}
          <em>{t("web & mobile")}</em>
        </h1>
        <div className="hero-campaign__actions" data-entrance="rise" data-entrance-delay=".55">
          <ButtonLink className="hero-campaign__action" href="/projetos" variant="heroPrimary">{t("Ver projetos")}</ButtonLink>
          <ButtonLink className="hero-campaign__action hero-campaign__action--outline" download href={resumeUrl} icon={<DownloadIcon />} variant="heroSecondary">{t("Baixar currículo")}</ButtonLink>
        </div>
      </div>
    </EntranceSection>
  );
}
