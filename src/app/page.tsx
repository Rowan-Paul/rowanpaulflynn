import AtmosphereSection from "@/app/_components/AtmosphereSection";

const projects = [
  {
    name: "OpnShelf",
    description: "A personal media tracker built on the AT Protocol.",
    href: "https://opnshelf.xyz",
    tags: "AT Protocol · NestJS · TanStack",
  },
  {
    name: "GWENTcards",
    description: "Collect, filter and track cards from The Witcher 3.",
    href: "https://gwentcards.net",
    tags: "Next.js",
  },
  {
    name: "Vraag Het Fred",
    description: "An AI-powered assistant for iOS and Android.",
    href: "https://vraaghetfred.com",
    tags: "Expo · React Native · Gemini API",
  },
];

export default function HomePage() {
  return (
    <main className="work-notes min-h-screen bg-[#151513] px-5 py-6 text-[#e3e0d6] sm:px-9 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-baseline justify-between border-b border-[#e3e0d6]/25 pb-4 font-mono text-[10px] tracking-[0.16em] text-[#aaa79d] uppercase">
          <span>Rowan-Paul Flynn</span>
          <span>Personal site</span>
        </header>

        <section className="grid gap-10 border-b border-[#e3e0d6]/25 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-[#d59a55] uppercase">
              Hello, I&apos;m Rowan-Paul.
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.85] tracking-[-0.065em] sm:text-8xl">
              Rowan-Paul
              <br />
              Flynn
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-md text-xl leading-relaxed text-[#c6c3b9]">
              I&apos;m a full-stack developer who enjoys making things, learning as
              I go, and following interesting ideas further than I probably
              should. This is my small corner of the internet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:contact@rowanpaulflynn.com"
                className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-100 transition hover:border-[#d59a55] hover:text-[#d59a55]"
              >
                Let&apos;s talk ↗
              </a>
              <a
                href="https://github.com/Rowan-Paul/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-100 transition hover:border-[#d59a55] hover:text-[#d59a55]"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-[11rem_1fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-[#d59a55] uppercase">
              Things I&apos;ve been working on
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#aaa79d]">
              A few projects, experiments, and ideas I&apos;ve enjoyed spending time
              on.
            </p>
          </div>
          <div className="border-t border-[#e3e0d6]/25">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 border-b border-[#e3e0d6]/25 py-7 transition sm:grid-cols-[3rem_1fr_auto] sm:py-9"
              >
                <span className="pt-1 font-mono text-xs text-[#d59a55]">
                  0{index + 1}
                </span>
                <div>
                  <h2 className="font-serif text-4xl leading-none tracking-[-0.05em] transition group-hover:text-[#d59a55] sm:text-5xl">
                    {project.name}
                    <span className="ml-2 inline-block font-sans text-lg transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-[#aaa79d]">
                    {project.description}
                  </p>
                </div>
                <p className="self-end font-mono text-[10px] tracking-wide text-[#77756d] uppercase">
                  {project.tags}
                </p>
              </a>
            ))}
          </div>
        </section>

        <div className="work-notes-atmosphere border-t border-[#e3e0d6]/25 pt-12">
          <AtmosphereSection />
        </div>

        <footer className="border-t border-[#e3e0d6]/25 pt-5 font-mono text-[10px] tracking-[0.14em] text-[#77756d] uppercase">
          Thanks for stopping by · {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
