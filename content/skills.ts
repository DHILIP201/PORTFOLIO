export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Dart', 'C++', 'HTML/CSS'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Flutter'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask'],
  },
  {
    title: 'Data',
    items: ['MongoDB', 'SQL', 'Google Firebase'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Arduino'],
  },
];

export const skillUsage: Record<string, string[]> = {
  React: ['MERN internship', 'Feynman Tutor', 'Full-stack applications'],
  Flutter: ['Automated Poultry Farm', 'Peter England E-Commerce Mobile Application'],
  'Node.js': ['MERN internship', 'Server-side development'],
  'Express.js': ['MERN internship'],
  Flask: ['Voice-Controlled Personal Finance Tracker'],
  MongoDB: ['MERN internship', 'Voice-Controlled Personal Finance Tracker'],
  'Google Firebase': ['Automated Poultry Farm', 'Peter England E-Commerce Mobile Application'],
  Arduino: ['Automated Poultry Farm'],
  Gemini: ['Feynman Tutor'],
  SQLite: ['Feynman Tutor'],
};
