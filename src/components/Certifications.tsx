import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';
import { certificationsData } from '../data/certificationsData';
import blackEfLogo from '../Assets/black_ef.png';
import whiteEfLogo from '../Assets/white_ef.png';

// Optional: Map issuer to logo/icon
const issuerLogos: Record<string, { light: string; dark: string } | string> = {
  "Udemy": "https://www.vectorlogo.zone/logos/udemy/udemy-icon.svg",
  "freeCodeCamp": {
    light: "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg",
    dark: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.svg"
  },
  "Coursera": "https://www.vectorlogo.zone/logos/coursera/coursera-icon.svg",
  "Route Academy": "https://scontent.fruh2-2.fna.fbcdn.net/v/t39.30808-6/241513285_4254592044636278_6228006272036394703_n.png?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iULE3yO7wMcQ7kNvwEancMy&_nc_oc=AdkeIu7Yqbk4pucBJNP3GcCfkjigLfvGKLbraijuE3uJ9oLxiXa1_EVB3tqlDnFpTGr2nJtoNsWwf9eW939u3D5O&_nc_zt=23&_nc_ht=scontent.fruh2-2.fna&_nc_gid=WmJ8CSHAWLmIKiceXpc6yA&oh=00_AfLfP6RIXpEJpY5a9gXz8nK3MQ1ut3WQE2eXgLQMDGADlw&oe=683CFB81",
  "EF SET": {
    light: blackEfLogo,
    dark: whiteEfLogo
  }
};

const Certifications = () => {
  const { language, translations } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {translations[language].certifications.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  {cert.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  {/* Conditionally render freeCodeCamp and EF SET logo for light/dark */}
                  {cert.issuer === "freeCodeCamp" ? (
                    <img
                      src={
                        theme === 'dark'
                          ? (issuerLogos[cert.issuer] as { dark: string; light: string }).dark
                          : (issuerLogos[cert.issuer] as { dark: string; light: string }).light
                      }
                      alt={cert.issuer}
                      className="w-6 h-6 rounded object-contain"
                      style={{ background: 'transparent' }}
                    />
                  ) : cert.issuer === "EF SET" ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        height: 36,
                        background: theme === 'dark' ? 'transparent' : 'white',
                        borderRadius: 4,
                        padding: 2,
                      }}
                    >
                      <img
                        src={
                          theme === 'dark'
                            ? (issuerLogos[cert.issuer] as { dark: string; light: string }).dark
                            : (issuerLogos[cert.issuer] as { dark: string; light: string }).light
                        }
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                        style={{
                          background: 'transparent',
                          filter: theme === 'dark' ? 'drop-shadow(0 0 2px #fff)' : 'none',
                        }}
                      />
                    </span>
                  ) : (
                    issuerLogos[cert.issuer] && (
                      <img
                        src={typeof issuerLogos[cert.issuer] === 'string' ? issuerLogos[cert.issuer] as string : ''}
                        alt={cert.issuer}
                        className="w-6 h-6 rounded object-contain"
                        style={{ background: 'transparent' }}
                      />
                    )
                  )}
                  <span className="text-base font-semibold text-gray-700 dark:text-gray-200">{cert.issuer}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{cert.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{cert.date}</span>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Credential
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
