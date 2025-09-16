// src/content/accolades.ts
export interface Accolade {
  title: string;
  description?: string;
  year?: string;
}

export const accolades: Accolade[] = [
  { title: "Ranked top 2% in Class of 2027" },
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
  { title: "President’s Award for International Student Excellence" },
];
