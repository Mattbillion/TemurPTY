import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://ozlvasiqfneaqbxldojh.supabase.co"
        />
        <link
          rel="dns-prefetch"
          href="https://ozlvasiqfneaqbxldojh.supabase.co"
        />
        <link rel="preload" as="image" href="/logo.svg" />
        <link rel="preload" as="image" href="/logo-white.svg" />
        <link rel="preload" as="image" href="/logo-official.png" />
        <link rel="preload" as="image" href="/logo-official-black.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} flex min-h-dvh flex-col items-center antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
