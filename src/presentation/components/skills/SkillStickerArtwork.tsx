import { useId } from "react";
import type { SkillSticker } from "@/src/domain/entities/portfolio";

interface SkillStickerArtworkProps {
  readonly sticker: SkillSticker;
}

const cutouts = {
  tailwind: "-10 15 148 98",
  figma: "14 -10 106 150",
  gitlab: "-10 -8 148 146",
} as const;

export function SkillStickerArtwork({ sticker }: SkillStickerArtworkProps) {
  const outlineId = `sticker-outline-${useId().replace(/:/g, "")}`;

  if (sticker.id === "react" || sticker.id === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="99" fill="var(--ivory)" />
        <circle
          cx="100" cy="100" r="85"
          fill={sticker.id === "react" ? "var(--dark-amethyst)" : "var(--bubblegum-tint)"}
        />
        <image href={sticker.src} x="34" y="34" width="132" height="132" />
      </svg>
    );
  }

  if (sticker.id === "javascript") {
    return (
      <svg aria-hidden="true" viewBox="0 0 160 160">
        <rect x="1" y="1" width="158" height="158" rx="13" fill="var(--ivory)" />
        <image href={sticker.src} x="11" y="11" width="138" height="138" />
      </svg>
    );
  }

  if (sticker.id === "typescript") {
    return (
      <svg aria-hidden="true" viewBox="0 0 160 160">
        <rect x="1" y="1" width="158" height="158" rx="13" fill="var(--ivory)" />
        <image href={sticker.src} x="11" y="11" width="138" height="138" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox={cutouts[sticker.id]}>
      <defs>
        <filter id={outlineId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="5.5" result="cut" />
          <feGaussianBlur in="cut" stdDeviation=".65" result="roundedCut" />
          <feColorMatrix in="roundedCut" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 24 -10" result="outlineMask" />
          <feFlood floodColor="#F6F4E5" result="paper" />
          <feComposite in="paper" in2="outlineMask" operator="in" result="outline" />
          <feMerge>
            <feMergeNode in="outline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <image href={sticker.src} width="128" height="128" filter={`url(#${outlineId})`} />
    </svg>
  );
}
