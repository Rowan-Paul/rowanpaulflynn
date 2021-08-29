import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import DarkModeToggle from '../components/darkModeToggle'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
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
    <span>
      <DarkModeToggle />
      <Component {...pageProps} />
    </span>
  )
}

export default MyApp
