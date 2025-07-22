import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"]
})

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Track all the issues and resolve them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
