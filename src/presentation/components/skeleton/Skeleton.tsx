import type { CSSProperties } from "react";

interface SkeletonProps {
  readonly width?: CSSProperties["width"];
  readonly height?: CSSProperties["height"];
  readonly radius?: CSSProperties["borderRadius"];
  readonly className?: string;
  readonly style?: CSSProperties;
}

// Bloco decorativo de carregamento; quem anuncia o estado é o contêiner com aria-busy.
export function Skeleton({ width = "100%", height = "1rem", radius = ".6rem", className = "", style }: SkeletonProps) {
  return <span aria-hidden="true" className={`skeleton ${className}`.trim()} style={{ width, height, borderRadius: radius, ...style }} />;
}
