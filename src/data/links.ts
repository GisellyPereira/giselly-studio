import type { BioLink } from "@/src/domain/entities/bio-link";
import { portfolioData } from "@/src/data/portfolio";

const linkedin = portfolioData.socials.find((social) => social.label === "LinkedIn")?.href ?? "";
const github = portfolioData.socials.find((social) => social.label === "GitHub")?.href ?? "";

/** Links da página /links, na ordem em que aparecem. Para acrescentar um, inclua um item aqui. */
export const bioLinks: readonly BioLink[] = [
  { id: "portfolio", title: "Meu portfólio", description: "Projetos, experiências e currículo", href: "/" },
  { id: "studio", title: "Sites e landing pages", description: "Para o seu negócio", href: "/studio", featured: true },
  { id: "linkedin", title: "LinkedIn", description: "Minha trajetória e os bastidores", href: linkedin, external: true },
  { id: "github", title: "GitHub", description: "O código dos meus projetos", href: github, external: true },
  { id: "curriculo", title: "Baixar currículo", description: "PDF atualizado", href: "/curriculo-giselly-pereira.pdf", download: true },
  { id: "email", title: "E-mail", description: portfolioData.email, href: `mailto:${portfolioData.email}` },
];
