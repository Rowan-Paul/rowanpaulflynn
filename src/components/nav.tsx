import Link from 'next/link';

const Nav = () => {
  return (
    <header className="sticky top-0 flex items-center px-4 bg-white border-b-2 lg:px-6 h-14 border-b-gray-200">
      <Link href="#" className="flex items-center justify-center text-2xl font-extrabold" prefetch={false}>
        RPF
        <span className="sr-only">Rowan Paul Flynn</span>
      </Link>
      <nav className="flex gap-4 ml-auto sm:gap-6">
        <Link href="#work" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Work
        </Link>
        <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Skills
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

const MountainIcon = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

export default Nav;
