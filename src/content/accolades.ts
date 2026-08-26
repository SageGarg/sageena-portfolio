// src/content/accolades.ts
export interface Accolade {
  title: string;
  description?: string;
  year?: string;
}

export const accolades: Accolade[] = [
  { title: "Ranked top 2% in Class of 2027" },
  {
    title: "AI at ISU Innovation Challenge",
    description: "4th Place",
    year: "2026",
  },
  {
    title: "National Collegiate Research Conference (NCRC)",
    description: "Presented research — Harvard University",
    year: "2026",
  },
  {
    title: "Ivy Data Visualization and Storytelling Case Competition",
    description: "1st Place",
    year: "Feb 2025",
  },
  {
    title: "ISU JPEC Startup Pitch-Off Competition",
    description: "1st Place",
    year: "Feb 2025",
  },
  {
    title: "MOVITE Poster Competition",
    description: "3rd Place",
    year: "Oct 2024",
  },
  { title: "winCode Hackathon", description: "1st Place" },
  { title: "Math-O-Run", description: "1st Place" },
  { title: "Young Einstein of The Year", year: "2021" },
  { title: "President's Award for International Student Excellence" },
  { title: "Liberal Arts and Sciences Deans Academic Excellence" },
  { title: "Lynn and Carol Glass Honors Scholarship" },
  { title: "Bian Li Women in Computer Science Endowed Scholarship" },
  { title: "Global Scholars Award — Undergraduate Retention" },
  { title: "Sulentic Family Success Grant" },
];
