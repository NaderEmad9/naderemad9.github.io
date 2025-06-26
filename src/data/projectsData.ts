import bugawayImg from '../Assets/bugaway.png';
import taskmanagerImg from '../Assets/task_management.png';
import moviesImg from '../Assets/movies_application.png';
import islamyImg from '../Assets/islamyapplication.png';
import ecommerce from '../Assets/ecommerce.png';
import loganalyzerImg from '../Assets/loganalyzer.png';

export const projectsData = [
  {
    title: 'BugAway',
    description: 'A comprehensive bug tracking app built with Flutter, featuring task assignment, project organization, real-time chat, notifications, and Firebase integration.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'State Management', 'Local Notifications', 'Real-time Chat'],
    githubUrl: 'https://github.com/NaderEmad9/BugAway',
    liveUrl: '#',
    image: bugawayImg
  },
  {
    title: 'Task Management App',
    description: 'A productivity-focused Flutter app to manage tasks efficiently, including categories, deadlines, and reminders.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Firestore', 'Local Notifications', 'State Management'],
    githubUrl: 'https://github.com/NaderEmad9/task_management',
    liveUrl: '#',
    image: taskmanagerImg
  },
  {
    title: 'Log Analyzer',
    description: 'A fast, cross-platform log analysis tool for web and desktop. Upload log files, search, filter, and view stats—all offline and dark mode support.',
    technologies: [
      'React.js',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Tauri',
      'React Router'
    ],
    githubUrl: 'https://github.com/NaderEmad9/log-analyzer',
    liveUrl: '#',
    image: loganalyzerImg
  },
  {
    title: 'Movies Application',
    description: 'A beautiful Flutter app displaying trending movies using a public API with search and filtering features.',
    technologies: ['Flutter', 'Dart', 'TMDB API', 'State Management', 'HTTP', 'Responsive Design'],
    githubUrl: 'https://github.com/NaderEmad9/movies_application/tree/Development',
    liveUrl: '#',
    image: moviesImg
  },
  {
    title: 'Islamy Application',
    description: 'An Islamic app built with Flutter that includes prayer times, Quran recitation, Azkar, and dark mode support.',
    technologies: ['Flutter', 'Dart', 'Provider', 'Responsive Design', 'Local Storage', 'Localization', 'Audio Player'],
    githubUrl: 'https://github.com/NaderEmad9/islamyapplication',
    liveUrl: '#',
    image: islamyImg
  },
  {
    title: 'E-Commerce App',
    description: 'A full-featured Flutter e-commerce application with product browsing, cart functionality, and Firebase backend.',
    technologies: ['Flutter', 'Dart', 'Dio', 'State Management', 'Responsive Design',],
    githubUrl: 'https://github.com/NaderEmad9/E_Commerce',
    liveUrl: '#',
    image: ecommerce
  }
];