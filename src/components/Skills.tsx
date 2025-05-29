import React from 'react';
import { useLanguage } from './LanguageProvider';
import { skillsData } from '../data/skillsData';
import about from '../Assets/about.png';

const Skills = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {translations[language].skills.title}
        </h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex flex-col items-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon.startsWith('http') ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span>{skill.icon}</span>
                )}
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
        
        {/* Character and Motto */}
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <img
            src={about}
            alt="About"
            className="mx-auto w-full max-w-xs md:max-w-md h-auto"
            style={{ borderRadius: 0, background: "none", boxShadow: "none" }}
            />
          </div>
          <div className="bg-white dark:bg-gray-700 px-8 py-4 rounded-lg shadow-md">
            <p className="text-lg font-medium flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11282/11282307.png"
                alt="Growth Icon"
                className="w-6 h-6"
                style={{ display: 'inline-block' }}
              />
              {translations[language].skills.motto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
