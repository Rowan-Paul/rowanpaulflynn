import blog from "../../../assets/projects/blog.jpeg";
import rekenlogboek from "../../../assets/projects/rekenlogboek.jpeg";
import quizzer from "../../../assets/projects/quizzer.jpeg";

function ProjectsUI() {
  return (
    <div id="projects">
      <h2>
        <span className="header">Projects</span>
      </h2>
      <p>
        Here are a few web projects I'm really proud of. If you are interested
        in some projects I'm currently working on, check out my{" "}
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
          The rekenlogboek app was made together with 4 others. The idea was to
          digitalize the so called Rekenlogboek for primary school children. The
          project utilised React, Express, MongoDB, Socket.io, Microsoft
          Identity Framework and ran (partly) inside Microsoft Teams. The server
          has unit tests with Jest and the client has end-to-end tests with
          Puppeteer.
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
          Quizzer was made together with another student during the DWA course.
          The assisgnement was to create a pub quiz application. It was made out
          of 4 different apps: three for the client-side and one for the
          server-side.
        </p>
        <p>
          The project utilised React, Express and WebSockets. During this
          project I learned a lot about the connection between server and
          client, such as CORS and when to use WebSockets.
        </p>
      </div>
    </div>
  );
}

export const Projects = ProjectsUI;
