"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { HeroLogo } from "@/src/presentation/components/sections/HeroLogo";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";
import { ButtonLink } from "@/src/presentation/components/shared/Button";
import { ArrowIcon } from "@/src/presentation/components/shared/Icons";

export const resumeUrl = "/curriculo-giselly-pereira.pdf";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <EntranceSection aria-label={t("Início")} className="hero-campaign hero-campaign--brand" id="inicio" startOnMount>
      <div className="hero-campaign__identity">
        <HeroLogo />
        <h1 className="hero-campaign__role" data-entrance="rise" data-entrance-delay=".4">
          <span className="sr-only">Giselly Pereira — </span>
          {t("Desenvolvedora front-end, web e mobile")}
          <em>{t("Apps nas lojas, portais no ar e interfaces feitas com cuidado.")}</em>
        </h1>
        <p className="hero-campaign__summary" data-entrance="rise" data-entrance-delay=".5">
          {t("Há 5 anos crio interfaces com React e React Native. Publiquei aplicativos na App Store e no Google Play e desenvolvi portais culturais para o Governo do Maranhão.")}
        </p>
        <div className="hero-campaign__actions" data-entrance="rise" data-entrance-delay=".6">
          <ButtonLink className="hero-campaign__action" href="#projetos" variant="heroPrimary">{t("Ver projetos")}</ButtonLink>
          <ButtonLink className="hero-campaign__action hero-campaign__action--secondary" download href={resumeUrl} icon={<ArrowIcon />} variant="heroSecondary">{t("Baixar currículo")}</ButtonLink>
        </div>
      </div>
    </EntranceSection>
  );
}
