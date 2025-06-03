'use client';
import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------
   Build MANY random shards so the screen really looks shattered
-------------------------------------------------------------*/
const SHARD_COUNT = 40;

type Shard = {
  clip: string; // CSS clip‑path defining the shape
  dx: number;   // x translation target (px)
  dy: number;   // y translation target (px)
  rot: number;  // rotation target (deg)
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const makePoly = (): string => {
  // 4‑point irregular quad inside 0–100% square
  const pts = Array.from({ length: 4 }, () => `${rand(0, 100)}% ${rand(0, 100)}%`).join(', ');
  return `polygon(${pts})`;
};

const buildShards = (n: number): Shard[] => {
  return Array.from({ length: n }, () => {
    const sign = Math.random() < 0.5 ? -1 : 1;
    return {
      clip: makePoly(),
      dx: sign * rand(80, 260),
      dy: (Math.random() < 0.5 ? -1 : 1) * rand(80, 260),
      rot: sign * rand(60, 140),
    };
  });
};

type Phase = 'welcome' | 'breaking' | 'done';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('welcome');
  const SHARDS = useMemo(() => buildShards(SHARD_COUNT), []);

  /* ---------------- timeline ---------------- */
  useEffect(() => {
    if (phase === 'welcome') {
      const id = setTimeout(() => setPhase('breaking'), 3000);
      return () => clearTimeout(id);
    }
    if (phase === 'breaking') {
      const id = setTimeout(() => setPhase('done'), 1700);
      return () => clearTimeout(id);
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
                className="z-10 select-none text-3xl sm:text-8xl md:text-9xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-700 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
              >
                Welcome
              </motion.h2>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= Hero ================= */}
      {phase === 'done' && (
        <section className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
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
            CS sophomore&nbsp;•&nbsp;LLM tinkerer&nbsp;•&nbsp;Android&nbsp;&amp;&nbsp;Full‑Stack dev.
            <br />Here’s my work.
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
        </section>
      )}
    </>
  );
}
