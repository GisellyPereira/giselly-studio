export interface Course {
  readonly id: string;
  readonly title: string;
  readonly hours: number;
  readonly description: string;
  readonly imageSrc: string;
  readonly sourceUrl: string;
}

export interface CoursesContent {
  readonly heading: readonly string[];
  readonly description: string;
  readonly provider: string;
  readonly providerLogo: string;
  readonly courses: readonly Course[];
}
