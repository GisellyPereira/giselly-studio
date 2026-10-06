import type { Project } from "@/src/domain/entities/portfolio";

interface ProjectDestination {
  readonly href: string;
  readonly label: "Ver projeto" | "Ver GitHub";
}

export function getProjectDestination(
  project: Pick<Project, "deployUrl" | "repositoryUrl">,
  githubUrl: string,
): ProjectDestination {
  if (project.deployUrl) return { href: project.deployUrl, label: "Ver projeto" };
  if (project.repositoryUrl) return { href: project.repositoryUrl, label: "Ver GitHub" };
  return { href: githubUrl, label: "Ver GitHub" };
}
