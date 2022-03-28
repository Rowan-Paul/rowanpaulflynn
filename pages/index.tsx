import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <div className="flex align-middle justify-center h-screen -mt-10 md:mt-0 items-center">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
            <span className="text-l md:text-3xl">Hi, my name is</span>
            <h1 className="text-3xl md:text-8xl mt-2 mb-4">Rowan Paul Flynn</h1>
            <span className="text-xl md:text-5xl">and I am a web developer</span>
          </div>
        </div>
      </Section>
      <Link href="#socials">
        <a
          className="absolute bottom-0 left-0 right-0 ml-auto mr-auto w-12 text-xs md:text-base text-white cursor-pointer hover:animate-bounce mb-5"
          aria-label="Go to socials"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF">
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </a>
      </Link>
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
        <div
          id="socials"
          className="font-extrabold text-transparent my-10 bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
        >
          <h2 className="text-4xl">Languages</h2>
          <div className="grid md:grid-flow-col justify-center gap-8 md:gap-20 mt-10">
            <span className="w-16 h-16 md:w-20 md:h-20 inline-block">
              <svg
                viewBox=".5 -.2 1023 1024.1"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white hover:fill-white/80"
              >
                <title>NextJS</title>
                <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
              </svg>
            </span>
            <span className="w-16 h-16 md:w-20 md:h-20 inline-block">
              <svg
                viewBox=".24262095 .26549587 243.32256626 243.58072911"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white hover:fill-white/80"
              >
                <title>Strapi</title>
                <g fillRule="evenodd">
                  <path d="m161.893 165.833v-78.73a5.077 5.077 0 0 0 -5.077-5.076h-78.638v-81.267h159.815a5.077 5.077 0 0 1 5.078 5.077v159.996z" />
                  <path
                    d="m78.178.76v81.267h-75.054a2.539 2.539 0 0 1 -1.796-4.333zm83.715 240.206v-75.133h81.178l-76.844 76.927a2.539 2.539 0 0 1 -4.334-1.794zm-83.715-158.939h81.176a2.539 2.539 0 0 1 2.539 2.538v81.268h-78.638a5.077 5.077 0 0 1 -5.077-5.077z"
                    opacity=".405"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </Section>
    </>
  );
};

const Section = ({ children }: any): JSX.Element => {
  return <section className="min-h-screen bg-dark-grey-500 p-10 md:p-5 text-center">{children}</section>;
};

export default Home;
