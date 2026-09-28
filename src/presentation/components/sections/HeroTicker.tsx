"use client";

import { useEffect, useRef } from "react";
import { SparkIcon } from "@/src/presentation/components/shared/Icons";

const tickerPattern = ["bold", "regular", "script"] as const;
const tickerSequence = Array.from({ length: 5 }, () => tickerPattern).flat();
const tickerItems = [...tickerSequence, ...tickerSequence];
const tickerSpeed = 44;
const scrollPullRatio = 0.1;

export function HeroTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const pullRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    const pull = pullRef.current;
    const track = trackRef.current;
    if (
      !ticker ||
      !pull ||
      !track ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frameId = 0;
    let halfWidth = track.scrollWidth / 2;
    let offset = 0;
    let velocity = tickerSpeed;
    let targetVelocity = tickerSpeed;
    let pullDistance = window.innerWidth * scrollPullRatio;
    let pullTarget = pullDistance;
    let pullOffset = pullTarget;
    let lastScrollY = window.scrollY;
    let lastFrameTime = performance.now();

    const getScrollProgress = () => {
      const hero = ticker.closest<HTMLElement>(".hero");
      if (!hero) return 0;

      const heroRect = hero.getBoundingClientRect();
      const scrolledDistance = Math.min(
        Math.max(-heroRect.top, 0),
        heroRect.height,
      );

      return scrolledDistance / Math.max(heroRect.height, 1);
    };

    const updatePullTarget = () => {
      const scrollProgress = getScrollProgress();
      pullTarget = pullDistance * (1 - scrollProgress * 2);
    };

    const updateMeasurements = () => {
      halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) offset %= halfWidth;
      pullDistance = window.innerWidth * scrollPullRatio;
      updatePullTarget();
    };

    const changeDirectionOnScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) > 1) {
        const isScrollingDown = delta > 0;
        targetVelocity = isScrollingDown ? tickerSpeed : -tickerSpeed;
        track.dataset.direction = isScrollingDown ? "left" : "right";
      }

      lastScrollY = currentScrollY;
      updatePullTarget();
    };

    const moveTicker = (time: number) => {
      const deltaTime = Math.min((time - lastFrameTime) / 1000, 0.05);
      const directionEasing = 1 - Math.exp(-6 * deltaTime);
      const pullEasing = 1 - Math.exp(-9 * deltaTime);
      lastFrameTime = time;

      velocity += (targetVelocity - velocity) * directionEasing;
      pullOffset += (pullTarget - pullOffset) * pullEasing;

      if (halfWidth > 0) {
        offset = (offset + velocity * deltaTime) % halfWidth;
        if (offset < 0) offset += halfWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      pull.style.transform = `translate3d(${pullOffset}px, 0, 0)`;

      frameId = window.requestAnimationFrame(moveTicker);
    };

    updateMeasurements();
    pullOffset = pullTarget;
    pull.style.transform = `translate3d(${pullOffset}px, 0, 0)`;

    const resizeObserver = new ResizeObserver(updateMeasurements);
    resizeObserver.observe(track);
    void document.fonts.ready.then(updateMeasurements);
    window.addEventListener("resize", updateMeasurements);
    window.addEventListener("scroll", changeDirectionOnScroll, { passive: true });
    frameId = window.requestAnimationFrame(moveTicker);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateMeasurements);
      window.removeEventListener("scroll", changeDirectionOnScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="hero-ticker" aria-hidden="true" ref={tickerRef}>
      <div className="hero-ticker__pull" ref={pullRef}>
        <div className="hero-ticker__track" data-direction="left" ref={trackRef}>
          {tickerItems.map((style, index) => (
            <span className="hero-ticker__item" key={`${style}-${index}`}>
              <span className={`hero-ticker__name hero-ticker__name--${style}`}>
                Giselly Pereira
              </span>
              <SparkIcon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
