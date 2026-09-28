import type { ProjectColor } from "@/src/domain/entities/portfolio";
import { CommerceArtwork } from "@/src/presentation/components/projects/CommerceArtwork";
import { ProconArtwork } from "@/src/presentation/components/projects/ProconArtwork";
import { SchoolArtwork } from "@/src/presentation/components/projects/SchoolArtwork";

interface ProjectArtworkProps {
  readonly color: ProjectColor;
}

const artworkByColor = {
  banana: ProconArtwork,
  rose: SchoolArtwork,
  sky: CommerceArtwork,
} satisfies Record<ProjectColor, React.ComponentType>;

export function ProjectArtwork({ color }: ProjectArtworkProps) {
  const Artwork = artworkByColor[color];
  return <Artwork />;
}
