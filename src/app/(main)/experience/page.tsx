'use client';
import { motion } from 'framer-motion';
import {professionalExperiences,
  leadershipExperiences,
  Experience,} from '../../../content/experiences';
export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Professional & Leadership Roles
        </p>
      </header>

      <Timeline title="Professional Experience" items={professionalExperiences} />
      <Timeline title="Leadership & Involvement" items={leadershipExperiences} />
    </section>
  );
}

function Timeline({
  title,
  items,
}: {
  title: string;
  items: Experience[];
}) 
{
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-2xl font-semibold">{title}</h2>
      <div className="relative grid grid-cols-9 gap-4">
        {/* Center line */}
        <div className="col-start-5 col-span-1 absolute inset-y-0 left-1/2 w-px bg-gray-200 dark:bg-zinc-700" />

        {items.map((exp, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right';
          const offsetClasses = ['', 'mt-8', 'mt-16', 'mt-24'][idx] || 'mt-8';

          return (
            <div
              key={idx}
              className={`
                col-span-4
                ${side === 'left' ? 'col-start-1' : 'col-start-6'}
                ${offsetClasses}
              `}
            >
              {/* Timeline dot */}
              <span
                className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-pink-700"
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/90 dark:bg-zinc-800/90 p-6 rounded-lg shadow-lg"
              >
                {/* Role & Dates */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm font-medium text-pink-700 bg-pink-100 rounded-full px-2 py-1">
                    {exp.dates}
                  </span>
                </div>

                {/* Company & Location */}
                <div className="mt-1 mb-4 text-gray-600 dark:text-gray-300">
                  {exp.company} &mdash; {exp.location}
                </div>

                {/* Responsibilities */}
                <ul className="mb-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Optional link */}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-pink-700 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
