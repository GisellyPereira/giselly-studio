import type { LandingPageGroup, LandingPageNicheOption } from "@/src/domain/entities/landing-page";
import type { PublicProject, LandingPageProject } from "@/src/domain/entities/public-project";
import { projectGalleryContent } from "./public-projects";
import { portfolioData } from "./portfolio";
import type { Project } from "@/src/domain/entities/portfolio";

const allProjects: readonly PublicProject[] = projectGalleryContent.projects;

// Reutiliza as fichas dos trabalhos culturais já apresentados na home.
const culturalProjects: readonly LandingPageProject[] = (portfolioData.projects as readonly Project[])
  .filter((project) => project.title === "Teatro Arthur Azevedo" || project.title === "Museu do Palácio dos Leões")
  .map((project) => ({
    id: project.title === "Teatro Arthur Azevedo" ? "teatro-arthur-azevedo" : "museu-do-palacio-dos-leoes",
    title: project.title,
    category: "Web",
    description: project.description,
    technology: project.tags.join(" · "),
    imageSrc: project.imageSrc,
    deployUrl: project.deployUrl,
    landingPage: { niche: "cultura", format: "Site institucional", context: "Projeto profissional" },
  }));

const projectOrder = [
  "teatro-arthur-azevedo", "museu-do-palacio-dos-leoes", "hubnews-web", "RamenGo",
  "dog-room", "soda-animation", "travel-agency", "startup-tech", "landingPage-vue",
  "SOLeris", "project-lo", "E-commerce",
] as const;

const availableProjects: readonly LandingPageProject[] = [
  ...culturalProjects,
  ...allProjects.filter((project): project is LandingPageProject => Boolean(project.landingPage)),
];

export const landingPageProjects = projectOrder.map((id) => {
  const project = availableProjects.find((entry) => entry.id === id);
  if (!project) throw new Error(`Projeto de landing page ausente: ${id}`);
  return project;
});

const niches: readonly LandingPageNicheOption[] = [
  { id: "cultura", label: "Cultura" },
  { id: "midia", label: "Notícias & conteúdo" },
  { id: "gastronomia", label: "Gastronomia & bebidas" },
  { id: "pets", label: "Pets" },
  { id: "saude", label: "Saúde & bem-estar" },
  { id: "turismo", label: "Turismo" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "energia", label: "Energia solar" },
  { id: "financas", label: "Finanças" },
  { id: "comercio", label: "Comércio" },
];

// Um projeto continua no acervo completo; aqui ele ganha uma leitura por negócio.
// Só mostramos nichos que já têm referências cadastradas.
export const landingPageNiches = niches.filter(
  (niche) => landingPageProjects.some((project) => project.landingPage.niche === niche.id),
);

export const landingPageGroups = [
  { id: "cultura-conteudo", label: "Cultura & conteúdo", niches: ["cultura", "midia"] },
  { id: "negocios-servicos", label: "Negócios & serviços", niches: ["pets", "saude", "turismo", "tecnologia", "energia", "financas"] },
  { id: "produtos-lojas", label: "Produtos & lojas", niches: ["gastronomia", "comercio"] },
] as const satisfies readonly LandingPageGroup[];

export const landingPageContent = {
  catalogHeading: ["Referências", "por nicho."],
  processHeading: ["Como", "funciona."],
  processSteps: [
    { number: "01", name: "Conversa", text: "Você me conta sobre o seu negócio, o público e o que espera do site." },
    { number: "02", name: "Proposta", text: "Organizo o conteúdo e defino com você o visual, as seções e o tom." },
    { number: "03", name: "Criação", text: "Desenvolvo o site responsivo, leve e com a cara do seu negócio." },
    { number: "04", name: "No ar", text: "Publico, ajusto os detalhes finais e te mostro como acompanhar." },
  ],
  catalogNote: "cada projeto, um jeito.",
  contactDescription: "Me conta um pouco sobre o seu negócio e o que você imagina para ele. Vamos pensar em um site que combine com a sua ideia?",
} as const;
