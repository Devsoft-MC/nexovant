import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexovantsolutions.com"),
  title: "Zoho Consulting & Custom Software Development | Nexovant Solutions",
  description:
    "Nexovant Solutions delivers Zoho CRM implementation, Zoho Creator development, custom web and mobile apps, and business automation for growing companies worldwide. Book a free consultation.",
  keywords: [
    "Zoho consulting",
    "Zoho CRM implementation",
    "Zoho Creator development",
    "custom web application development",
    "mobile app development",
    "business process automation",
  ],
  openGraph: {
    type: "website",
    title: "Zoho Consulting & Custom Software Development | Nexovant Solutions",
    description:
      "Nexovant Solutions delivers Zoho CRM implementation, Zoho Creator development, custom web and mobile apps, and business automation for growing companies worldwide. Book a free consultation.",
    siteName: "Nexovant Solutions",
    images: [{ url: "/nexovant-social-preview-v2.png", width: 1200, height: 630, alt: "Nexovant Solutions software development and Zoho consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoho Consulting & Custom Software Development | Nexovant Solutions",
    description:
      "Nexovant Solutions delivers Zoho CRM implementation, Zoho Creator development, custom web and mobile apps, and business automation for growing companies worldwide. Book a free consultation.",
    images: ["/nexovant-social-preview-v2.png"],
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
