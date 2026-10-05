import type { SocialLink } from "./portfolio";
import type { LandingPageDetails } from "./landing-page";

export type GalleryTone = "rose" | "mauve" | "banana" | "sky";
export type ProjectCoverLayout = "browser" | "poster" | "editor";

export interface PublicProject {
  readonly id: string;
  readonly title: string;
  readonly heading?: readonly string[];
  readonly category: "Web" | "Mobile" | "Experimento";
  readonly description: string;
  readonly technology: string;
  readonly imageSrc?: string;
  readonly imageFit?: "cover" | "contain";
  readonly imageAspectRatio?: string;
  readonly coverLayout?: ProjectCoverLayout;
  readonly monogram?: string;
  readonly repositoryUrl?: string;
  readonly deployUrl?: string;
  readonly storeLinks?: readonly SocialLink[];
  readonly landingPage?: LandingPageDetails;
}

export interface ProjectGalleryContent {
  readonly heading: readonly string[];
  readonly githubUrl: string;
  readonly projects: readonly PublicProject[];
}

export type LandingPageProject = PublicProject & {
  readonly landingPage: LandingPageDetails;
};
