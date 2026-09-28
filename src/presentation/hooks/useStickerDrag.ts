"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

interface Position { x: number; y: number }
interface Bounds { minX: number; maxX: number; minY: number; maxY: number }
interface DragSession {
  pointerId: number;
  pointer: Position;
  origin: Position;
  bounds: Bounds;
}

let frontLayer = 1;
const initialPosition: Position = { x: 0, y: 0 };
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function useStickerDrag() {
  const elementRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<DragSession | null>(null);
  const offsetRef = useRef(initialPosition);
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isPointerFocus, setIsPointerFocus] = useState(false);
  const [layer, setLayer] = useState(1);

  function move(next: Position) {
    offsetRef.current = next;
    setPosition(next);
  }

  function getBounds(element: HTMLButtonElement): Bounds {
    const container = element.parentElement!.getBoundingClientRect();
    const artwork = element.firstElementChild!.getBoundingClientRect();
    const offset = offsetRef.current;
    return {
      minX: offset.x + container.left + 6 - artwork.left,
      maxX: offset.x + container.right - 6 - artwork.right,
      minY: offset.y + container.top + 6 - artwork.top,
      maxY: offset.y + container.bottom - 6 - artwork.bottom,
    };
  }

  function onPointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0 || dragRef.current) return;
    // Let native pointer focus distinguish clicks from keyboard navigation.
    setIsPointerFocus(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      pointer: { x: event.clientX, y: event.clientY },
      origin: offsetRef.current,
      bounds: getBounds(event.currentTarget),
    };
    setLayer(++frontLayer);
    setIsDragging(true);
  }

  function onPointerMove(event: PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    move({
      x: clamp(drag.origin.x + event.clientX - drag.pointer.x, drag.bounds.minX, drag.bounds.maxX),
      y: clamp(drag.origin.y + event.clientY - drag.pointer.y, drag.bounds.minY, drag.bounds.maxY),
    });
  }

  function onPointerUp(event: PointerEvent<HTMLButtonElement>) {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function resetPosition() {
    const pointerId = dragRef.current?.pointerId;
    dragRef.current = null;
    setIsDragging(false);
    move(initialPosition);
    if (pointerId !== undefined && elementRef.current?.hasPointerCapture(pointerId)) {
      elementRef.current.releasePointerCapture(pointerId);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    setIsPointerFocus(false);
    if (event.key === "Escape" || event.key === "Home") {
      event.preventDefault();
      resetPosition();
      return;
    }
    const steps: Record<string, Position> = {
      ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
    };
    const direction = steps[event.key];
    if (!direction) return;
    event.preventDefault();
    const bounds = getBounds(event.currentTarget);
    const step = event.shiftKey ? 32 : 12;
    setLayer(++frontLayer);
    move({
      x: clamp(offsetRef.current.x + direction.x * step, bounds.minX, bounds.maxX),
      y: clamp(offsetRef.current.y + direction.y * step, bounds.minY, bounds.maxY),
    });
  }

  useEffect(() => {
    const parent = elementRef.current?.parentElement;
    if (!parent) return;
    let width = parent.clientWidth;
    let height = parent.clientHeight;
    const observer = new ResizeObserver(() => {
      if (parent.clientWidth === width && parent.clientHeight === height) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dragRef.current = null;
      offsetRef.current = initialPosition;
      setPosition(initialPosition);
      setIsDragging(false);
    });
    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  return {
    elementRef, position, isDragging, isPointerFocus, layer,
    handlers: {
      onPointerDown, onPointerMove, onPointerUp,
      onPointerCancel: resetPosition,
      onLostPointerCapture: () => { dragRef.current = null; setIsDragging(false); },
      onKeyDown, onDoubleClick: resetPosition,
      onBlur: () => setIsPointerFocus(false),
    },
  };
}
