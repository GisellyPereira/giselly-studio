"use client";

import type { ReactNode } from "react";
import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";

const scrollOptions: LenisOptions = {
  autoRaf: true,
  anchors: true,
  lerp: 0.085,
  smoothWheel: true,
  // Preserve native touch inertia and the stickers' pointer gestures.
  syncTouch: false,
  respectReducedMotion: true,
  stopInertiaOnNavigate: true,
};

export function SmoothScroll({ children }: { readonly children: ReactNode }) {
  return (
    <ReactLenis root options={scrollOptions}>
      {children}
    </ReactLenis>
  );
}
