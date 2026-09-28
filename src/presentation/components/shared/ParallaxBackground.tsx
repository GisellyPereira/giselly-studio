"use client";

import Image from "next/image";
import { useScrollParallax } from "@/src/presentation/hooks/useScrollParallax";

interface ParallaxBackgroundProps {
  readonly src: string;
  readonly alt: string;
  readonly imageClassName?: string;
}

export function ParallaxBackground({ src, alt, imageClassName }: ParallaxBackgroundProps) {
  const layerRef = useScrollParallax();

  return (
    <div ref={layerRef} className="parallax-background">
      <Image alt={alt} className={imageClassName} fill sizes="100vw" src={src} />
    </div>
  );
}
