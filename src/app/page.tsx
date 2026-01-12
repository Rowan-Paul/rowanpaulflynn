export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <header className="mb-20">
          <h1 className="mb-4 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
            Rowan-Paul Flynn
          </h1>
          <p className="mb-2 text-xl text-neutral-600">Full-Stack Developer</p>
          <p className="mb-8 text-neutral-500">
            Building intuitive applications and exploring innovative approaches
            to problem-solving
          </p>
          <a
            href="mailto:contact@rowanpaulflynn.com"
            className="inline-block rounded-lg bg-neutral-900 px-6 py-3 text-white transition-colors hover:bg-neutral-700"
          >
            Get in touch
          </a>
        </header>

        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">About</h2>
          <p className="leading-relaxed text-neutral-700">
            I&apos;m a passionate developer with 3 years of experience building
            web applications. When I see a problem, I love trying to fix it with
            my own solution. I enjoy learning new technologies and applying them
            to create efficient and user-friendly applications.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="https://tracktr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-neutral-200 p-6 transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-neutral-900 group-hover:text-neutral-600">
                Tracktr
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                A platform to track movies and shows across all streaming
                services, connect with friends, and share reviews.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  tRPC
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  Next.js
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  TMDB API
                </span>
              </div>
            </a>

            <a
              href="https://gwentcards.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-neutral-200 p-6 transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-neutral-900 group-hover:text-neutral-600">
                GWENTcards
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                A website to collect, filter and track cards from the GWENT
                minigame in The Witcher 3.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  Next.js
                </span>
              </div>
            </a>

            <a
              href="https://vraaghetfred.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-neutral-200 p-6 transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-neutral-900 group-hover:text-neutral-600">
                Vraag Het Fred
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                Your AI Powered assistant built with Expo and the Gemini API
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  Expo
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  React Native
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  NestJS
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  TypeORM
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  Gemini API
                </span>
              </div>
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Rowan-Paul Flynn. Built with Next.js
            and Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}
