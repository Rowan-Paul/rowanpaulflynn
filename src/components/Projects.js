import rekenlogboek from '../assets/projects/rekenlogboek.jpeg'
import gwentcards from '../assets/projects/gwentcards.jpg'

function ProjectsUI() {
  return (
    <div id="projects">
      <h2>
        <span className="header">Projects</span>
      </h2>
      <p>
        Here are a few projects of mine that you might find interesting. You can
        find more projects on my{' '}
        <a
          href="https://github.com/Rowan-Paul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </a>
        .
      </p>

      <div className="projectContainer">
        <h3 className="projectTitle">Rekenlogboek (school project)</h3>
        <img
          src={rekenlogboek}
          alt="Screenshot of rekenlogboek"
          className="projectThumb"
        />
        <p>
          The rekenlogboek app was made together with 4 others during a school
          project. The rekenlogboek allows primary school teachers to ask their
          students how they did during tests and explanations.
        </p>
        <p>
          By converting it to a digital application teachers could get a quicker
          overview of the performance of the class. The project used React,
          Redux, Node, Microsoft Identity Framework, Socket.io, Puppeteer &amp;
          Jest.
        </p>
      </div>

      <div className="projectContainer">
        <h3 className="projectTitle">GWENTcards</h3>
        <img
          src={gwentcards}
          alt="Screenshot of GWENTcards"
          className="projectThumb"
        />
        <p>
          GWENTcards is a site build with React &amp; Node that allows users to
          keep track of what cards they have collected for The Witcher 3: Wild
          Hunt card mini game GWENT. It is also a PWA with full offline
          functioniality and is currently deployed on{' '}
          <a href="https://gwentcards.net/">gwentcards.net</a>.
        </p>
      </div>
    </div>
  )
}

export const Projects = ProjectsUI
