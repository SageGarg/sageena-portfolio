'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Projects } from '@/content/projects';

export default function About() {
  // Flatten all project entries
  const all = Projects.flatMap((sec) => sec.data);

  // Build skill→project list
  const skillMap: Record<string, typeof all> = {};
  all.forEach((p) => {
    p.stack.forEach((skill) => {
      (skillMap[skill] ||= []).push(p);
    });
  });

  const [openSkill, setOpenSkill] = useState<string | null>(null);
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 space-y-12">
      {/* 1. Header with photo & bio side-by-side */}
      <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:space-x-8">
        {/* Photo */}
        <img
          src="/images/me.png"
          alt="Sageena Garg"
          className="h-40 w-40 flex-shrink-0 rounded-full object-cover shadow-lg"
        />

        {/* Title & Bio */}
        <div className="mt-6 md:mt-0">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 max-w-xl text-gray-700 dark:text-gray-300">
            I’m Sageena Garg, a junior studying Computer Science at Iowa State
            University. I work as an undergrad research assistant, where I build
            AI tools and mobile apps. I’ve made Android projects, full-stack web
            apps with React and Node.js, and I’m always learning new cloud
            services to power my work.
          </p>
        </div>
      </div>

      {/* Interactive Skills & Proof */}
         <div className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold">Skill Set</h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(skillMap).map(([skill, list]) => {
          const isOpen = openSkill === skill;
          return (
            <div
              key={skill}
              className="relative"
              onMouseEnter={() => setOpenSkill(skill)}
              onMouseLeave={() => setOpenSkill(null)}
            >
              {/* skill badge */}
              <button className="rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-700 hover:scale-105 transition">
                {skill}
              </button>

              {/* hover panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 
                               bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-lg 
                               shadow-lg p-4"
                  >
                    {/* little arrow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    w-3 h-3 rotate-45 bg-white dark:bg-zinc-800" />

                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Used in:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      {list.map(p => (
                        <li key={p.title}>
                          <Link
                            href={`/projects#${p.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-pink-700 hover:underline"
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>

      {/* 5. Education */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <p className="text-gray-700 dark:text-gray-300">
          B.Sc. Computer Science, Iowa State University &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Expected December 2026 • GPA: 3.72 / 4.0
        </p>
      </div>

      {/* 7. Call to Action */}
      <div className="text-center">
        <a
          href="/Resume__Sageena_Garg.pdf"
          className="rounded bg-pink-700 px-6 py-2 text-white hover:bg-pink-600"
        >
          Download Résumé
        </a>
      </div>
    </section>
  );
}
