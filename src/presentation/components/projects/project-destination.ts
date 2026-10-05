import type { Project } from "@/src/domain/entities/portfolio";

interface ProjectDestination {
  readonly href: string;
  readonly label: "Ver projeto" | "Ver código" | "Ver no GitHub";
}

export function getProjectDestination(
  project: Pick<Project, "deployUrl" | "repositoryUrl">,
  githubUrl: string,
): ProjectDestination {
  if (project.deployUrl) return { href: project.deployUrl, label: "Ver projeto" };
  if (project.repositoryUrl) return { href: project.repositoryUrl, label: "Ver código" };
  return { href: githubUrl, label: "Ver no GitHub" };
}
