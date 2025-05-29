
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const { language, translations } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {translations[language].projects.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-2xl">
              {/* Project Image */}
              <div className="aspect-[2400/1782] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-gray-600 hover:text-blue-600">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Button */}
                {project.githubUrl && (
                  <Button 
                    variant="outline" 
                    className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {projectsData.length > 6 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl"
            >
              {showAll ? translations[language].projects.showLess : translations[language].projects.seeMore}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
