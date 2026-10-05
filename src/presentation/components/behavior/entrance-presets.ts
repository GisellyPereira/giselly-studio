import type { gsap } from "gsap";

// Each recipe lands on the element's existing CSS position and rotation.
export function entrancePresets(compact: boolean): Record<string, gsap.TweenVars> {
  const distance = compact ? 24 : 42;

  return {
    fade: { duration: .65 },
    rise: { y: distance, duration: .85 },
    heading: { y: distance, duration: 1.05, stagger: .12 },
    paper: {
      y: distance * 1.3,
      rotation: compact ? "+=1" : "+=2.5",
      scale: .97,
      duration: 1.1,
    },
    bloom: { rotation: "-=45", scale: .65, duration: 1.2 },
    "from-left": { x: -distance, duration: .9, stagger: .1 },
    "from-right": { x: distance, duration: .9, stagger: .1 },
    brand: { y: compact ? 12 : 20, scale: .94, duration: 1.25 },
    line: { scaleX: 0, duration: .8 },
    header: { y: -14, duration: .8 },
    // The buttons already own their drag transform; only their opacity changes.
    stickers: { duration: .65, stagger: .09, clearProps: "opacity" },
  };
}
