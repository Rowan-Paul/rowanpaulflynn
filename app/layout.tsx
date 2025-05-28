import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rowan-Paul Flynn | Full-Stack Developer",
  description:
    "Full-stack developer focused on building intuitive applications with Next.js, TypeScript, and Node.js. Creator of Tracktr, GWENTcards, and OpenWatch.",
  keywords: [
    "full-stack developer",
    "web development",
    "Next.js",
    "TypeScript",
    "React",
    "T3 Stack",
    "Strapi CMS",
    "JavaScript",
    "Node.js",
    "NestJS",
  ],
  authors: [{ name: "Rowan-Paul Flynn" }],
  creator: "Rowan-Paul Flynn",
  publisher: "Rowan-Paul Flynn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rowanpaulflynn.com",
    title: "Rowan-Paul Flynn | Full-Stack Developer",
    description:
      "Full-stack developer focused on building intuitive applications with Next.js, TypeScript, and Node.js.",
    siteName: "Rowan-Paul Flynn Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowan-Paul Flynn | Full-Stack Developer",
    description:
      "Full-stack developer focused on building intuitive applications with Next.js, TypeScript, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
