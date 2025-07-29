import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kfiatek",
  description:
    "Portfolio i blog programisty z projektami, doświadczeniem zawodowym oraz artykułami nma tematach społeczno-filozoficznych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased min-h-screen max-w-screen`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
