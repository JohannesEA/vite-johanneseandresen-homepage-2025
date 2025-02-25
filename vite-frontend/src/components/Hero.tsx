import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-background dark:via-background dark:to-background">
      <div className="absolute inset-0 dark:bg-grid-white/[0.05] bg-grid-black/[0.05]" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-background/5 dark:to-transparent" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(var(--primary), 0.05) 0%, rgba(var(--secondary), 0.05) 25%, rgba(var(--primary), 0.025) 50%, transparent 100%)',
          opacity: 0.8,
        }}
      />
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left flex-1"
        >
          <span className="text-primary font-semibold mb-4 block animate-fade-up">
            {t.hero.role}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.2s" }}>
            Johannes Erdahl Andresen
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {t.hero.description}
          </p>
          <div className="flex flex-col gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a 
              href="mailto:johannes.erdahl.andresen@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={18} />
              <span>johannes.erdahl.andresen@gmail.com</span>
            </a>
            <a 
              href="tel:+4799509035"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="text-primary group-hover:scale-110 transition-transform" size={18} />
              <span>+47 99509035</span>
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com/JohannesEA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/johannes-erdahl-andresen-2aa117205/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6 dark:bg-primary/10"></div>
            <img
              src="/johannes.jpg"
              alt="Johannes Erdahl Andresen"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-lg dark:shadow-primary/5"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl dark:bg-primary/10"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-muted rounded-full blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};
