"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import type { SkillSticker } from "@/src/domain/entities/portfolio";
import { Button } from "@/src/presentation/components/shared/Button";
import { useStickerDrag } from "@/src/presentation/hooks/useStickerDrag";
import { SkillStickerArtwork } from "./SkillStickerArtwork";

interface DraggableSkillStickerProps {
  readonly sticker: SkillSticker;
}

export function DraggableSkillSticker({ sticker }: DraggableSkillStickerProps) {
  const { t } = useI18n();
  const { elementRef, position, isDragging, isPointerFocus, layer, handlers } = useStickerDrag();

  return (
    <Button
      variant="trigger"
      ref={elementRef}
      aria-label={t("Mover adesivo de {value0}", {value0: sticker.label})}
      aria-describedby="skills-sticker-help"
      className={`skills-sticker skills-sticker--${sticker.id}${isDragging ? " is-dragging" : ""}`}
      data-pointer-focus={isPointerFocus}
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`, zIndex: layer }}
      title={t("{value0} — arraste para mover; clique duas vezes para reposicionar", {value0: sticker.label})}
      type="button"
      {...handlers}
    >
      <span className="skills-sticker__artwork">
        <SkillStickerArtwork sticker={sticker} />
      </span>
    </Button>
  );
}
