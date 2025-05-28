import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="text-white font-bold text-xl">{'<RPF />'}</div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#skills" className="text-white/80 hover:text-white transition-colors">
                  Skills
                </Link>
                <Link href="#projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="inline-block backdrop-blur-sm bg-white/20 border border-white/30 rounded-full px-4 py-2">
                    <span className="text-white/90 text-sm font-medium">👋 Hello, I&apos;m</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Rowan-Paul
                    <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Flynn
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed">
                    Full-stack developer focused on building intuitive applications, exploring new technologies, and embracing innovative approaches to problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-xl backdrop-blur-sm"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="mailto:contact@rowanpaulflynn.com"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="https://github.com/Rowan-Paul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all shadow-lg"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rowan-paul-flynn-1201a8205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:contact@rowanpaulflynn.com"
                  className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end h-full pt-4 lg:pt-0 hidden lg:block">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-3 shadow-xl">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/rowan-paul.png"
                    alt="Photo of Rowan-Paul Flynn"
                    priority
                    width={400}
                    height={600}
                    className="object-contain object-center w-full"
                    style={{ maxHeight: "550px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl inline-block">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-white/80 text-lg max-w-2xl">
                I&apos;m a passionate developer with 3 years of experience building web applications. When I see a problem, I love trying to fix it with my own solution. I enjoy learning new technologies and applying them to create efficient and user-friendly applications.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
                <p className="text-white/80">
                  Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
                <p className="text-white/80">
                  Building robust APIs and server-side applications with Node.js, NestJS, and headless CMS solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl inline-block">
              <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
              <p className="text-white/80 text-lg">Technologies I work with to bring ideas to life</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: 'Frontend', skills: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Backend', skills: ['Node.js', 'NestJS', 'Strapi CMS'] },
              { category: 'Tools', skills: ['Docker', 'AWS', 'Vercel'] }
            ].map((category, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="backdrop-blur-sm bg-white/20 border-white/30 text-white hover:bg-white/30 w-full justify-center py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl inline-block">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-white/80 text-lg">Some of my recent work that I&apos;m proud of</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tracktr',
                description: 'A platform to track movies and shows across all streaming services, connect with friends, and share reviews.',
                image: '/tracktr.png',
                url: 'https://tracktr.app',
                tags: ['Next.js', 'T3 stack', 'TMDB integration']
              },
              {
                title: 'GWENTcards',
                description: 'A website to collect, filter and track cards from the GWENT minigame in The Witcher 3.',
                image: '/gwentcards.png',
                url: 'https://gwentcards.net',
                tags: ['React', 'TypeScript']
              },
              {
                title: 'OpenWatch',
                description: 'An open source alternative to JustWatch - an API for finding where movies can be watched across streaming platforms.',
                image: '/openwatch.png',
                url: 'https://openwatch.xyz',
                tags: ['NestJS', 'API Development', 'Open Source']
              }
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md h-8 w-8 bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="backdrop-blur-sm bg-white/20 border-white/30 text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl text-center">
            <p className="text-white/80 text-lg mb-6">Reach out to me directly via email:</p>
            <Link
              href="mailto:contact@rowanpaulflynn.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-xl"
            >
              contact@rowanpaulflynn.com
              <Mail className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white font-bold text-xl mb-4 md:mb-0">{'<RPF />'}</div>
              <div className="text-white/60 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} Rowan-Paul Flynn. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
