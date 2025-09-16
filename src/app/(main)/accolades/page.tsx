"use client";
import { motion } from "framer-motion";
import { accolades } from "../../../content/accolades";

export default function AccoladesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Accolades</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Honors, Awards & Achievements
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {accolades.map((acc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-zinc-800/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold text-pink-700">{acc.title}</h3>
            {(acc.description || acc.year) && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {acc.description && (
                  <span className="font-medium">{acc.description}</span>
                )}
                {acc.year && (
                  <span className="ml-2 text-sm text-gray-500">
                    ({acc.year})
                  </span>
                )}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
