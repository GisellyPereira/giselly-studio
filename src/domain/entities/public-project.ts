export type GalleryTone = "rose" | "mauve" | "banana" | "sky";

export interface PublicProject {
  readonly id: string;
  readonly title: string;
  readonly heading?: readonly string[];
  readonly category: "Web" | "Mobile" | "Experimento";
  readonly description: string;
  readonly technology: string;
  readonly imageSrc?: string;
  readonly monogram?: string;
  readonly repositoryUrl?: string;
  readonly deployUrl?: string;
}

export interface ProjectGalleryContent {
  readonly heading: readonly string[];
  readonly githubUrl: string;
  readonly projects: readonly PublicProject[];
}
