import { getLocale, getTranslations } from "next-intl/server";
import { createTranslator } from "@/src/i18n/translate";
import type { Metadata } from "next";
import { ProjectsArchivePage } from "@/src/presentation/pages/ProjectsArchivePage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getTranslations("site");
  const t = createTranslator((key) => messages.raw(key) as string, locale);
  return {
  title: t("Projetos — Giselly Studio"),
  description: t("Arquivo de projetos profissionais, publicados e experimentais de Giselly Pereira."),
  };
}

export default function ProjectsPage() {
  return <ProjectsArchivePage />;
}
