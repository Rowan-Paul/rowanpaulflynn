import Link from 'next/link';
import GithubIcon from '../components/GithubIcon';
import LinkedInIcon from '../components/LinkedInIcon';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary dark:bg-dark-grey-500 font-primary text-text dark:text-primary p-5">
      <div className="container m-auto max-w-3xl">
        <h1 className="text-8xl font-extrabold py-10 md:underline decoration-light-blue">Rowan Paul Flynn</h1>
        <p className="text-2xl md:text-3xl">
          Hi, my name is Rowan Paul Flynn. I&apos;m a web developer with a love for all things Javascript. I have
          experience with frameworks such as React, Next &amp; Strapi.
        </p>
      </div>
      <div className="container m-auto max-w-3xl mt-20 text-center">
        <h2 className="text-2xl md:text-4xl mb-2">Contact me</h2>
        <a
          href="mailto:contact@rowanpaulflynn.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="underline decoration-light-blue text-2xl"
        >
          contact@rowanpaulflynn.com
        </a>
        <div className="flex flex-row justify-center gap-4 mt-16">
          <a href="https://github.com/Rowan-Paul" target="_blank" rel="noreferrer" aria-label="Github">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rowan-paul-flynn-1201a8205/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="container m-auto max-w-3xl mt-20 text-center">
        <Link href="/posts">
          <a className="text-2xl">
            &nbsp;&gt; <span className="hover:underline">Go to blog</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
