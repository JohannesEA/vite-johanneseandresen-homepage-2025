import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const experiences = [
  {
    company: "Sonat",
    period: "01.2025 - Present",
    role: "Developer",
    period_no: "01.2025 - Nå",
    role_no: "Utvikler",
  },
  {
    company: "Fremtind Forsikring",
    period: "10.2024 - 01.2025",
    role: "Developer",
    period_no: "10.2024 - 01.2025",
    role_no: "Utvikler",
  },
  {
    company: "Eika Forsikring",
    period: "01.2024 - 10.2024",
    role: "Developer",
    period_no: "01.2024 - 10.2024",
    role_no: "Utvikler",
  },
  {
    company: "Eika Gruppen",
    period: "02.2022 - 01.2024",
    role: "Developer",
    period_no: "02.2022 - 01.2024",
    role_no: "Utvikler",
  },
  {
    company: "Erdahl Andresen IT",
    period: "01.2023 - Present",
    role: "Founder & Developer",
    period_no: "01.2023 - Nå",
    role_no: "Grunnlegger & Utvikler",
  },
  {
    company: "Aize",
    period: "06.2021 - 08.2021",
    role: "Summer Intern",
    period_no: "06.2021 - 08.2021",
    role_no: "Sommerjobb",
  },
];

export const WorkExperience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold mb-2 block">
            {language === "en" ? "Experience" : "Erfaring"}
          </span>
          <h2 className="text-3xl font-bold">
            {language === "en" ? "Work Experience" : "Arbeidserfaring"}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20">
            <motion.div
              className="absolute top-0 w-full bg-primary"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* Content card */}
                <motion.div
                  className={`relative ml-6 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-[50%] md:pr-12"
                      : "md:ml-[50%] md:pl-12"
                  }`}
                  initial={{ 
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50
                  }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">
                        {language === "en" ? exp.role : exp.role_no}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {language === "en" ? exp.period : exp.period_no}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
