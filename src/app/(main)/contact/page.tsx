import { Github, Mail, MessageSquare } from "lucide-react";

export const metadata = { title: "Contact - Sageena Garg" };

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-[1fr_0.8fr] md:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            Contact
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Have a project in mind?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            I&apos;d love to hear what you&apos;re working on, what needs
            solving, or where you think we could collaborate.
          </p>
        </div>

        <div className="space-y-3 rounded-lg border border-zinc-800 bg-zinc-950 p-6">
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            <MessageSquare size={17} className="text-pink-400" />
            Find me online
          </p>
          <a
            href="https://github.com/SageGarg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded border border-zinc-800 px-4 py-3 text-zinc-200 transition hover:border-pink-400 hover:text-pink-300"
          >
            <span className="flex items-center gap-3">
              <Github size={19} /> GitHub
            </span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/Resume_SageenaGarg.pdf"
            className="flex items-center gap-3 rounded border border-zinc-800 px-4 py-3 text-zinc-200 transition hover:border-pink-400 hover:text-pink-300"
          >
            <Mail size={19} /> Resume and experience
          </a>
        </div>
      </div>
    </section>
  );
}
