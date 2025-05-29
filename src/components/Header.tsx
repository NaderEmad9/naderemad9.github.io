
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translations } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: translations[language].nav.home },
    { id: 'about', label: translations[language].nav.about },
    { id: 'skills', label: translations[language].nav.skills },
    { id: 'projects', label: translations[language].nav.projects },
    { id: 'certifications', label: translations[language].nav.certifications },
    { id: 'contact', label: translations[language].nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="font-bold text-xl text-gray-900 dark:text-white">
            Nader Emad
          </div>

          {/* Navigation - Hidden on mobile, shown on md+ */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium rounded-xl px-3 py-2 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-xl"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 rounded-xl"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline">
                {language === 'en' ? 'عربي' : 'English'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
