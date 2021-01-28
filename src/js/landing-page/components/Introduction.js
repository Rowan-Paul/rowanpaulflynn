import { HashLink } from "react-router-hash-link";

function IntroductionUI() {
  return (
    <div id="introduction">
      <div className="introductionText">
        <h1>Hello there</h1>
        <h2>
          My name is <br className="mobileBreak"></br>
          Rowan Paul Flynn
        </h2>
        <h3>
          And I like making <span className="emphasis">websites</span>
        </h3>
        <HashLink smooth to="#bio">
          More about me
        </HashLink>
      </div>
    </div>
  );
}

export const Introduction = IntroductionUI;
