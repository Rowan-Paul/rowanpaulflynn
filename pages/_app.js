import { Provider } from 'next-auth/client'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import NavBar from '../components/navBar'
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
    <Provider session={pageProps.session}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp