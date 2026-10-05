export interface AboutPhoto {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
  readonly sideways?: boolean;
}

export interface AboutContent {
  readonly heading: readonly [string, string];
  readonly introduction: readonly string[];
  readonly details: readonly string[];
  readonly portrait: AboutPhoto;
  readonly story: {
    readonly heading: readonly [string, string];
    readonly paragraphs: readonly string[];
    readonly photos: readonly AboutPhoto[];
  };
  readonly interests: {
    readonly heading: readonly [string, string];
    readonly introduction: string;
    readonly items: readonly { readonly name: string }[];
    readonly photo: AboutPhoto;
  };
}
