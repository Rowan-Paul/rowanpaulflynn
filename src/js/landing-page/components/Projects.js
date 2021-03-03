import blog from '../../../assets/projects/blog.jpeg'
import rekenlogboek from '../../../assets/projects/rekenlogboek.jpeg'
import quizzer from '../../../assets/projects/quizzer.jpeg'

function ProjectsUI() {
  return (
    <div id="projects">
      <h2>
        <span className="header">Projects</span>
      </h2>
      <p>
        Here are a few web projects I'm really proud of. If you are interested
        in some projects I'm currently working on, check out my{' '}
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
          The rekenlogboek app was made together with 4 others. The rekenlogboek
          allows primary school teachers to ask their students how they (feel)
          they did during tests and explanations. By converting it to a digital
          application teachers can get a quick overview of the performance of
          the class.
        </p>
        <p>
          During this project I learned a lot about authentication using the
          Microsoft Identity Framework and the very basics of testing with Jest
          and Puppeteer.
        </p>
      </div>

      <div className="projectContainer">
        <h3 className="projectTitle">Blog</h3>
        <img src={blog} alt="Screenshot of blog" className="projectThumb" />
        <p>
          I have a personal blog where I post things occasionally. It's made
          with Gatsby, a framework to run React on the client side. The site is
          deployed using CI with GitHub Pages.
        </p>
      </div>

      <div className="projectContainer">
        <h3 className="projectTitle">Quizzer (school project)</h3>
        <img
          src={quizzer}
          alt="Screenshot of quizzer"
          className="projectThumb"
        />
        <p>
          Quizzer was made together with another student during the DWA course,
          we had to make a pub quiz in React &amp; Express. The app consists
          out of a quizmaster app that chooses the question, a client app that
          answers the question and a scoreboard app that shows the current
          question &amp; score.
        </p>
        <p>
          The project utilised websockets to establish a real-time connection
          between the app and the server. This made us think about when to use
          HTTP and when to use websockets to send information.
        </p>
      </div>
    </div>
  )
}

export const Projects = ProjectsUI
