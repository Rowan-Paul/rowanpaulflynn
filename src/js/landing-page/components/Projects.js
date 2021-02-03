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
        Here are a few web projects I'm really proud of. The code for all these
        projects are available on my{" "}
        <a
          href="https://github.com/Rowan-Paul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </a>
        .
      </p>

      <h3>Rekenlogboek</h3>
      <img src={rekenlogboek} alt="Screenshot of rekenlogboek" />
      <p>
        This project was made as a school project in a group of 4. The idea was
        to digitalize the so called Rekenlogboek for primary school children. We
        had consultation with actual primary school teachers who made the
        assignment. The project utilised React, Express, Socket.io, Microsoft
        Identity Framework and ran (partly) inside Microsoft Teams. The server
        has unit tests with Jest and the client has end-to-end tests with
        Puppeteer.
      </p>
      <h3>Quizzer</h3>
      <img src={quizzer} alt="Screenshot of quizzer" />
      <p>
        This project was made as a school project in a duo. The assisgnement was
        to create a pub quiz application. It was made out of 4 different apps:
        three for the client-side and one for the server-side. The project
        utilised React, Express and WebSockets.
      </p>
      <h3>Blog</h3>
      <img src={blog} alt="Screenshot of blog" />
      <p>
        I have a personal blog where I post things occasionally. It's made with
        Gatsby, a framework to run React on the client side. The site is
        deployed using CI with GitHub Pages.
      </p>
    </div>
  );
}

export const Projects = ProjectsUI;
