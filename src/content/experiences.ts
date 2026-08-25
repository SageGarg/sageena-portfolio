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
    role: "IIoT Software Engineering Intern",
    company: "Grace Technologies",
    location: "Davenport, Iowa",
    dates: "May 2026 – Present",
    responsibilities: [
      "Built a production MCP (Model Context Protocol) server with dual-authentication architecture, serving both external customers (OAuth) and internal employees (Entra ID) with tenant-isolated access to IIoT platform data",
      "Designed the AuthZ engine, tenant isolation layer, and audit logging system enforcing role-based tool access and zero cross-customer data leakage across the MCP tool registry",
      "Improving OCR-based purchase order extraction and field-validation logic, including structured data mapping and price-tier mismatch detection for an automated order intake pipeline",
    ],
    skills: [
      "Python",
      "C#",
      "MCP",
      "OAuth",
      "Entra ID",
      "Azure Functions",
      "OCR",
      "Azure",
    ],
  },
  {
    role: "Undergrad Research Assistant",
    company: "Iowa State University Research Park",
    location: "Ames, Iowa",
    dates: "Feb 2024 – Present",
    responsibilities: [
      "Designed and implemented RAG (Retrieval-Augmented Generation) pipelines using LLMs and vector embeddings for evidence-grounded querying of domain-specific transportation datasets",
      "Built structured data ingestion and normalization workflows for tabular and semi-structured data (CSV, Excel, PDF), enabling reliable querying across sensors, testing stages, and locations",
      "Deployed and maintained a production Flask/LangChain web app on AWS EC2, integrating OpenAI GPT-4 and Chroma for embedding-based similarity search to reduce hallucinations",
    ],
    skills: [
      "Python",
      "Flask",
      "LangChain",
      "OpenAI GPT-4",
      "Chroma",
      "MySQL",
      "AWS (EC2)",
      "Tableau",
      "Power BI",
    ],
    link: "/projects#signal-verse",
  },
  {
    role: "Data & Web Solutions Intern",
    company: "Netqom Software Pvt. Ltd. ",
    location: "Los Angeles, California",
    dates: "Jun 2025 - Jul 2025",
    responsibilities: [
      "Automated Upwork CSV cleaning with Python, reducing reporting time 75% (8 hrs → 2 hrs).",
      " Re-built dashboard to visualize proposal win rates, client revenue, and timelines, reducing bid response time by 15%.",
    ],
    skills: ["React", "Tableau", "JavaScript", "MySQL"],
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
    role: "Vice President",
    company: "LAS Student Council, Iowa State University",
    location: "Ames, IA",
    dates: "Aug 2026 – Present",
    responsibilities: [
      "Promoted from Secretary to Vice President after one term",
      "Lead council initiatives representing the College of Liberal Arts and Sciences student body",
    ],
    skills: ["Leadership", "Student Governance"],
  },
  {
    role: "Director of Technology",
    company: "180 Degrees Consulting, ISU Chapter",
    location: "Ames, IA",
    dates: "Jan 2026 – Present",
    responsibilities: [
      "Led technology strategy across client consulting engagements, meeting directly with clients to scope needs and manage delivery for two concurrent projects",
      "Directing a shift toward supporting socially conscious organizations pro bono, expanding the chapter's mission-driven client base",
    ],
    skills: ["Client Management", "Technical Strategy", "Consulting"],
  },
  {
    role: "Appointed Member",
    company: "LAS Pulse (Dean's Undergraduate Student Advisory Council)",
    location: "Ames, IA",
    dates: "2026-27",
    responsibilities: [
      "Appointed to advise Dean Benjamin Withers and college leadership on student climate, culture, and access within the College of Liberal Arts and Sciences",
    ],
    skills: ["Advisory", "Student Advocacy"],
  },
  {
    role: "Secretary",
    company: "LAS Student Council, Iowa State University",
    location: "Ames, IA",
    dates: "Jan 2026 – May 2026",
    responsibilities: [
      "Managed council records, meeting minutes, and internal communications for the College of Liberal Arts and Sciences student body",
    ],
    skills: ["Organization", "Communication"],
  },
  {
    role: "Undergraduate Research Ambassador",
    company: "Iowa State University",
    location: "Ames, IA",
    dates: "2025 – Present",
    responsibilities: [
      "Promote undergraduate research opportunities through social media and outreach initiatives",
    ],
    skills: ["Outreach", "Social Media"],
  },
  {
    role: "Industry Relations Chair",
    company: "ISU Data Science Club",
    location: "Ames, IA",
    dates: "– Dec 2025",
    responsibilities: [
      "Built relationships with 5+ companies and hosted 3 networking events with 50+ attendees",
    ],
    skills: ["Industry Relations", "Event Planning"],
  },
];
