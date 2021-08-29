import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import DarkModeToggle from './darkModeToggle'

export default function NavBar() {
  const [session] = useSession()

  return (
    <nav className="bg-gray-500 text-white p-2 flex flex-nowrap flex-row items-center">
      <DarkModeToggle />
      <Link href="/">
        <a className="hover:bg-gray-500  hover:p-0 no-underline mr-3">Home</a>
      </Link>
      <Link href="/blog">
        <a className="hover:bg-gray-500  hover:p-0 no-underline">Blog</a>
      </Link>
      {session ? (
        <Link href="/blog/drafts">
          <a className="hover:bg-gray-500 hover:p-0 no-underline ml-auto mr-3">
            Drafts
          </a>
        </Link>
      ) : (
        ''
      )}
      <span
        onClick={() => (session ? signOut() : signIn())}
        className={`${session ? '' : 'ml-auto'} cursor-pointer`}
      >
        {session ? 'Sign out' : 'Sign In'}
      </span>
    </nav>
  )
}
