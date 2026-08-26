import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Download, Mail } from "lucide-react";

export const metadata = { title: "Hire - Sageena Garg" };

const strengths = [
  {
    title: "AI systems",
    description:
      "RAG pipelines, LLM integrations, structured data, and evaluation-focused tooling.",
  },
  {
    title: "Cloud infrastructure",
    description:
      "Azure Functions, AWS EC2, tenant isolation, authentication, and production APIs.",
  },
  {
    title: "Full-stack delivery",
    description:
      "Python, C#, React, Flask, databases, and polished interfaces that ship.",
  },
];

export default function Hire() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          Open to meaningful work
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
          I&apos;m a Computer Science honors student focused on production-ready
          AI systems, cloud infrastructure, and full-stack products. I bring
          research depth, practical engineering, and a bias toward clear
          solutions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-pink-700 px-5 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            <Mail size={18} />
            Start a conversation
          </Link>
          <a
            href="/Resume_SageenaGarg.pdf"
            download
            className="inline-flex items-center gap-2 rounded border border-zinc-600 px-5 py-3 font-semibold text-white transition hover:border-pink-400 hover:text-pink-300"
          >
            <Download size={18} />
            Download resume
          </a>
        </div>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 md:grid-cols-3">
        {strengths.map((strength) => (
          <article key={strength.title} className="bg-zinc-950 p-6">
            <BriefcaseBusiness className="mb-8 text-pink-400" size={22} />
            <h2 className="text-xl font-semibold text-white">
              {strength.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {strength.description}
            </p>
          </article>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pink-300 hover:text-pink-200"
      >
        See selected work <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
