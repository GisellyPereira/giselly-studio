"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import type { SkillsContent } from "@/src/domain/entities/portfolio";
import { DraggableSkillSticker } from "@/src/presentation/components/skills/DraggableSkillSticker";
import { EntranceSection } from "@/src/presentation/components/behavior/EntranceSection";

interface SkillsSectionProps {
  readonly content: SkillsContent;
}

export function SkillsSection({ content }: SkillsSectionProps) {
  const { t } = useI18n();
  return (
    <EntranceSection className="skills-showcase" id="skills">
      <div aria-hidden="true" className="skills-showcase__wallpaper">
        <span className="skills-showcase__bloom skills-showcase__bloom--one" />
        <span className="skills-showcase__bloom skills-showcase__bloom--two" />
        <span className="skills-showcase__bloom skills-showcase__bloom--three" />
        <span className="skills-showcase__bloom skills-showcase__bloom--four" />
      </div>
      <div aria-hidden="true" className="skills-showcase__shade" />

      <div className="skills-showcase__content">
        <h2 data-entrance="heading" data-entrance-children>
          <span>{content.heading[0]}</span>
          <em>{content.heading[1]}</em>
        </h2>
        <ul aria-label={t("Tecnologias e competências")} data-entrance="rise" data-entrance-delay=".15">
          {content.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <p className="sr-only" id="skills-sticker-help">{t("Arraste para mover o adesivo. Pelo teclado, use as setas para mover, Shift para passos maiores e Escape para voltar à posição inicial.")}</p>
      <div className="skills-showcase__stickers" data-entrance="stickers" data-entrance-children data-entrance-delay=".2">
        {content.stickers.map((sticker) => (
          <DraggableSkillSticker key={sticker.id} sticker={sticker} />
        ))}
      </div>
    </EntranceSection>
  );
}
