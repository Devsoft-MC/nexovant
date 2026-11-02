import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexovant Solutions | App, Web & Zoho Solutions",
  description:
    "Nexovant Solutions builds mobile apps, fast websites and Zoho CRM solutions for businesses in Kochi, Kerala and beyond.",
  keywords: [
    "app development Kochi",
    "web development Kerala",
    "Zoho CRM implementation",
    "Zoho Books setup",
    "mobile app company",
    "custom software",
  ],
  openGraph: {
    type: "website",
    title: "Nexovant Solutions | App, Web & Zoho Solutions",
    description:
      "Mobile apps, fast websites and Zoho systems built around how your business works.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
