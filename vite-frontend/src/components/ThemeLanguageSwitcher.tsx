import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const GB = () => (
  <svg className="w-5 h-5" viewBox="0 0 640 480">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
);

const NO = () => (
  <svg className="w-5 h-5" viewBox="0 0 640 480">
    <path fill="#ed2939" d="M0 0h640v480H0z"/>
    <path fill="#fff" d="M180 0h120v480H180z"/>
    <path fill="#fff" d="M0 180h640v120H0z"/>
    <path fill="#002664" d="M210 0h60v480h-60z"/>
    <path fill="#002664" d="M0 210h640v60H0z"/>
  </svg>
);

export const ThemeLanguageSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={() => setLanguage(language === 'en' ? 'no' : 'en')}
        className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        {language === 'en' ? <GB /> : <NO />}
      </motion.button>

      <motion.button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        {theme === 'light' ? (
          <Moon size={20} className="text-foreground" />
        ) : (
          <Sun size={20} className="text-foreground" />
        )}
      </motion.button>
    </motion.div>
  );
};
