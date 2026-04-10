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
  title: "Mark Noun | Dubai Real Estate Agent | Premium Properties",
  description: "SuperAgent Mark Noun specializes in luxury properties in Business Bay, Jumeirah Village Triangle, and Mohammed Bin Rashid City. 18+ years of expertise in Dubai real estate.",
  keywords: "Dubai real estate agent, property consultant Dubai, Business Bay properties, JVT homes, MBR City, luxury properties Dubai, property investment",
  authors: [{ name: "Mark Noun" }],
  creator: "Mark Noun Real Estate",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://marknoun.ae",
    siteName: "Mark Noun - Dubai Real Estate",
    title: "Mark Noun | Dubai Real Estate Agent | Premium Properties",
    description: "SuperAgent Mark Noun specializes in luxury properties in Business Bay, Jumeirah Village Triangle, and Mohammed Bin Rashid City.",
    images: [
      {
        url: "/mark-noun.jpg",
        width: 1200,
        height: 630,
        alt: "Mark Noun - Dubai Real Estate Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Noun | Dubai Real Estate Agent",
    description: "SuperAgent specializing in premium Dubai properties. 18+ years of expertise.",
    images: ["/mark-noun.jpg"],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://marknoun.ae",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
