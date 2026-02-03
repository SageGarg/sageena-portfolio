"use client";
import { motion } from "framer-motion";
import {
  professionalExperiences,
  leadershipExperiences,
  Experience,
} from "../../../content/experiences";
export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Professional & Leadership Roles
        </p>
      </header>

      <Timeline
        title="Professional Experience"
        items={professionalExperiences}
      />
      <Timeline
        title="Leadership & Involvement"
        items={leadershipExperiences}
      />
    </section>
  );
}
function Timeline({ title, items }: { title: string; items: Experience[] }) {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-2xl font-semibold">{title}</h2>

      <div className="relative">
        {/* spine */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-200 dark:bg-zinc-700" />

        <div className="flex flex-col gap-10">
          {items.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} className="relative">
                {/* dot (centered on row) */}
                <span
                  className="
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    h-3.5 w-3.5 rounded-full bg-pink-700
                    ring-4 ring-black/20 dark:ring-white/10
                  "
                />

                {/* connector */}
                <span
                  className={`
                    absolute top-1/2 -translate-y-1/2 h-px w-8 bg-gray-200 dark:bg-zinc-700
                    ${isLeft ? "right-1/2 mr-2" : "left-1/2 ml-2"}
                  `}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  {/* LEFT COLUMN */}
                  <div
                    className={`md:pr-6 ${isLeft ? "flex justify-end" : ""}`}
                  >
                    {isLeft && <Card exp={exp} isLeft={isLeft} />}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div
                    className={`md:pl-6 ${!isLeft ? "flex justify-start" : ""}`}
                  >
                    {!isLeft && <Card exp={exp} isLeft={isLeft} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** extracted card so we don't duplicate markup */
function Card({ exp, isLeft }: { exp: Experience; isLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="
        w-full md:max-w-[480px]
        bg-white/90 dark:bg-zinc-800/90
        p-6 rounded-xl shadow-lg
      "
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">{exp.role}</h3>
        <span className="shrink-0 text-sm font-medium text-pink-700 bg-pink-100 rounded-full px-2 py-1">
          {exp.dates}
        </span>
      </div>

      <div className="mt-1 mb-4 text-gray-600 dark:text-gray-300">
        {exp.company} &mdash; {exp.location}
      </div>

      <ul className="mb-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {exp.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

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
  );
}
