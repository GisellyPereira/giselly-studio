import type { LandingPageDetails } from "./landing-page";
import type { Project, SocialLink } from "./portfolio";
import type { ProjectCoverLayout } from "./public-project";

export type ArchiveCategory = "Web" | "Mobile" | "Experimento";
export type ArchiveFilter = "all" | ArchiveCategory;

export interface ArchiveFilterOption {
  readonly id: ArchiveFilter;
  readonly label: string;
}

export interface ArchiveProject {
  readonly id: string;
  readonly title: string;
  readonly category: ArchiveCategory;
  readonly description: string;
  readonly technology: string;
  readonly imageSrc?: string;
  readonly imageFit?: "cover" | "contain";
  readonly imageAspectRatio?: string;
  readonly coverLayout?: ProjectCoverLayout;
  readonly imageAlt: string;
  readonly imagePosition?: string;
  readonly monogram?: string;
  readonly deployUrl?: string;
  readonly storeLinks?: readonly SocialLink[];
  readonly repositoryUrl?: string;
  readonly heading?: readonly string[];
  readonly landingPage?: LandingPageDetails;
  readonly featured?: Project;
}
