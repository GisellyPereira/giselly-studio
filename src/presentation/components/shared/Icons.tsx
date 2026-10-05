interface ArrowIconProps {
  readonly diagonal?: boolean;
}

interface SparkIconProps {
  readonly className?: string;
}

interface ChevronIconProps {
  readonly direction?: "left" | "right";
}

export function ChevronIcon({ direction = "right" }: ChevronIconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d={direction === "left" ? "M15 5 8 12l7 7" : "m9 5 7 7-7 7"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ArrowIcon({ diagonal = false }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "rotate-[-45deg]" : ""}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function SparkIcon({ className = "" }: SparkIconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64">
      <path
        d="M32 0c0 22-10 32-32 32 22 0 32 10 32 32 0-22 10-32 32-32C42 32 32 22 32 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.5 14.78L2 22l5.36-1.41A9.87 9.87 0 1 0 12.04 2Zm0 18.08a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.18.83.85-3.1-.2-.32A8.21 8.21 0 1 1 12.04 20.08Zm4.5-6.15c-.24-.12-1.45-.72-1.67-.8-.22-.08-.38-.12-.54.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.07-.24-.12-1.03-.38-1.97-1.22-.73-.65-1.23-1.45-1.38-1.7-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.54-1.31-.74-1.8-.2-.47-.39-.41-.54-.42h-.46c-.16 0-.43.06-.66.31-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.45-.6 1.65-1.18.2-.59.2-1.09.14-1.19-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
