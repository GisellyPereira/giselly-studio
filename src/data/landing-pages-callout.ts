import type { LandingPagesCalloutContent } from "@/src/domain/entities/landing-pages-callout";
import { landingPageGroups } from "./landing-pages";

export const landingPagesCalloutContent = {
  eyebrow: "Giselly Studio · sites para negócios",
  heading: ["Seu negócio,", "com a sua cara."],
  description:
    "Uma página que apresenta o que você faz e facilita o contato. Comece pelas referências do seu segmento e imagine o seu site aqui.",
  catalogLabel: "Explore as referências",
  catalogHint: "Escolha uma categoria para ver os projetos.",
  handwrittenNotes: {
    ideas: ["boas ideias", "para grandes", "negócios"],
    human: ["negócios", "mais humanos"],
  },
  groups: landingPageGroups,
  catalogHref: "/studio",
  primaryAction: { label: "Ver referências", href: "#referencias" },
  secondaryAction: { label: "Conversar sobre meu site", href: "#contato" },
} as const satisfies LandingPagesCalloutContent;
