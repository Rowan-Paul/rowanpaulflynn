import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rowan Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal site for Rowan Paul Flynn, web developer in the Netherlands." />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
