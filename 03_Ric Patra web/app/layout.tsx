import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ric Patra | Begin the Journey",
  description:
    "Ric Patra is 18 and starting the journey. Explore the official portfolio for YouTube, Instagram, X, and future community updates.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Ric Patra | Begin the Journey",
    description: "I'm 18 and I'm starting. Follow Ric Patra across YouTube, Instagram, X, and more.",
    type: "website",
    images: ["/favicon.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
