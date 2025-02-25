import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto"
      >
        <span className="text-primary font-semibold mb-2 block">{t.about.title}</span>
        <h2 className="text-3xl font-bold mb-8 text-foreground">{t.about.subtitle}</h2>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-muted-foreground mb-6">
            {t.about.paragraph1}
          </p>
          <p className="text-muted-foreground mb-6">
            {t.about.paragraph2}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
