// src/content/projects.ts
export type Project = {
  slug: string;
  title: string;
  blurb: string;
  stack: string[];        // tech badges
  repo: string;           // GitLab/GitHub URL
  demo?: string;          // live-demo URL, if any
  image: string;          // thumbnail in /public/images/
};

// Group by a “category” field for skill-set
export const projects: Array<Project & { category: string }> = [
  {
    slug: 'signal-verse',
    category: 'AI + Traffic Engineering',
    title: 'Signal Verse',
    blurb: 'LLM-powered Q&A for traffic-signal engineers.',
    stack: ['Python', 'LangChain', 'MySQL'],
    repo: 'https://github.com/SageGarg/signalVerse',
    demo: 'http://trafficsignalverse.com/',
    image: '/images/signalverse.png',
  },
  {
    slug: 'yellow-light',
    category: 'AI + Traffic Engineering',
    title: 'Yellow Light Detection',
    blurb: 'Computer-vision analysis of driver behavior at yellow signals.',
    stack: ['Python', 'OpenCV', 'TensorFlow'],
    repo: 'https://gitlab.com/org/yellow-light?ref=SageenaGarg',
    demo: '',
    image: '/images/yellowlight.png',
  },
  {
    slug: 'travelmate-android',
    category: 'Mobile Apps',
    title: 'TravelMate (Android)',
    blurb: 'Trip planner with gallery, chat (WebSockets), weather API.',
    stack: ['Java', 'Spring Boot', 'Android'],
    repo: 'https://gitlab.com/org/travelmate-android?ref=SageenaGarg',
    demo: '',
    image: '/images/travelmate-android.png',
  },
  {
    slug: 'travelmate-web',
    category: 'Web & Full-Stack',
    title: 'TravelMate (Website)',
    blurb: 'React/Tailwind UI + Node/Express/MongoDB backend.',
    stack: ['React', 'Tailwind', 'MongoDB'],
    repo: 'https://gitlab.com/org/travelmate-web?ref=SageenaGarg',
    demo: '',
    image: '/images/travelmate-web.png',
  },
  {
    slug: 'movie-sorter',
    category: 'Web & Full-Stack',
    title: 'Movie Sorter',
    blurb: 'Node script + simple UI to sort and rank films by genre/ratings.',
    stack: ['Node.js', 'Express', 'EJS'],
    repo: 'https://gitlab.com/org/movie-sorter?ref=SageenaGarg',
    demo: '',
    image: '/images/moviesorter.png',
  },
];
