import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./Navbar";
import { Theme } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-poppins",
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
      <body className={inter.variable}>
        <Theme accentColor="violet" appearance="dark">
          <Navbar />
          <main className="p-5" >{children}</main>
        </Theme>
      </body>
    </html>
  );
}
