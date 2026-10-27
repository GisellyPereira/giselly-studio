import Image from "next/image";
import { bioLinks } from "@/src/data/links";
import { ArrowIcon, DownloadIcon } from "@/src/presentation/components/shared/Icons";
import styles from "./links-page.module.css";

export function LinksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <Image alt="" aria-hidden="true" className={styles.flower} height={256} priority src="/images/brand/giselly-studio-icon.svg" width={256} />
          <h1 className={styles.name}>Giselly Pereira</h1>
          <p className={styles.role}>Desenvolvedora front-end sênior</p>
          <p className={styles.tagline}>web &amp; mobile</p>
        </header>

        <ul className={styles.list}>
          {bioLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`${styles.link} ${link.featured ? styles.featured : ""}`}
                download={link.download || undefined}
                href={link.href}
                rel={link.external ? "noopener noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                <span className={styles.text}>
                  <span className={styles.title}>{link.title}</span>
                  <span className={styles.description}>{link.description}</span>
                </span>
                <span className={styles.icon}>{link.download ? <DownloadIcon /> : <ArrowIcon diagonal={link.external} />}</span>
              </a>
            </li>
          ))}
        </ul>

        <footer className={styles.footer}>
          <Image alt="Giselly Studio" className={styles.wordmark} height={120} src="/images/brand/giselly-studio.svg" width={117} />
        </footer>
      </div>
    </main>
  );
}
