import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "5ISH — 12 Pixel Art Minigames",
  description:
    "A collection of 12 retro pixel art minigames with two-button controls. No ads, no tracking, just fun.",
  metadataBase: new URL("https://fiveish.app"),
  openGraph: {
    title: "5ISH — 12 Pixel Art Minigames",
    description:
      "A collection of 12 retro pixel art minigames with two-button controls. No ads, no tracking, just fun.",
    url: "https://fiveish.app",
    siteName: "5ISH",
    locale: "en_US",
    type: "website",
    images: [{ url: "/screenshots/01_MainMenu.png", width: 1290, height: 2796 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5ISH — 12 Pixel Art Minigames",
    description:
      "A collection of 12 retro pixel art minigames with two-button controls.",
    images: ["/screenshots/01_MainMenu.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pressStart.variable} ${inter.variable}`}>
      <body className="font-body min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
