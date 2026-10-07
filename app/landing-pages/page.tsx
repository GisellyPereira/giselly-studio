import { getLocale, getTranslations } from "next-intl/server";
import { createTranslator } from "@/src/i18n/translate";
import type { Metadata } from "next";
import { landingPageGroups, landingPageNiches } from "@/src/data/landing-pages";
import { LandingPagesPage } from "@/src/presentation/pages/LandingPagesPage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getTranslations("site");
  const t = createTranslator((key) => messages.raw(key) as string, locale);
  return {
  title: t("Landing pages & sites por nicho — Giselly Studio"),
  description: t("Referências de landing pages e sites por área de atuação. Conheça projetos de Giselly Pereira e converse sobre o site do seu negócio."),
  };
}

interface LandingPagesProps {
  readonly searchParams: Promise<{ readonly nicho?: string | string[]; readonly categoria?: string | string[] }>;
}

export default async function LandingPages({ searchParams }: LandingPagesProps) {
  const { nicho, categoria } = await searchParams;
  const selectedGroup = landingPageGroups.find((group) => group.id === categoria);
  const initialNiche = selectedGroup?.niches[0] ?? landingPageNiches.find((niche) => niche.id === nicho)?.id ?? "todos";

  return <LandingPagesPage initialNiche={initialNiche} />;
}
