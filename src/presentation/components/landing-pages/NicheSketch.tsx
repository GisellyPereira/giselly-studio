import type { ReactNode } from "react";
import type { LandingPageNiche } from "@/src/domain/entities/landing-page";

const drawings: Record<LandingPageNiche, ReactNode> = {
  cultura: <>
    <path d="m7 20 25-13 25 13H7ZM11 24v27M24 24v27M40 24v27M53 24v27M7 53h50M5 58h54" />
  </>,
  midia: <>
    <path d="M10 10h39v44H10V10ZM49 23h7v27c0 3-2 4-7 4M17 18h25M17 25h11v12H17V25ZM34 25h8M34 31h8M34 37h8M17 44h25" />
  </>,
  gastronomia: <>
    <path d="M8 32h48c-2 16-12 23-24 23S10 48 8 32ZM6 32h52M23 57h18M22 9c-6 7 6 9 0 17M33 5c-6 7 6 10 0 17M44 10c-6 7 6 9 0 17" />
  </>,
  pets: <>
    <path d="M19 43c3-3 4-12 13-12s10 9 13 12c8 11-3 15-13 10-10 5-21 1-13-10Z" />
    <ellipse cx="13" cy="28" rx="5" ry="7" transform="rotate(-25 13 28)" />
    <ellipse cx="25" cy="18" rx="5" ry="7" />
    <ellipse cx="40" cy="18" rx="5" ry="7" />
    <ellipse cx="52" cy="28" rx="5" ry="7" transform="rotate(25 52 28)" />
  </>,
  saude: <>
    <path d="M29 59c-2-14-3-28 12-44M28 44C14 43 8 34 7 22c13 1 22 9 21 22ZM29 36c-2-16 6-25 20-30 1 16-5 26-20 30Z" />
    <path d="M13 29c6 5 10 10 15 15M54 11l5-9M57 17l6-3" />
  </>,
  turismo: <>
    <path d="M6 42c7-3 11-10 18-7 8 3 12 12 20 9 6-2 9-7 15-4M21 50c8-4 13 1 20 3 7 3 13-4 19-2" />
    <path d="M23 31c-6-8-3-19 6-21 10-3 19 6 16 16l-2 5M32 5V1.5M18 8l-4-4M15 18l-6-2M47 8l4-4M50 18l6-2" />
  </>,
  tecnologia: <>
    <path d="m9 15 44-2 3 33-44 3-3-34ZM7 49l52-3c4 0 4 5 1 5L7 54c-4 0-4-5 0-5Z" />
    <path d="m27 26-6 5 6 4M36 24l-5 14M40 26l6 4-5 5M28 49l9-.5" />
  </>,
  energia: <>
    <path d="m10 30 33 2 6 21-46-4 7-19ZM6 40l40 3M22 31l-4 20M32 32l2 20M26 51l-.5 7M19 58l15 1" />
    <circle cx="36" cy="15" r="5.5" />
    <path d="M36 5V2M43 8l2-2M46 15h3M43 22l2 2M35 25v3M28 22l-2 2M26 15h-3M28 8l-2-2M54 30l6-5M55 36l7-2M55 42l6 3" />
  </>,
  financas: <>
    <ellipse cx="23" cy="23" rx="14" ry="7" transform="rotate(-8 23 23)" />
    <path d="m9 25 1.5 10c1 8 29 4 28-3l-1.5-11M11 35l1 10c1 8 28 4 27-3l-1-10M12 45l1 9c1 7 27 4 27-4l-1-9" />
    <path d="m47 13 3-10M53 19l3-3M53 26l8-4" />
  </>,
  comercio: <>
    <path d="m24 20 33 3-3 34-36-4 6-33ZM57 23l1 33-4 1M31 23l1-9c1-11 17-9 16 2l-1 11" />
    <path d="M28 39c3 9 15 12 20 2M25 49l26 3M8 24l5 7M2 33l10 3M5 49l9-5" />
  </>,
};

export function NicheSketch({ niche, className }: { readonly niche: LandingPageNiche; readonly className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {drawings[niche]}
    </svg>
  );
}
