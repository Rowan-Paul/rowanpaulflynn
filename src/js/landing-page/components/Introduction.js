import { HashLink } from "react-router-hash-link";

function IntroductionUI() {
  return (
    <div id="introduction">
      <div className="introductionText">
        <h1>Hello there</h1>
        <h2>
          My name is <br className="mobileBreak"></br>
          <span className="emphasis">Rowan Paul Flynn</span>
        </h2>
        <h3>And I like making websites</h3>
        <HashLink smooth to="#bio">
          More about me
        </HashLink>
      </div>
    </div>
  );
}

export const Introduction = IntroductionUI;
