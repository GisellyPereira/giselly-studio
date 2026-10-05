import type { ArchiveFilter } from "@/src/domain/entities/project-archive";

interface ArchiveCategoryIconProps {
  readonly category: ArchiveFilter;
  readonly className?: string;
}

export function ArchiveCategoryIcon({ category, className }: ArchiveCategoryIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.35"
      viewBox="0 0 24 24"
    >
      {category === "all" ? (
        <>
          <rect height="6" rx="1" width="6" x="3" y="3" />
          <rect height="6" rx="1" width="6" x="15" y="3" />
          <rect height="6" rx="1" width="6" x="3" y="15" />
          <rect height="6" rx="1" width="6" x="15" y="15" />
        </>
      ) : category === "Web" ? (
        <>
          <rect height="15" rx="2" width="20" x="2" y="4.5" />
          <path d="M2 9h20M5 6.7h.1M7.8 6.7h.1M10.6 6.7h.1M8.5 12.3l-2.7 2.3 2.7 2.2M15.5 12.3l2.7 2.3-2.7 2.2M12.8 11.6l-1.6 6" />
        </>
      ) : category === "Mobile" ? (
        <>
          <rect height="20" rx="2.5" width="11" x="6.5" y="2" />
          <path d="M10 4.5h4M11 19.5h2" />
        </>
      ) : (
        <>
          <path d="M9 3h6M10 3v6l-5.2 8.1A2.5 2.5 0 007 21h10a2.5 2.5 0 002.2-3.9L14 9V3M7.4 13.5h9.2M9 17h.1M14.5 16.5h.1" />
          <path d="M19 4v3M17.5 5.5h3" />
        </>
      )}
    </svg>
  );
}
