export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Hi, I’m <span className="text-pink-700">Sageena Garg</span>
      </h1>
      <p className="max-w-lg text-lg text-gray-600 dark:text-gray-300">
        CS sophomore • LLM tinkerer • Android & Full-Stack dev.
        <br />Here’s my work.
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="rounded bg-pink-700 px-5 py-2 font-medium text-white hover:bg-pink-700"
        >
          View Projects
        </a>
        <a
          href="/Resume__Sageena_Garg.pdf"
          className="rounded border border-pink-700 px-5 py-2 font-medium text-pink-700 hover:bg-blue-50"
        >
          Download Résumé
        </a>
      </div>
    </section>
  );
}
