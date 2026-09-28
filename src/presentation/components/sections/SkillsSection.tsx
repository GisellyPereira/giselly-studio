import type { SkillsContent } from "@/src/domain/entities/portfolio";
import { DraggableSkillSticker } from "@/src/presentation/components/skills/DraggableSkillSticker";

interface SkillsSectionProps {
  readonly content: SkillsContent;
}

export function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <section className="skills-showcase" id="skills">
      <div aria-hidden="true" className="skills-showcase__wallpaper">
        <span className="skills-showcase__bloom skills-showcase__bloom--one" />
        <span className="skills-showcase__bloom skills-showcase__bloom--two" />
        <span className="skills-showcase__bloom skills-showcase__bloom--three" />
        <span className="skills-showcase__bloom skills-showcase__bloom--four" />
      </div>
      <div aria-hidden="true" className="skills-showcase__shade" />

      <div className="skills-showcase__content">
        <h2>
          <span>{content.heading[0]}</span>
          <em>{content.heading[1]}</em>
        </h2>
        <ul aria-label="Tecnologias e competências">
          {content.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <p className="sr-only" id="skills-sticker-help">
        Arraste para mover o adesivo. Pelo teclado, use as setas para mover,
        Shift para passos maiores e Escape para voltar à posição inicial.
      </p>
      <div className="skills-showcase__stickers">
        {content.stickers.map((sticker) => (
          <DraggableSkillSticker key={sticker.id} sticker={sticker} />
        ))}
      </div>
    </section>
  );
}
