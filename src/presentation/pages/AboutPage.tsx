"use client";
import { useI18n } from "@/src/i18n/use-i18n";
import { aboutContent as originalAboutContent } from "@/src/data/about";
import { coursesContent as originalCoursesContent } from "@/src/data/courses";
import { portfolioData as originalPortfolioData } from "@/src/data/portfolio";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { Header } from "@/src/presentation/components/layout/Header";
import { AboutSection } from "@/src/presentation/components/sections/AboutSection";
import { CoursesSection } from "@/src/presentation/components/sections/CoursesSection";
import styles from "./about-page.module.css";

export function AboutPage() {
  const { localize } = useI18n();
  const aboutContent = localize(originalAboutContent);
  const coursesContent = localize(originalCoursesContent);
  const portfolioData = localize(originalPortfolioData);
  return (
    <main className={styles.page}>
      <Header email={portfolioData.email} accent />
      <AboutSection content={aboutContent} />
      <CoursesSection content={coursesContent} />
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
    </main>
  );
}
