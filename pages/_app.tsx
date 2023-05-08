import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

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
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
