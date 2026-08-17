export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  capabilities: string[];
  engineeringHighlights?: string[];
  systemFlow?: string[];
  badge?: string;
  context?: string;
  github?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  liveDemo?: string;
  featured?: boolean;
  flagShip?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'automated-poultry-farm',
    title: 'Automated Poultry Farm',
    category: 'IoT · AI · Flutter · Arduino · Patent',
    description:
      'A real-world poultry monitoring and control system that combines environmental sensors, automation, and AI-assisted disease detection.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Arduino'],
    highlights: ['Formal patent', 'Real-time monitoring', 'Automated control'],
    capabilities: [
      'Real-time environmental monitoring',
      'Temperature monitoring',
      'Humidity monitoring',
      'Soil moisture monitoring',
      'Ammonia monitoring',
      'Automated cooling fan control',
      'Automated heating control',
      'Real-time alerts',
      'AI vision for chicken disease detection',
      'Flutter environmental dashboard',
    ],
    systemFlow: ['Sensors', 'Firebase', 'Flutter', 'Automation', 'Alerts / AI Vision'],
    engineeringHighlights: ['Real-time environmental monitoring', 'Automated temperature control', 'AI-assisted disease detection'],
    badge: 'PATENTED',
    github: 'https://github.com/DHILIP201',
    githubUrl: 'https://github.com/DHILIP201',
    featured: true,
    flagShip: true,
  },
  {
    slug: 'feynman-tutor',
    title: 'Feynman Tutor — AI Learning OS',
    category: 'AI · RAG · FastAPI · React · Gemini',
    description:
      'An adaptive learning system that helps students learn through retrieval-based explanations, structured knowledge, and guided active learning.',
    technologies: ['FastAPI', 'React', 'Gemini', 'SQLite', 'RAG'],
    highlights: ['Adaptive tutoring', 'RAG over learning material', 'Visual knowledge construction'],
    capabilities: [
      'Adaptive tutoring flow',
      'Retrieval-augmented question answering over learning material',
      'Visual knowledge construction',
      'Active-learning interface',
    ],
    systemFlow: ['Frontend', 'Tutor Engine', 'RAG', 'Gemini', 'SQLite'],
    engineeringHighlights: ['Adaptive tutoring', 'Retrieval-augmented learning', 'Visual knowledge construction'],
    github: 'https://github.com/DHILIP201/FEYNMAN-TUTOR',
    githubUrl: 'https://github.com/DHILIP201/FEYNMAN-TUTOR',
    featured: true,
    flagShip: true,
  },
  {
    slug: 'aegis-x',
    title: 'AEGIS-X',
    category: 'AI · Disaster Intelligence · Emergency Response',
    description:
      'An emergency-response intelligence system for AI incident triage, live camera analysis, tactical mission control, and rapid authority assignment.',
    technologies: ['AI', 'Gemini', 'FastAPI', 'Mission Control'],
    highlights: ['AI incident triage', 'Disaster intelligence', 'Emergency response'],
    capabilities: [
      'AI incident triage',
      'Disaster intelligence',
      'Emergency response',
      'Live camera integration',
      'Gemini-powered analysis',
      'Tactical mission control',
      'Real-time event dispatching',
      'Duplicate incident detection',
      'Authority assignment',
      'Unit dispatch',
      'SITREP generation/export',
    ],
    systemFlow: ['LIVE INPUT', 'AI INCIDENT TRIAGE', 'TACTICAL INTELLIGENCE', 'MISSION CONTROL', 'AUTHORITY / UNIT DISPATCH'],
    engineeringHighlights: ['AI incident triage', 'Live camera integration', 'Authority assignment', 'Tactical mission control'],
    context: "CIH'26 Hackathon",
    github: 'https://github.com/DHILIP201/AEGIS-X',
    githubUrl: 'https://github.com/DHILIP201/AEGIS-X',
    linkedInUrl: 'https://lnkd.in/p/gvf2Wcgd',
    featured: true,
  },
  {
    slug: 'ksp-nethra',
    title: 'KSP Nethra',
    category: 'AI · OSINT · Crime Intelligence · Datathon',
    description:
      'A crime-intelligence system that correlates OSINT signals, validates facts, and presents structured intelligence with confidence scoring.',
    technologies: ['AI', 'OSINT', 'Python', 'Correlation Engine'],
    highlights: ['Deterministic correlation', 'Factual integrity handling', 'Knowledge graph output'],
    capabilities: [
      'Deterministic correlation engine',
      'GNews OSINT parsing',
      'No-hallucination enforcement',
      'Confidence scoring',
      'Crime intelligence',
      'Factual integrity handling',
      'PDF export',
      'Knowledge graph / intelligence presentation',
    ],
    systemFlow: ['OSINT SOURCES', 'CORRELATION ENGINE', 'FACT VALIDATION', 'CONFIDENCE', 'INTELLIGENCE OUTPUT'],
    engineeringHighlights: ['Deterministic correlation engine', 'Factual integrity handling', 'Confidence scoring', 'Knowledge graph presentation'],
    context: 'Datathon',
    github: 'https://github.com/DHILIP201/DATATHON-KSP-Crime-Database',
    githubUrl: 'https://github.com/DHILIP201/DATATHON-KSP-Crime-Database',
    linkedInUrl: 'https://lnkd.in/p/gvf2Wcgd',
    featured: true,
  },
  {
    slug: 'aegis-stadium-system',
    title: 'AEGIS Stadium System',
    category: 'AI · Simulation · Stadium Digital Twin',
    description:
      'A stadium simulation system combining digital-twin behavior, agent debate, and mission-control visualization for complex event scenarios.',
    technologies: ['AI', 'Simulation', 'Digital Twin'],
    highlights: ['Stadium digital twin', 'Mission control', 'Agent debate engine'],
    capabilities: [
      'Stadium digital twin',
      'Mission control',
      'Agent debate engine',
      'Simulation engine',
      'Real-time system behavior',
    ],
    systemFlow: ['STADIUM DIGITAL TWIN', 'SIMULATION ENGINE', 'AGENT DEBATE', 'MISSION CONTROL'],
    engineeringHighlights: ['Stadium digital twin', 'Simulation engine', 'Agent debate', 'Mission control'],
    context: 'Google Prompt Wars',
    github: 'https://github.com/DHILIP201/AEGIS-STADIUM-SYSTEM',
    githubUrl: 'https://github.com/DHILIP201/AEGIS-STADIUM-SYSTEM',
    linkedInUrl: 'https://lnkd.in/p/gpJABPx4',
  },
  {
    slug: 'nexus-movies',
    title: 'NEXUS MOVIES',
    category: 'Web · Product Development',
    description:
      'An independently developed product focused on movie discovery, product clarity, and a polished browsing experience.',
    technologies: [],
    highlights: ['Independent product work', 'Movie discovery experience', 'Product development'],
    capabilities: ['Product development', 'Movie discovery experience', 'User-focused browsing', 'Independent project'],
    github: 'https://github.com/DHILIP201/NEXUS-MOVIES',
    githubUrl: 'https://github.com/DHILIP201/NEXUS-MOVIES',
    linkedInUrl: 'https://lnkd.in/p/gvwd9qxf',
  },
  {
    slug: 'voice-finance-tracker',
    title: 'Voice-Controlled Personal Finance Tracker',
    category: 'FinTech · AI · Voice',
    description:
      'A finance assistant for voice-first transaction entry, SMS parsing, and AI-driven budgeting guidance.',
    technologies: ['Flask', 'MongoDB', 'GPT-4o Mini'],
    highlights: ['Voice-driven entry', 'SMS parsing', 'Budget alerts'],
    capabilities: [
      'Voice-driven transaction entry',
      'SMS parsing',
      'Automatic expense detection',
      'Expense logging',
      'Analytics dashboard',
      'CRUD functionality',
      'Real-time budget alerts',
      'AI financial coaching',
    ],
    github: 'https://github.com/DHILIP201',
    githubUrl: 'https://github.com/DHILIP201',
  },
  {
    slug: 'peter-england-ecommerce',
    title: 'Peter England E-Commerce Mobile Application',
    category: 'Mobile · E-Commerce',
    description:
      'A mobile shopping experience with authentication, responsive product interactions, and smooth app navigation.',
    technologies: ['Flutter', 'Dart', 'Google Firebase'],
    highlights: ['E-commerce interface', 'Authentication', 'Responsive UI'],
    capabilities: [
      'E-commerce interface',
      'User authentication',
      'Google Mail integration',
      'SMS verification',
      'Responsive UI',
      'Interactive components',
      'Animated app logo',
      'State management',
      'Smooth navigation',
    ],
    github: 'https://github.com/DHILIP201',
    githubUrl: 'https://github.com/DHILIP201',
  },
  {
    slug: 'movie-review',
    title: 'Movie Review Website',
    category: 'Web Development',
    description:
      'A lightweight movie review platform for browsing films, reading reviews, and submitting new ones.',
    technologies: [],
    highlights: ['Browse movies', 'Read reviews', 'Submit reviews'],
    capabilities: ['Browse movies', 'Read reviews', 'Submit reviews', 'Responsive interface'],
    github: 'https://github.com/DHILIP201',
    githubUrl: 'https://github.com/DHILIP201',
  },
];
