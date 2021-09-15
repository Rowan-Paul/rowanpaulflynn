import Head from 'next/head'
import Languages from '../components/languages'
import Socials from '../components/socials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="introduction" className="grid w-full h-screen">
          <div className="m-auto text-center md:text-2xl">
            <span>My name is</span>
            <h1 className="text-4xl md:text-5xl my-8">Rowan Paul Flynn</h1>
            <p>And I enjoy making things for the web.</p>

            <Socials />

            <a href="#bio">More about me</a>
          </div>
        </div>

        <div id="bio" className="mx-6 md:mx-20 my-20 md:my-40 pt-4">
          <h2>
            <span className="p-2 md:ml-1 underline">About me</span>
          </h2>
          <p>
            I live in the Netherlands and am currently studying web development. In my free time I like programming cool
            things, playing games, watching stuff on my phone and reading the occasional book. My preferred programming
            language is JavaScript, especially React but I've had experience with quite a few different languages. You
            can see the languages I've worked with down below.
          </p>

          <Languages />
        </div>

        <div id="projects" className="mx-6 md:mx-20 my-20 md:my-40 pt-4">
          <h2>
            <span className="p-2 md:ml-1 underline">Projects</span>
          </h2>
          <p>
            Here are a few projects of mine that you might find interesting. You can find more projects on my{' '}
            <a href="https://github.com/Rowan-Paul/" target="_blank" rel="noopener noreferrer">
              GitHub page
            </a>
            .
          </p>

          <div className="m-0 md:m-20 overflow-auto">
            <h3 className="underline">Rekenlogboek (school project)</h3>
            <img
              src="/rekenlogboek.jpeg"
              alt="Screenshot of rekenlogboek"
              className="block mb-4 max-w-100 md:float-left md:mr-4 md:max-w-1/2"
            />
            <p>
              The rekenlogboek app was made together with 4 others during a school project. The rekenlogboek allows
              primary school teachers to ask their students how they did during tests and explanations.
            </p>
            <p>
              By converting it to a digital application teachers could get a quicker overview of the performance of the
              class. The project used React, Redux, Node, Microsoft Identity Framework, Socket.io, Puppeteer &amp; Jest.
            </p>
          </div>

          <div className="m-0 md:m-20 overflow-auto">
            <h3 className="underline">GWENTcards</h3>
            <img
              src="/gwentcards.jpg"
              alt="Screenshot of GWENTcards"
              className="block mb-4 max-w-100 md:float-left md:mr-4 md:max-w-1/2"
            />
            <p>
              GWENTcards is a site build with React &amp; Node that allows users to keep track of what cards they have
              collected for The Witcher 3: Wild Hunt card mini game GWENT. It is also a PWA with full offline
              functioniality and is currently deployed on <a href="https://gwentcards.net/">gwentcards.net</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
