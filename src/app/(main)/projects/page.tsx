// src/app/(site)/projects/page.tsx
'use client';

import { projects, Project } from '@/content/projects';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

export default function ProjectsPage() {
  const grouped = useMemo(() => {
    return projects.reduce<Record<string, Project[]>>((acc, p) => {
      if (!acc[p.category]) acc[p.category] = [];
      acc[p.category].push(p);
      return acc;
    }, {});
  }, []);

  return (
    <div className="space-y-16 px-4 py-12">
      {Object.entries(grouped).map(([category, list]) => (
        <section key={category}>
          <h2 className="mb-6 text-3xl font-bold">{category}</h2>
          <div className="flex flex-col gap-4">
            {list.map((p) => (
              <ProjectBar key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectBar({ project }: { project: Project }) {
  return (
    <div
      className="relative group overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-800
                 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
      // give a smooth height transition:
      style={{ transitionProperty: 'background-color, max-height' }}
    >
      {/* 1. Always-visible row */}
      <div className="flex items-center justify-between px-4 py-2">
        <span className="font-medium">{project.title}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {project.stack.join(' • ')}
        </span>
      </div>

      {/* 2. Hidden content container */}
      <div
        className="overflow-hidden max-h-0 group-hover:max-h-90 transition-all duration-300"
      >
        <div className="p-4">
          {/* Project image */}
          <div className="mb-4 w-full max-w-sm overflow-hidden rounded-md">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={225}
              className="object-cover"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.demo ? (
              <Link
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded bg-pink-700 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600"
              >
                Live Demo
              </Link>
            ) : null}

            <Link
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-pink-700 px-4 py-2 text-sm font-medium
                         text-pink-700 hover:bg-pink-50 dark:hover:bg-zinc-800/50"
            >
              View Code
            </Link>
          </div>

          {/* One-sentence blurb */}
          <p className="mt-3 max-w-sm text-center text-sm text-gray-600 dark:text-gray-400">
            {project.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
