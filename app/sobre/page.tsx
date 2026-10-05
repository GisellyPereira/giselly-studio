import type { Metadata } from "next";
import { AboutPage } from "@/src/presentation/pages/AboutPage";

export const metadata: Metadata = {
  title: "Sobre mim — Giselly Studio",
  description: "Conheça Giselly Pereira, de São Luís: sua mudança da enfermagem para a programação, seus estudos e sua criatividade entre livros, crochê e pintura.",
};

export default function Page() {
  return <AboutPage />;
}
