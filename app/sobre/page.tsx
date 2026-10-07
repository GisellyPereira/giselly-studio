import { getLocale, getTranslations } from "next-intl/server";
import { createTranslator } from "@/src/i18n/translate";
import type { Metadata } from "next";
import { AboutPage } from "@/src/presentation/pages/AboutPage";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getTranslations("site");
  const t = createTranslator((key) => messages.raw(key) as string, locale);
  return {
  title: t("Sobre mim — Giselly Studio"),
  description: t("Conheça Giselly Pereira, de São Luís: sua mudança da enfermagem para a programação, seus estudos e sua criatividade entre livros, crochê e pintura."),
  };
}

export default function Page() {
  return <AboutPage />;
}
