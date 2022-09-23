import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rowan Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal site for Rowan Paul Flynn, web developer in The Netherlands." />
        <meta
          name="keywords"
          content="web developer, developer, web application,portfolio, projects, rowan-paul, rowan,flynn, rowan paul flynn, rowan-paul flynn, personal"
        />
        <meta property="og:site_name" content="Rowan Paul Flynn" />
        <meta property="og:title" content="The personal website for Rowan Paul Flynn" />
        <meta
          property="og:description"
          content="Personal site for Rowan Paul Flynn, web developer in The Netherlands."
        />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:url" content="https://rowanpaulflynn.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
