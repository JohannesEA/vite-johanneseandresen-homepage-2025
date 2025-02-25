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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    }
  },
};

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary font-semibold mb-3 block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.skills.title}
          </motion.span>
          <motion.h2 
            className="text-3xl font-bold text-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t.skills.subtitle}
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillItem}
                    className="px-4 py-2 bg-background/80 text-foreground text-sm rounded-lg border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
