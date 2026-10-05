import type { Metadata } from "next";
import { landingPageGroups, landingPageNiches } from "@/src/data/landing-pages";
import { LandingPagesPage } from "@/src/presentation/pages/LandingPagesPage";

export const metadata: Metadata = {
  title: "Landing pages & sites por nicho — Giselly Studio",
  description: "Referências de landing pages e sites por área de atuação. Conheça projetos de Giselly Pereira e converse sobre o site do seu negócio.",
};

interface LandingPagesProps {
  readonly searchParams: Promise<{ readonly nicho?: string | string[]; readonly categoria?: string | string[] }>;
}

export default async function LandingPages({ searchParams }: LandingPagesProps) {
  const { nicho, categoria } = await searchParams;
  const selectedGroup = landingPageGroups.find((group) => group.id === categoria);
  const initialNiche = selectedGroup?.niches[0] ?? landingPageNiches.find((niche) => niche.id === nicho)?.id ?? "todos";

  return <LandingPagesPage initialNiche={initialNiche} />;
}
