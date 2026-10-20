import { getLocale, getTranslations } from "next-intl/server";
import { createTranslator } from "@/src/i18n/translate";
import type { Metadata } from "next";
import { landingPageGroups, landingPageNiches } from "@/src/data/landing-pages";
import { StudioPage } from "@/src/presentation/pages/StudioPage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getTranslations("site");
  const t = createTranslator((key) => messages.raw(key) as string, locale);
  return {
    title: t("Giselly Studio — Sites e landing pages para negócios"),
    description: t("Sites e landing pages com a cara do seu negócio. Conheça referências por área de atuação e converse com Giselly Pereira pelo WhatsApp."),
  };
}

interface StudioProps {
  readonly searchParams: Promise<{ readonly nicho?: string | string[]; readonly categoria?: string | string[] }>;
}

export default async function Studio({ searchParams }: StudioProps) {
  const { nicho, categoria } = await searchParams;
  const selectedGroup = landingPageGroups.find((group) => group.id === categoria);
  const initialNiche = selectedGroup?.niches[0] ?? landingPageNiches.find((niche) => niche.id === nicho)?.id ?? "todos";

  return <StudioPage initialNiche={initialNiche} />;
}
