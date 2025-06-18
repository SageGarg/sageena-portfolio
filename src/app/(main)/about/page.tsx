// src/app/(site)/about/page.tsx
export const metadata = { title: 'About – Sageena Garg' };

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 space-y-12">
      {/* 1. Header with photo */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/me.png"
          alt="Sageena Garg"
          className="h-40 w-40 rounded-full object-cover shadow-lg"
        />
        <h1 className="mt-6 text-4xl font-bold">About Me</h1>
      </div>

      {/* 2. Elevator Bio */}
      <div className="prose mx-auto text-gray-700 dark:text-gray-300">
        <p>
          Hi, I’m Sageena Garg—a CS junior at Iowa State building AI-powered traffic-engineering tools and seamless mobile experiences.  
          I love turning complex data into intuitive apps and learning cloud technologies along the way.
        </p>
      </div>

      {/* 3. Core Skills */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Core Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['Python','LLMs','Android','Cloud Computing','React','MongoDB'].map(skill => (
            <span
              key={skill}
              className="rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>


      {/* 5. Education */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Education</h2>
        <p className="text-gray-700 dark:text-gray-300">
          B.Sc. Computer Science, Iowa State University<br/>
          Expected December 2026 • GPA: 3.8/4.0
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
