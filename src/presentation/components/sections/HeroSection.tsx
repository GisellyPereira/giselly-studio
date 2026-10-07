"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { HeroLogo } from "@/src/presentation/components/sections/HeroLogo";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <EntranceSection aria-label={t("Início")} className="hero-campaign hero-campaign--brand" id="inicio" startOnMount>
      <div className="hero-campaign__identity">
        <HeroLogo />
        <h1 className="hero-campaign__role" data-entrance="rise" data-entrance-delay=".4">{t("Desenvolvedora web e mobile")}<em>{t("Um pouco do que eu gosto de fazer")}</em>
        </h1>
      </div>
    </EntranceSection>
  );
}
