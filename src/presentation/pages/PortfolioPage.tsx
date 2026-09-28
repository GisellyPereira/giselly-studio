import { experienceContent, portfolioData, skillsContent } from "@/src/data/portfolio";
import { coursesContent } from "@/src/data/courses";
import { Header } from "@/src/presentation/components/layout/Header";
import { Footer } from "@/src/presentation/components/layout/Footer";
import { FeaturedProjectsSection } from "@/src/presentation/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/src/presentation/components/sections/HeroSection";
import { SkillsSection } from "@/src/presentation/components/sections/SkillsSection";
import { CoursesSection } from "@/src/presentation/components/sections/CoursesSection";
import { ExperienceSection } from "@/src/presentation/components/sections/ExperienceSection";
import { ContactSection } from "@/src/presentation/components/sections/ContactSection";

export function PortfolioPage() {
  return (
    <main className="portfolio-home">
      <Header email={portfolioData.email} />
      <HeroSection />
      <FeaturedProjectsSection projects={portfolioData.projects} email={portfolioData.email} />
      <SkillsSection content={skillsContent} />
      <CoursesSection content={coursesContent} />
      <ExperienceSection content={experienceContent} experiences={portfolioData.experiences} />
      <ContactSection email={portfolioData.email} location={portfolioData.location} />
      <Footer role={portfolioData.role} socials={portfolioData.socials} />
    </main>
  );
}
