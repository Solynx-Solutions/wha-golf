import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "20th Annual WHA Golf Tournament | June 19, 2026 — Eagle Vines Golf Club, Napa Valley",
  description:
    "Register for Northern California's premier hardscape industry golf event. Join contractors, suppliers, manufacturers, and outdoor living professionals at Eagle Vines Golf Club in Napa Valley on Friday, June 19, 2026.",
  keywords: [
    "WHA golf tournament",
    "Western Hardscape Association",
    "hardscape golf event",
    "Napa Valley golf",
    "Eagle Vines Golf Club",
    "hardscape contractors",
    "construction industry networking",
    "outdoor living professionals",
  ],
  openGraph: {
    title: "20th Annual WHA Golf Tournament | June 19, 2026",
    description:
      "Northern California's Premier Hardscape Networking Event at Eagle Vines Golf Club, Napa Valley.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "20th Annual WHA Golf Tournament | June 19, 2026",
    description:
      "Northern California's Premier Hardscape Networking Event — Register Now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
