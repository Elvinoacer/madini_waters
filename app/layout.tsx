import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madini Mineral Water - Purely Refined in Nakuru",
  description: "Pure, Refreshing Madini Water — Delivered Directly to Your Door in Nakuru.",
  openGraph: {
    images: [
      {
        url: "/website_preview_url_image.webp",
        width: 1200,
        height: 630,
        alt: "Madini Mineral Water Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/website_preview_url_image.webp"],
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
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-background font-body-md text-body-md antialiased ripple-bg min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
