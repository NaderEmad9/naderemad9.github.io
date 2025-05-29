import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import MouseAnimation from './MouseAnimation';

const Hero = () => {
  const { language, translations } = useLanguage();

  // Scroll to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1a2980] dark:from-[#0f2027] dark:via-[#2c5364] dark:to-[#1a2980]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated sparkle above name */}
        <div className="relative mb-4">
          <Sparkles className="w-8 h-8 text-yellow-400 mx-auto animate-pulse" />
        </div>

        {/* Name with subtle animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Nader Emad Mohamed
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 font-light">
          {translations[language].hero.title}
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="https://drive.google.com/file/d/1--sFDY-kfeLq-wWJwVvFWXhfarvWKM53/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center transition-colors h-[48px]"
          >
            <Download className="w-4 h-4 mr-2" />
            {translations[language].hero.downloadCV}
          </a>
          <Button
            variant="outline"
            className="px-6 py-3 rounded-xl flex items-center justify-center h-[48px]"
            onClick={handleContactClick}
          >
            <Mail className="w-4 h-4 mr-2" />
            {translations[language].hero.contactMe}
          </Button>
        </div>

        {/* Social Links with Brand Colors */}
        <div className="flex gap-8 justify-center mb-16">
          <a
            href="https://github.com/NaderEmad9"
            className="bg-black hover:bg-gray-800 text-white p-3 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/naderr-emadd"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/966539812835"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
          <a
            href="mailto:naderemadwork@gmail.com"
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-12">
          <MouseAnimation />
          <p className="text-sm text-gray-200 dark:text-gray-400 mt-2">
            {translations[language].hero.scrollDown}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;