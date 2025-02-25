import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["TypeScript", "React", "Next.js", "Vue", "Angular", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Kotlin", "Java", "Node.js", "Python", "C# .NET"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "Expo", "Firebase"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firestore"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Azure DevOps", "Docker", "Kubernetes", "CI/CD"],
  },
];

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-background dark:via-background dark:to-background py-20">
      <div className="absolute inset-0 dark:bg-grid-white/[0.05] bg-grid-black/[0.05] pointer-events-none" />
      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">
            {t.skills.title}
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            {t.skills.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
