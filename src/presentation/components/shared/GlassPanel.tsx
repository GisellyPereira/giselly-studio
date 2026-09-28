import type { PropsWithChildren } from "react";

interface GlassPanelProps extends PropsWithChildren {
  readonly className?: string;
  readonly contentClassName?: string;
}

export function GlassPanel({ children, className = "", contentClassName = "" }: GlassPanelProps) {
  const containerClassName = ["glass-container", className].filter(Boolean).join(" ");
  const innerClassName = ["glass-container__content", contentClassName].filter(Boolean).join(" ");

  return (
    <div className={containerClassName}>
      <div aria-hidden="true" className="glass-effect">
        <div className="glass-effect__fill" />
        <div className="glass-effect__fill-burn" />
        <div className="glass-effect__highlight-soft" />
        <div className="glass-effect__highlight-strong" />
        <div className="glass-effect__edge-light" />
        <div className="glass-effect__edge-dark" />
        <div className="glass-effect__inner-glow" />
      </div>

      <div className={innerClassName}>{children}</div>
    </div>
  );
}
