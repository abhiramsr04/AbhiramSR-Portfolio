// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Abhiram S R | Portfolio",
  description: "Premium Portfolio of Abhiram S R showcasing skills, projects, and expertise.",
  openGraph: {
    title: "Abhiram S R | Portfolio",
    description: "Explore Abhiram S R’s portfolio: ML, Data Science, Web Development & more.",
    url: "https://your-portfolio-url.com",
    siteName: "Abhiram S R Portfolio",
    images: [
      {
        url: "/preview.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Abhiram S R Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiram S R | Portfolio",
    description: "Premium Portfolio of Abhiram S R",
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
