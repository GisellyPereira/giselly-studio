import type { LandingPageGroup } from "./landing-page";

export interface LandingPagesCalloutContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string];
  readonly description: string;
  readonly catalogLabel: string;
  readonly catalogHint: string;
  readonly handwrittenNotes: {
    readonly ideas: readonly string[];
    readonly human: readonly string[];
  };
  readonly groups: readonly LandingPageGroup[];
  readonly primaryAction: { readonly label: string; readonly href: string };
  readonly secondaryAction: { readonly label: string; readonly href: string };
}
