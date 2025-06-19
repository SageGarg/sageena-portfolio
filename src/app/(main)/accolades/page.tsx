'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Projects } from '@/content/projects';

export default function AboutSkills() {
  // Flatten all project entries
  const all = Projects.flatMap(sec => sec.data);

  // Build skill→project list
  const skillMap: Record<string, typeof all> = {};
  all.forEach((p) => {
    p.stack.forEach(skill => {
      ;(skillMap[skill] ||= []).push(p);
    });
  });

  const [openSkill, setOpenSkill] = useState<string|null>(null);

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-semibold">Skills & Proof</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Object.entries(skillMap).map(([skill, list]) => {
          const isOpen = openSkill === skill;
          return (
            <div
              key={skill}
              className="relative overflow-visible"
              onMouseEnter={() => setOpenSkill(skill)}
              onMouseLeave={() => setOpenSkill(null)}
            >
              {/* badge */}
              <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 cursor-pointer">
                {skill}
              </span>

              {/* popover panel */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-10 w-48 -translate-x-1/2 
                             mt-2 rounded-md border border-gray-200 bg-white dark:border-zinc-700 dark:bg-zinc-800 
                             p-2 shadow-lg"
                >
                  <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    Used in:
                  </p>
                  <ul className="space-y-1">
                    {list.map((p) => (
                      <li key={p.title}>
                        <Link
                          href={`/projects#${p.title
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                          className="text-sm text-pink-700 hover:underline"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
