import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="introduction">
        <div className="introductionText">
          <h1>Hello there</h1>
          <h2>My name is Rowan Paul Flynn</h2>
          <h3>
            And I like making <span className="emphasis">websites</span>
          </h3>
        </div>
      </div>

      <div className="bio">
        <h2>
          <span className="header">About me</span>
        </h2>
        <p>
          I live in the Netherlands and have been making sites since 2015.
          Currently I'm a student at the{" "}
          <span className="han">
            <a
              href="https://www.han.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              HAN University of Apped Sciences
            </a>
          </span>{" "}
          doing Information and Communication Technology.
        </p>

        <p>
          In my free time I ke programming cool web appcations, playing strategy
          &amp; fps games, watching tv shows &amp; movies on my phone and
          reading the occasional book. I also ke tracking stuff, such as my{" "}
          <a
            href="https://trakt.tv/users/rpf_2001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            movies &amp; tv
          </a>{" "}
          watching and the{" "}
          <a
            href="https://howlongtobeat.com/user?n=Paulo2Gaming"
            target="_blank"
            rel="noopener noreferrer"
          >
            games
          </a>{" "}
          I play.
        </p>

        <p>
          My current favorite languages are{" "}
          <span className="emphasis">React and NodeJS</span>. But I've had
          experience with HTML &amp; CSS, PHP, JavaScript, Node.JS, Express.js,
          Mongo(ose) and SQL.
        </p>
      </div>
    </Fragment>
  );
}

export default App;
