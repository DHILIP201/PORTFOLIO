import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { SelectedWork } from '@/components/selected-work';
import { EngineeringSnapshot } from '@/components/engineering-snapshot';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { SkillsSection } from '@/components/skills-section';
import { EducationSection } from '@/components/education-section';
import { AchievementsSection } from '@/components/achievements-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navigation />
      <Hero />
      <SelectedWork />
      <EngineeringSnapshot />
      <ExperienceTimeline />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
