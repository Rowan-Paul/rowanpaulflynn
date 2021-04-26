function BioUI() {
  return (
    <div id="bio">
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
            HAN University of Applied Sciences
          </a>
        </span>{" "}
        doing Information and Communication Technology.
      </p>

      <p>
        In my free time I like programming cool web applications, playing strategy
        games, watching tv shows &amp; movies on my phone and reading the
        occasional book. I also like tracking stuff, such as my{" "}
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
        Currently my favorite languages are React and NodeJS. But I've had
        experience with HTML &amp; CSS, PHP, JavaScript, Node.JS, Express.js,
        Mongo(ose) and SQL. While design is not my strongest point, I have
        worked with several CSS frameworks such as Tailwind, Materialize and
        Fomantic-UI.
      </p>
    </div>
  );
}

export const Bio = BioUI;
