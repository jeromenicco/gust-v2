import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const avenir = localFont({
  src: [
    {
      path: './assets/fonts/Avenir-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './assets/fonts/Avenir-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
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
      <body className={avenir.className}>{children}</body>
    </html>
  );
}
