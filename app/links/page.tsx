import type { Metadata } from "next";
import { LinksPage } from "@/src/presentation/pages/LinksPage";

export const metadata: Metadata = {
  title: "Giselly Pereira — Links",
  description: "Portfólio, sites e landing pages, LinkedIn, GitHub e currículo de Giselly Pereira, desenvolvedora front-end sênior.",
  // Página só para o link da bio: fica fora do Google e não aparece no menu do site.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LinksPage />;
}
