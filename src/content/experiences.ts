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
    role: "Data & Web Solutions Intern 5",
    company: "Netqom Software Pvt. Ltd. ",
    location: "Chandigarh, India",
    dates: "Jul 2025 - Aug 2025",
    responsibilities: [
      "Automated Upwork CSV cleaning with Python, reducing reporting time 75% (8 hrs → 2 hrs).",
      " Re-built dashboard to visualize proposal win rates, client revenue, and timelines, reducing bid response time by 15%.",
    ],
    skills: ["React", "Tableau", "JavaScript", "MySQL"],
    link: "/projects#signal-verse",
  },
  {
    role: "Undergrad Research Assistant",
    company: "Iowa State University Research Park",
    location: "Iowa State University",
    dates: "Feb 2024 – Present",
    responsibilities: [
      "Built RAG pipelines with LangChain and MySQL for document Q&A",
      "Developed Flask microservices and integrated OpenAI APIs",
    ],
    skills: ["Python", "Flask", "LangChain", "MySQL"],
    link: "/projects#signal-verse",
  },
  {
    role: "Student Office Assistant",
    company: "International Students & Scholars Office",
    location: "Iowa State University",
    dates: "Jan 2025 – Present",
    responsibilities: [
      "Provide accurate, organized, and confidential administrative support, enhancing database integrity and system performance.",
      "Communicate effectively with individuals from diverse cultural, social, linguistic, and national backgrounds.",
    ],
    skills: [
      "Administrative Support",
      "Data Management",
      "Communication",
      "Customer Service",
    ],
    // link: '/projects#signal-verse',
  },

  {
    role: "Teaching Assistant",
    company: "Dept. of Computer Science",
    location: "Iowa State University",
    dates: "Dec 2023 – May 2024",
    responsibilities: [
      "Led coding help sessions for COMS 1040 (Introduction to Programming - Python) and COMS 1130 (Spreadsheets and Databases), mentoring students in Python.",
      "In COMS 1130 course, guided students in effectively using MS Office tools—Access, Excel, and Word.",
    ],
    skills: ["Python", "MS Excel", "MS Access"],
    // link: '/projects#signal-verse',
  },
  // …add more professional roles…
];

export const leadershipExperiences: Experience[] = [
  {
    role: "Social Media Lead",
    company: "Google DSC, ISU Chapter",
    location: "Ames, IA",
    dates: "Sep 2023 – May 2024",
    responsibilities: [
      "Doubled engagement (+120%) through targeted campaigns",
      "Managed a team of 5 and tracked metrics with Google Analytics",
    ],
    skills: ["Content Strategy", "Analytics", "Figma"],
  },
  {
    role: "Social Media Lead",
    company: "Google DSC, ISU Chapter",
    location: "Ames, IA",
    dates: "Sep 2023 – May 2024",
    responsibilities: [
      "Doubled engagement (+120%) through targeted campaigns",
      "Managed a team of 5 and tracked metrics with Google Analytics",
    ],
    skills: ["Content Strategy", "Analytics", "Figma"],
  },
  {
    role: "Social Media Lead",
    company: "Google DSC, ISU Chapter",
    location: "Ames, IA",
    dates: "Sep 2023 – May 2024",
    responsibilities: [
      "Doubled engagement (+120%) through targeted campaigns",
      "Managed a team of 5 and tracked metrics with Google Analytics",
    ],
    skills: ["Content Strategy", "Analytics", "Figma"],
  },
  // …add more leadership roles…
];
