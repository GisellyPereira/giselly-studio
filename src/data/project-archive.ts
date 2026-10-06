import type {
  ArchiveFilter,
  ArchiveFilterOption,
  ArchiveProject,
} from "@/src/domain/entities/project-archive";
import type { Project } from "@/src/domain/entities/portfolio";
import type { PublicProject } from "@/src/domain/entities/public-project";
import { portfolioData } from "./portfolio";
import { projectGalleryContent } from "./public-projects";

const publicProjects: readonly PublicProject[] = projectGalleryContent.projects;

export const archiveFilters = [
  { id: "all", label: "Todos" },
  { id: "Web", label: "Web" },
  { id: "Mobile", label: "Mobile" },
] as const satisfies readonly ArchiveFilterOption[];

function normalizeSearch(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

function projectId(title: string): string {
  return normalizeSearch(title).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function mergeTechnology(featured: Project, publicProject?: PublicProject): string {
  const technologies = [...featured.tags, ...(publicProject?.technology.split(" · ") ?? [])];
  const seen = new Set<string>();

  return technologies.filter((technology) => {
    const normalized = normalizeSearch(technology.trim());
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  }).join(" · ");
}

function toArchiveProject(project: PublicProject): ArchiveProject {
  return {
    ...project,
    imageAlt: project.imageSrc ? `Prévia do projeto ${project.title}` : "",
  };
}

function mergeFeaturedProject(project: Project, publicProject?: PublicProject): ArchiveProject {
  const deployUrl = project.deployUrl ?? publicProject?.deployUrl;
  const repositoryUrl = project.repositoryUrl ?? publicProject?.repositoryUrl;

  return {
    ...(publicProject ? toArchiveProject(publicProject) : undefined),
    id: publicProject?.id ?? projectId(project.title),
    title: project.title,
    category: project.category === "Mobile" ? "Mobile" : "Web",
    description: project.description,
    technology: mergeTechnology(project, publicProject),
    imageSrc: project.imageSrc,
    imageAlt: project.imageAlt,
    imagePosition: project.imagePosition,
    imageFit: project.imageFit ?? publicProject?.imageFit,
    deployUrl,
    storeLinks: project.storeLinks ?? publicProject?.storeLinks,
    repositoryUrl,
    featured: { ...project, deployUrl, repositoryUrl },
  };
}

const mergedPublicIds = new Set<string>();
const featuredProjects = (portfolioData.projects as readonly Project[]).map((project) => {
  const id = projectId(project.title);
  const publicProject = publicProjects.find((entry) =>
    entry.id === id || (entry.imageSrc !== undefined && entry.imageSrc === project.imageSrc),
  );

  if (publicProject) mergedPublicIds.add(publicProject.id);
  return mergeFeaturedProject(project, publicProject);
});

// Os trabalhos da home e o acervo público compartilham uma única ficha por projeto.
// A união mantém os detalhes dos destaques e os links cadastrados no catálogo.
export const archiveProjects: readonly ArchiveProject[] = [
  ...featuredProjects,
  ...publicProjects.filter((project) => !mergedPublicIds.has(project.id)).map(toArchiveProject),
];

export const projectArchiveContent = {
  eyebrow: "Acervo de projetos",
  heading: ["Feitos", "por mim."],
  description: "Sites, apps, sistemas e experimentos. Aqui reúno os trabalhos profissionais e os estudos que fazem parte da minha trajetória.",
  searchLabel: "Buscar projetos",
  searchPlaceholder: "Nome, tecnologia ou assunto…",
  emptyHeading: "Não encontrei esse projeto por aqui.",
  emptyDescription: "Tente outro termo ou explore todas as categorias.",
  landingHeading: "Um site para o seu negócio?",
  landingDescription: "Explore as landing pages por área e encontre referências para a sua ideia.",
  githubUrl: projectGalleryContent.githubUrl,
} as const;

export function filterArchiveProjects(
  projects: readonly ArchiveProject[],
  category: ArchiveFilter = "all",
  query = "",
): readonly ArchiveProject[] {
  const terms = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);

  return projects.filter((project) => {
    if (category !== "all" && project.category !== category) return false;
    if (terms.length === 0) return true;

    const searchable = normalizeSearch(`${project.title} ${project.description} ${project.technology}`);
    return terms.every((term) => searchable.includes(term));
  });
}
