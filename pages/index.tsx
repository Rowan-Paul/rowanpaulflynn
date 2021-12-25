import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <div className="flex align-middle justify-center h-screen items-center">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
            <span className="text-xl md:text-3xl">Hi, my name is</span>
            <h1 className="text-5xl md:text-8xl mt-2 mb-4">Rowan Paul Flynn</h1>
            <span className="text-2xl md:text-5xl">and I am a web developer</span>
          </div>
        </div>
      </Section>
      <Section>
        <div
          id="socials"
          className="font-extrabold text-transparent mb-10 bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400"
        >
          <h2 className="text-4xl">Contact me</h2>
        </div>
        <div className="grid md:grid-flow-col justify-center gap-8 md:gap-20">
          <span className="w-16 h-16 md:w-20 md:h-20">
            <a href="mailto:contact@rowanpaulflynn.com">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white hover:fill-white/80"
              >
                <title>Mail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </span>
          <span className="w-16 h-16 md:w-20 md:h-20">
            <a href="https://github.com/Rowan-Paul/" target="_blank" rel="noreferrer">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white hover:fill-white/80"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </span>
          <span className="w-16 h-16 md:w-20 md:h-20 inline-block">
            <a href="https://www.linkedin.com/in/rowan-paul-flynn-1201a8205/" target="_blank" rel="noreferrer">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white hover:fill-white/80"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </span>
        </div>
      </Section>
      <Section>
        <div
          id="projects"
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
        >
          <h2 className="text-4xl">My projects</h2>
        </div>
        <div className="mt-10 md:grid grid-flow-col gap-4 justify-center">
          <Card title="GWENTcards" link="https://gwentcards.net">
            GWENTcards is a site build with React &amp; Node that allows users to keep track of what cards they have
            collected for The Witcher 3: Wild Hunt card mini game GWENT. It is also a PWA with full offline
            functioniality. For this site I have build a custom authentication solution based on JWTs.
          </Card>
          <Card title="project argus" link="https://projectarg.us">
            project argus is a site that allows you to track anything you want. At least, that is the plan. Currently it
            allows tracking of movies &amp; tv shows using the tmdb API. It uses NextJS with prisma &amp; tailwind.
          </Card>
        </div>
      </Section>
      <div className="fixed bottom-5 left-2">
        <Link href="#socials">
          <a className="text-xs md:text-base text-white cursor-pointer hover:animate-bounce mb-5">
            Socials
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              className="h-6 w-6 md:h-12 md:w-12"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zM21 6h-7v5h7V6zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7v1zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" />
            </svg>
          </a>
        </Link>
        <Link href="#projects">
          <a className="text-xs md:text-base text-white cursor-pointer hover:animate-bounce">
            Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              className="h-6 w-6 md:h-12 md:w-12"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
};

const Section = ({ children }: any): JSX.Element => {
  return <section className="min-h-screen bg-dark-grey-500 p-10 md:p-5 text-center">{children}</section>;
};

const Card = ({ title, link, children }: any): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 mb-2 bg-white/10 text-white p-4 max-w-lg">
      <h3 className="text-2xl">{title}</h3>
      <div>{children}</div>
      <a href={link} target="_blank" rel="noreferrer" className="mt-auto block p-2 bg-white/20 hover:bg-white/30">
        Visit site
      </a>
    </div>
  );
};

export default Home;
