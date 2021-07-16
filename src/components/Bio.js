import { Languages } from './Languages'

function BioUI() {
  return (
    <div id="bio">
      <h2>
        <span className="header">About me</span>
      </h2>
      <p>
        I live in the Netherlands and am currently studying web development. In
        my free time I like programming cool things, playing games, watching
        stuff on my phone and reading the occasional book. My preferred
        programming language is JavaScript, especially ReactJS but I've had
        experience with quite a few different languages. You can see the
        languages I've worked with down below.
      </p>

      <Languages />
    </div>
  )
}

export const Bio = BioUI
