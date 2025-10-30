import type { Metadata } from "next";
import { Sora, Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Image from "next/image";

const soraSans = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IdentityHub",
  description: "Identity-hub is a better way to achieve privacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soraSans.variable} ${interSans.variable} ${sourceCodePro.variable} bg-darkBase text-softBlue relative overflow-x-hidden antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
