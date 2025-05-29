import React from 'react';
import { useLanguage } from './LanguageProvider';
import avatar from '../Assets/avatar.png';

const About = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {translations[language].about.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {translations[language].about.description}
            </p>
          </div>
          <div className="text-center">
            <img
              src={avatar}
              alt="Avatar"
              className="mx-auto w-full max-w-xs md:max-w-md h-auto"
              style={{ borderRadius: 0, background: "none", boxShadow: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;