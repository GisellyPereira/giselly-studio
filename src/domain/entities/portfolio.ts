export type ProjectColor = "banana" | "rose" | "sky";

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly number: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly year?: string;
  readonly color: ProjectColor;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imagePosition?: string;
  readonly tags: readonly string[];
  readonly challenge: string;
  readonly result: string;
  readonly repositoryUrl?: string;
  readonly deployUrl?: string;
  readonly deployLabel?: string;
  readonly screenshots?: readonly {
    readonly src: string;
    readonly alt: string;
    readonly caption: string;
    readonly width: number;
    readonly height: number;
  }[];
}

export interface SkillSticker {
  readonly id: "react" | "tailwind" | "figma" | "javascript" | "github" | "gitlab" | "typescript";
  readonly label: string;
  readonly src: string;
}

export interface SkillsContent {
  readonly heading: readonly [string, string];
  readonly skills: readonly string[];
  readonly stickers: readonly SkillSticker[];
}

export interface Experience {
  readonly id: string;
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly companyShort: string;
  readonly focus: string;
  readonly highlight: readonly string[];
  readonly current?: boolean;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface ExperienceContent {
  readonly eyebrow: string;
  readonly heading: readonly string[];
  readonly description: string;
  readonly closing: string;
}

export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly text: string;
}

export interface PortfolioProfile {
  readonly name: string;
  readonly initials: string;
  readonly role: string;
  readonly email: string;
  readonly location: string;
  readonly socials: readonly SocialLink[];
  readonly projects: readonly Project[];
  readonly experiences: readonly Experience[];
}
