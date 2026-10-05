interface DoodleProps { readonly className?: string; }

export function HeartDoodle({ className }: DoodleProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 32 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 32C9 22 3 13 6 6c4-6 10 2 10 8 2-8 10-13 12-7 2 6-5 15-12 25Z" /></svg>;
}

export function CurvedArrowDoodle({ className }: DoodleProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M57 54C34 49 20 36 15 12M10 23l5-12 9 9" /></svg>;
}

export function SprigDoodle({ className }: DoodleProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 120 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 143c36-39 67-65 105-135M47 101c-8-21-2-50 5-60 1 28 2 43-5 60ZM74 67c2-28 24-52 41-59-9 25-25 50-41 59ZM52 105c13-13 37-14 53-13-17 13-37 19-53 13Z" />
    <path d="m47 101 5-49M74 67l34-48M52 105l43-11" />
  </svg>;
}
