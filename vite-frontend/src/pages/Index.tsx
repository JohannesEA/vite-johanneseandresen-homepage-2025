import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeLanguageSwitcher />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
    </div>
  );
};

export default Index;
