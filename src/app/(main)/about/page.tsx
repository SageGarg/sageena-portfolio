"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Projects } from "@/content/projects";

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
            Hi, I’m Sageena Garg—a CS junior at Iowa State University working as an undergrad research assistant building AI-powered
            traffic-engineering tools and seamless mobile experiences. I love
            turning complex data into intuitive apps and learning cloud
            technologies along the way.
          </p>
        </div>
      </div>

      {/* skills section */}

      {/* Interactive Skills & Proof */}
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
                              .replace(/\s+/g, "-")}`}
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

      {/* 5. Education */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <p className="text-gray-700 dark:text-gray-300">
          B.Sc. Computer Science, Iowa State University
          <br />
          Expected December 2026 • GPA: 3.72/4.0
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
