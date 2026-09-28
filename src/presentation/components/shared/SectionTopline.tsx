interface SectionToplineProps {
  readonly label: string;
  readonly index: string;
}

export function SectionTopline({ label, index }: SectionToplineProps) {
  return (
    <div className="section-topline">
      <p className="eyebrow">
        <span /> {label}
      </p>
      <p className="section-index">({index})</p>
    </div>
  );
}
