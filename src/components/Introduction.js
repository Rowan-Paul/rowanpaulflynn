import { Socials } from './Socials'

function IntroductionUI() {
  return (
    <div id="introduction">
      <div className="introductionText">
        <span>My name is</span>
        <h1>Rowan Paul Flynn</h1>
        <p>And I enjoy making things for the web.</p>

        <Socials />

        <a href="#bio">More about me</a>
      </div>
    </div>
  )
}

export const Introduction = IntroductionUI
