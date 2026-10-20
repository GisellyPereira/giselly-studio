"use client";

import { useI18n } from "@/src/i18n/use-i18n";
import { Skeleton } from "./Skeleton";
import styles from "./page-skeleton.module.css";

type PageSkeletonVariant = "home" | "projects" | "studio" | "about";

function HeaderSkeleton() {
  return (
    <div className={styles.header}>
      <Skeleton height="3.6rem" radius="999px" width="3.6rem" />
      <Skeleton className={styles.nav} height="3.6rem" radius="999px" width="min(30rem, 52vw)" />
      <Skeleton className={styles.talk} height="3rem" radius="999px" width="9rem" />
    </div>
  );
}

function CardGrid({ count, columns }: { readonly count: number; readonly columns: "three" | "four" }) {
  return (
    <div className={`${styles.grid} ${columns === "four" ? styles.gridFour : ""}`}>
      {Array.from({ length: count }, (_, index) => (
        <div className={styles.card} key={index}>
          <Skeleton height="auto" radius=".25rem" style={{ aspectRatio: "16 / 10" }} />
          <Skeleton height="1.5rem" width="70%" />
          <div className={styles.tags}>
            <Skeleton height="1.4rem" radius="999px" width="4rem" />
            <Skeleton height="1.4rem" radius="999px" width="5rem" />
            <Skeleton height="1.4rem" radius="999px" width="3.5rem" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PageSkeleton({ variant }: { readonly variant: PageSkeletonVariant }) {
  const { t } = useI18n();
  return (
    <main aria-busy="true" className={`${styles.page} ${styles[variant]}`}>
      <p className="sr-only" role="status">{t("Carregando…")}</p>
      <HeaderSkeleton />

      {variant === "home" ? (
        <>
          <section className={styles.hero}>
            <Skeleton height="min(40svh, 22rem)" radius="1.5rem" width="min(70vw, 26rem)" />
            <Skeleton height="1.4rem" width="min(80vw, 24rem)" />
            <Skeleton height="1rem" width="min(86vw, 32rem)" />
            <div className={styles.row}>
              <Skeleton height="3rem" radius="999px" width="10.5rem" />
              <Skeleton height="3rem" radius="999px" width="10.5rem" />
            </div>
          </section>
          <section className={styles.section}>
            <Skeleton height="2.6rem" width="16rem" />
            <CardGrid columns="three" count={3} />
          </section>
        </>
      ) : null}

      {variant === "projects" ? (
        <section className={styles.section}>
          <Skeleton height="1.6rem" radius="999px" width="9rem" />
          <Skeleton height="clamp(3rem, 6vw, 5rem)" width="min(28rem, 80vw)" />
          <Skeleton height="1rem" width="min(36rem, 86vw)" />
          <div className={styles.row}>
            <Skeleton height="2.6rem" radius="999px" width="6rem" />
            <Skeleton height="2.6rem" radius="999px" width="6rem" />
            <Skeleton height="2.6rem" radius="999px" width="6rem" />
            <Skeleton className={styles.search} height="2.6rem" radius="999px" width="16rem" />
          </div>
          <CardGrid columns="four" count={8} />
        </section>
      ) : null}

      {variant === "studio" ? (
        <section className={`${styles.section} ${styles.split}`}>
          <div className={styles.stack}>
            <Skeleton height=".9rem" width="14rem" />
            <Skeleton height="clamp(2.8rem, 4.4vw, 4.2rem)" width="90%" />
            <Skeleton height="clamp(2.8rem, 4.4vw, 4.2rem)" width="70%" />
            <Skeleton height="1rem" width="85%" />
            <div className={styles.row}>
              <Skeleton height="3rem" radius="999px" width="10rem" />
              <Skeleton height="3rem" radius="999px" width="12rem" />
            </div>
          </div>
          <div className={styles.papers}>
            <Skeleton height="9rem" radius=".4rem" />
            <Skeleton height="9rem" radius=".4rem" />
            <Skeleton height="9rem" radius=".4rem" />
          </div>
        </section>
      ) : null}

      {variant === "about" ? (
        <section className={`${styles.section} ${styles.split}`}>
          <div className={styles.stack}>
            <Skeleton height="clamp(3rem, 5vw, 4.5rem)" width="80%" />
            <Skeleton height="1rem" width="95%" />
            <Skeleton height="1rem" width="88%" />
            <Skeleton height="1rem" width="60%" />
            <div className={styles.row}>
              <Skeleton height="2rem" radius="999px" width="7rem" />
              <Skeleton height="2rem" radius="999px" width="10rem" />
            </div>
          </div>
          <Skeleton className={styles.polaroid} height="auto" radius=".2rem" style={{ aspectRatio: "4 / 5" }} />
        </section>
      ) : null}
    </main>
  );
}
