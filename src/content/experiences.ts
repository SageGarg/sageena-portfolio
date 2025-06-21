// src/content/experiences.ts
export type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  skills: string[];
  link?: string;
};

export const professionalExperiences: Experience[] = [
  {
    role: 'Undergrad Research Assistant',
    company: 'Iowa State University Research Park',
    location: 'Iowa State University',
    dates: 'May 2024 – Present',
    responsibilities: [
      'Built RAG pipelines with LangChain and MySQL for document Q&A',
      'Developed Flask microservices and integrated OpenAI APIs',
    ],
    skills: ['Python', 'Flask', 'LangChain', 'MySQL'],
    link: '/projects#signal-verse',
  },

  {
    role: 'Teaching Assistant',
    company: 'Dept. of Computer Science',
    location: 'Iowa State University',
    dates: 'May 2024 – Present',
    responsibilities: [
      'Built RAG pipelines with LangChain and MySQL for document Q&A',
      'Developed Flask microservices and integrated OpenAI APIs',
    ],
    skills: ['Python', 'Flask', 'LangChain', 'MySQL'],
    link: '/projects#signal-verse',
  },
  // …add more professional roles…
];

export const leadershipExperiences: Experience[] = [
  {
    role: 'Social Media Lead',
    company: 'Google DSC, ISU Chapter',
    location: 'Ames, IA',
    dates: 'Sep 2023 – May 2024',
    responsibilities: [
      'Doubled engagement (+120%) through targeted campaigns',
      'Managed a team of 5 and tracked metrics with Google Analytics',
    ],
    skills: ['Content Strategy', 'Analytics', 'Figma'],
  },
  {
    role: 'Social Media Lead',
    company: 'Google DSC, ISU Chapter',
    location: 'Ames, IA',
    dates: 'Sep 2023 – May 2024',
    responsibilities: [
      'Doubled engagement (+120%) through targeted campaigns',
      'Managed a team of 5 and tracked metrics with Google Analytics',
    ],
    skills: ['Content Strategy', 'Analytics', 'Figma'],
  },
  {
    role: 'Social Media Lead',
    company: 'Google DSC, ISU Chapter',
    location: 'Ames, IA',
    dates: 'Sep 2023 – May 2024',
    responsibilities: [
      'Doubled engagement (+120%) through targeted campaigns',
      'Managed a team of 5 and tracked metrics with Google Analytics',
    ],
    skills: ['Content Strategy', 'Analytics', 'Figma'],
  }
  // …add more leadership roles…
];
