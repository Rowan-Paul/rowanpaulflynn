export default function HomePage() {
  return (
    <main className="animated-gradient-bg min-h-screen text-[#f5f5f7]">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
        <header className="mb-20">
          <h1 className="gradient-text mb-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Rowan-Paul Flynn
          </h1>
          <p className="mb-2 text-xl text-[#a1a1aa]">Full-Stack Developer</p>
          <p className="mb-8 text-[#71717a]">
            Building intuitive applications and exploring innovative approaches
            to problem-solving
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@rowanpaulflynn.com"
              className="glass-button inline-block rounded-lg px-6 py-3 font-medium text-white"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/Rowan-Paul/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-block rounded-lg px-6 py-3 font-medium text-white"
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">About</h2>
          <div className="glass-card rounded-lg p-6">
            <p className="leading-relaxed text-[#d4d4d8]">
              I&apos;m a passionate developer with over 3 years of experience
              building web applications. When I see a problem, I love trying to
              fix it with my own solution. I enjoy learning new technologies and
              applying them to create efficient and user-friendly applications.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="https://tracktr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block rounded-lg p-6"
            >
              <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-[#00d4ff]">
                Tracktr
              </h3>
              <p className="mb-4 text-sm text-[#a1a1aa]">
                A platform to track movies and shows across all streaming
                services, connect with friends, and share reviews.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  tRPC
                </span>
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  Next.js
                </span>
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  TMDB API
                </span>
              </div>
            </a>

            <a
              href="https://gwentcards.net"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block rounded-lg p-6"
            >
              <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-[#00d4ff]">
                GWENTcards
              </h3>
              <p className="mb-4 text-sm text-[#a1a1aa]">
                A website to collect, filter and track cards from the GWENT
                minigame in The Witcher 3.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  Next.js
                </span>
              </div>
            </a>

            <a
              href="https://vraaghetfred.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block rounded-lg p-6"
            >
              <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-[#00d4ff]">
                Vraag Het Fred
              </h3>
              <p className="mb-4 text-sm text-[#a1a1aa]">
                Your AI Powered assistant built with Expo and the Gemini API
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  Expo
                </span>
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  React Native
                </span>
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  NestJS
                </span>
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  TypeORM
                </span>
                <span className="glass-pill rounded-full px-3 py-1 text-xs">
                  Gemini API
                </span>
              </div>
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-[rgba(255,255,255,0.1)] pt-8">
          <p className="text-sm text-[#71717a]">
            © {new Date().getFullYear()} Rowan-Paul Flynn. Built with ❤️.
          </p>
        </footer>
      </div>
    </main>
  );
}
