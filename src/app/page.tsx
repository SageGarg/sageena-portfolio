'use client';
import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
/* ------------------------------------------------------------
   Deterministic shard generator (no hydration mismatch!)
   We avoid Math.random at render‑time so SSR and client match.
-------------------------------------------------------------*/
const SHARD_COUNT = 40;


// simple deterministic pseudo‑random based on index
const prand = (i: number) => {
  // returns [0,1)
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const makePoly = (i: number): string => {
  const pts = Array.from({ length: 4 }, (_, j) => {
    const r1 = prand(i * 4 + j);
    const r2 = prand(i * 4 + j + SHARD_COUNT);
    return `${(r1 * 100).toFixed(3)}% ${(r2 * 100).toFixed(3)}%`;
  }).join(', ');
  return `polygon(${pts})`;
};

type Shard = {
  clip: string;
  dx: number;
  dy: number;
  rot: number;
};

const buildShards = (): Shard[] => {
  return Array.from({ length: SHARD_COUNT }, (_, i) => {
    const sign = prand(i) < 0.5 ? -1 : 1;
    const dx = sign * (80 + prand(i + 1) * 180);          // 80‑260 px
    const dy = (prand(i + 2) < 0.5 ? -1 : 1) * (80 + prand(i + 3) * 180);
    const rot = sign * (60 + prand(i + 4) * 80);          // 60‑140 deg
    return { clip: makePoly(i), dx, dy, rot };
  });
};

type Phase = 'welcome' | 'breaking' | 'done';
const chips = ['About', 'Experience', 'Accolades', 'Hire Me', 'Contact'];

const introAlreadyPlayed = () =>
  typeof window !== 'undefined' && sessionStorage.getItem('introPlayed') === 'true';


export default function Home() {

  const [phase, setPhase] = useState<Phase>('welcome');
  // deterministic shards (same on server + client)
  const SHARDS = useMemo(buildShards, []);

// skip welcome effect if once played
useEffect(() => {
    if (introAlreadyPlayed()) {
      setPhase('done');
    }
  }, []);


  /* ---------------- timeline ---------------- */
  useEffect(() => {
    if (phase === 'welcome') {
      const id = setTimeout(() => setPhase('breaking'), 1900);
      return () => clearTimeout(id);
    }
    if (phase === 'breaking') {
      const id = setTimeout(() => setPhase('done'), 1400);
      return () => clearTimeout(id);
    }
  }, [phase]);

  /* 5️⃣  once we hit 'done' for the first time, remember it */
  useEffect(() => {
    if (phase === 'done' && !introAlreadyPlayed()) {
      sessionStorage.setItem('introPlayed', 'true');
    }
  }, [phase]);

  return (
    <>
      {/* ================= Overlay ================= */}
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none backdrop-blur-sm"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
          >
            {/* glass shards */}
            {SHARDS.map(({ clip, dx, dy, rot }, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 bg-white/30 dark:bg-zinc-200/10 border border-white/40 dark:border-zinc-200/10 shadow-xl"
                style={{ clipPath: clip }}
                initial={{ scale: 1, x: 0, y: 0, rotate: 0 }}
                animate={
                  phase === 'breaking'
                    ? {
                        scale: [1, 1.05, 0.8],
                        x: dx,
                        y: dy,
                        rotate: rot,
                        opacity: 0,
                        transition: { duration: 0.9, ease: 'easeInOut' },
                      }
                    : {}
                }
              />
            ))}

            {/* welcome text (kept above shards with z-10) */}
            {phase === 'welcome' && (
              <motion.h2
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
                className="z-10 select-none text-6xl sm:text-6xl md:text-8xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-700 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
              >
                Welcome
              </motion.h2>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= Hero ================= */}
      {phase === 'done' && (
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 text-center bg-black">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl font-extrabold tracking-tight"
          >
            Hi, I’m <span className="text-pink-700">Sageena&nbsp;Garg</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-lg text-lg text-gray-600 dark:text-gray-300"
          >
            *still working on one liner*
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="/projects"
              className="rounded bg-pink-700 px-5 py-2 font-medium text-white hover:bg-pink-600"
            >
              View Projects
            </a>
            <a
              href="/Resume__Sageena_Garg.pdf"
              className="rounded border border-pink-700 px-5 py-2 font-medium text-pink-700 hover:bg-blue-50"
            >
              Download Résumé
            </a>
          </motion.div>

          


<motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="flex flex-wrap justify-center gap-3 text-sm"
    >
      {chips.map((label) => (
        <Link
          key={label}
          href={`/${label.toLowerCase()}`}     // → /about, /experience, …
          className="rounded-full border px-3 py-1 text-gray-600 hover:bg-pink-50
                     dark:text-gray-300 dark:hover:bg-zinc-800/50"
        >
          {label}
        </Link>
      ))}
    </motion.div>



        </section>

        
      )}
    </>
  );
}
