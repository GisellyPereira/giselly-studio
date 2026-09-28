"use client";

import type { SkillSticker } from "@/src/domain/entities/portfolio";
import { useStickerDrag } from "@/src/presentation/hooks/useStickerDrag";
import { SkillStickerArtwork } from "./SkillStickerArtwork";

interface DraggableSkillStickerProps {
  readonly sticker: SkillSticker;
}

export function DraggableSkillSticker({ sticker }: DraggableSkillStickerProps) {
  const { elementRef, position, isDragging, isPointerFocus, layer, handlers } = useStickerDrag();

  return (
    <button
      ref={elementRef}
      aria-label={`Mover adesivo de ${sticker.label}`}
      aria-describedby="skills-sticker-help"
      className={`skills-sticker skills-sticker--${sticker.id}${isDragging ? " is-dragging" : ""}`}
      data-pointer-focus={isPointerFocus}
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`, zIndex: layer }}
      title={`${sticker.label} — arraste para mover; clique duas vezes para reposicionar`}
      type="button"
      {...handlers}
    >
      <span className="skills-sticker__artwork">
        <SkillStickerArtwork sticker={sticker} />
      </span>
    </button>
  );
}
