import { useEffect, Fragment } from 'react'

import { Introduction } from './components/Introduction'
import { Bio } from './components/Bio'
import { Projects } from './components/Projects'
import { DarkModeToggle } from './components/DarkModeToggle'

function App() {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      localStorage.theme !== 'light'
    ) {
      localStorage.theme = 'dark'
    }

    if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [])

  return (
    <Fragment>
      <DarkModeToggle />
      <Introduction />
      <Bio />
      <Projects />
    </Fragment>
  )
}

export default App
