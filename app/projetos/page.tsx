import type { Metadata } from "next";
import { ProjectsArchivePage } from "@/src/presentation/pages/ProjectsArchivePage";

export const metadata: Metadata = {
  title: "Projetos — Giselly Studio",
  description: "Arquivo de projetos profissionais, publicados e experimentais de Giselly Pereira.",
};

export default function ProjectsPage() {
  return <ProjectsArchivePage />;
}
