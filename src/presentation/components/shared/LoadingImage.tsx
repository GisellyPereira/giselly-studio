"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// next/image com skeleton: o elemento pai mostra o brilho até a imagem terminar de carregar.
export function LoadingImage({ alt, onLoad, onError, ...props }: ImageProps) {
  const [state, setState] = useState<"loading" | "loaded">("loading");
  return (
    <Image
      {...props}
      alt={alt}
      data-image-state={state}
      onError={(event) => {
        setState("loaded");
        onError?.(event);
      }}
      onLoad={(event) => {
        setState("loaded");
        onLoad?.(event);
      }}
    />
  );
}
