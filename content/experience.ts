export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: 'MERN Stack Intern',
    company: 'Live Stream Technologies',
    period: 'May 2026',
    description: [
      'Hands-on full-stack development',
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Backend architecture',
      'Frontend/backend integration',
      'API integration',
      'Server-side development',
    ],
  },
  {
    title: 'Flutter Intern',
    company: 'App Innovation Foundation',
    period: 'May 2024 – June 2024',
    description: [
      'Flutter development',
      'Dart',
      'UI widgets',
      'State architecture',
      'Team collaboration',
      'Version control',
    ],
  },
];
