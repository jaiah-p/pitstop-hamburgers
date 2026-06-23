import type { Metadata } from "next";
import { Anton, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const SITE = "https://pitstop-hamburgers-jaiah-7290s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Pitstop Hamburgers · Thora NSW",
  description:
    "An old school roadside burger shop behind the Thora General Store, midway between Bellingen and Dorrigo. One double cheeseburger, beef tallow fries, vanilla milkshakes. Don't think twice.",
  keywords: [
    "Pitstop Hamburgers",
    "Thora",
    "Bellingen",
    "Dorrigo",
    "burger",
    "cheeseburger",
    "beef tallow fries",
    "milkshake",
    "Waterfall Way",
  ],
  openGraph: {
    title: "Pitstop Hamburgers · Thora NSW",
    description:
      "Simple food done well. One double cheeseburger, beef tallow fries, vanilla milkshakes. Open Thursday to Sunday, 11am til 3pm. Don't think twice.",
    url: SITE,
    siteName: "Pitstop Hamburgers",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitstop Hamburgers · Thora NSW",
    description:
      "An old school roadside burger shop in the heart of the valley. Don't think twice.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${anton.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Grain />
      </body>
    </html>
  );
}
