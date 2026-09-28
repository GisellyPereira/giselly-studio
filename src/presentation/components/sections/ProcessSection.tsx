import type { ProcessStep } from "@/src/domain/entities/portfolio";
import { SectionTopline } from "@/src/presentation/components/shared/SectionTopline";

interface ProcessSectionProps {
  readonly steps: readonly ProcessStep[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="process" id="processo">
      <SectionTopline label="Como eu chego lá" index="04 — Processo" />
      <div className="process-heading">
        <h2>
          Curiosidade no início.
          <br />
          <em>Capricho até o fim.</em>
        </h2>
        <p>Um processo criativo, colaborativo e sempre aberto a aprender.</p>
      </div>
      <div className="process-grid">
        {steps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <div className="process-icon">{step.number === "04" ? "↗" : "→"}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
