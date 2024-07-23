import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import { Archivo } from 'next/font/google';
import { Caudex } from 'next/font/google';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap'
});

const caudex = Caudex({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Rowan Paul Flynn',
  description: 'Web developer in the Netherlands'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} ${caudex.className}`}>
        <div className="flex flex-col min-h-[100dvh]">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
