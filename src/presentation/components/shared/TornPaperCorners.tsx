import Image from "next/image";
import styles from "./torn-paper-corners.module.css";

export function TornPaperCorners() {
  return (
    <div aria-hidden="true" className={styles.corners}>
      <span className={`${styles.paper} ${styles.topRight}`}>
        <Image
          src="/images/decor/pink-paper-corner-v2.png"
          alt=""
          width={1120}
          height={1404}
          sizes="(max-width: 700px) 112px, 16vw"
        />
      </span>
      <span className={`${styles.paper} ${styles.bottomLeft}`}>
        <Image
          src="/images/decor/pink-paper-corner-v2.png"
          alt=""
          width={1120}
          height={1404}
          sizes="(max-width: 700px) 112px, 16vw"
        />
      </span>
    </div>
  );
}
