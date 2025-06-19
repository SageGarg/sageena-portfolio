'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Projects } from '@/content/projects';

export default function AboutSkills() {
  const all = Projects.flatMap(sec => sec.data);
  const skillMap: Record<string, typeof all> = {};
  all.forEach(p => p.stack.forEach(skill => {
    (skillMap[skill] ||= []).push(p);
  }));

  const [openSkill, setOpenSkill] = useState<string | null>(null);

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold">Skills & Proof</h2>
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
              <button className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 hover:scale-105 transition">
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
  );
}
