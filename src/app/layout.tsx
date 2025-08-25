// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rogue | Portfolio",
  description: "Premium Portfolio of Rogue showcasing skills, projects, and expertise.",
  openGraph: {
    title: "Rogue | Portfolio",
    description: "Explore Rogue’s portfolio: ML, Data Science, Web Development & more.",
    url: "https://your-portfolio-url.com",
    siteName: "Rogue Portfolio",
    images: [
      {
        url: "/preview.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Rogue Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue | Portfolio",
    description: "Premium Portfolio of Rogue",
    images: ["/preview.png"], // replace with your OG image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 antialiased scroll-smooth">
        {/* Page Wrapper with fade-in */}
        <div className="min-h-screen flex flex-col animate-fadeIn">
          {children}
        </div>
      </body>
    </html>
  );
}
