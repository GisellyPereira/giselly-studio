import { aboutContent } from "@/src/data/about";
import { coursesContent } from "@/src/data/courses";
import { portfolioData } from "@/src/data/portfolio";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { Header } from "@/src/presentation/components/layout/Header";
import { AboutSection } from "@/src/presentation/components/sections/AboutSection";
import { CoursesSection } from "@/src/presentation/components/sections/CoursesSection";
import styles from "./about-page.module.css";

export function AboutPage() {
  return (
    <main className={styles.page}>
      <Header email={portfolioData.email} accent />
      <AboutSection content={aboutContent} />
      <CoursesSection content={coursesContent} />
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
    </main>
  );
}
