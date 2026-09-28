interface ArrowIconProps {
  readonly diagonal?: boolean;
}

interface SparkIconProps {
  readonly className?: string;
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
