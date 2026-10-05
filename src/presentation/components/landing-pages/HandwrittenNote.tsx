import { HeartDoodle } from "./CollageDoodles";
import styles from "./handwritten-note.module.css";

export function HandwrittenNote({ lines, className = "" }: { readonly lines: readonly string[]; readonly className?: string }) {
  return <div aria-hidden="true" className={`${styles.note} ${className}`}>
    {lines.map((line) => <span key={line}>{line}</span>)}
    <HeartDoodle className={styles.heart} />
  </div>;
}
