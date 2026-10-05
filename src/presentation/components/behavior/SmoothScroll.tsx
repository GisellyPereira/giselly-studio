"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

function ScrollAnimationSync() {
  const lenis = useLenis(() => ScrollTrigger.update());
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!lenis || !hash) return;

    let targetId: string;
    try {
      targetId = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }

    let frame = 0;
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
    const inputs = ["wheel", "touchstart", "keydown"] as const;
    inputs.forEach((event) => window.addEventListener(event, cancel, { once: true, passive: true }));

    // Cross-page anchors must use the destination's full layout and loaded fonts.
    document.fonts.ready.then(() => {
      if (cancelled || window.location.hash !== hash) return;
      frame = requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (!target) return;
        lenis.resize();
        lenis.scrollTo(target, { immediate: true });
        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancel();
      inputs.forEach((event) => window.removeEventListener(event, cancel));
    };
  }, [lenis, pathname]);

  return null;
}

export function SmoothScroll({ children }: { readonly children: ReactNode }) {
  return (
    <ReactLenis root options={scrollOptions}>
      <ScrollAnimationSync />
      {children}
    </ReactLenis>
  );
}
