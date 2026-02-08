import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMonoDisplay = IBM_Plex_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Reehan Ahmed",
  description:
    "Building products at the intersection of algorithms and AI. Platform PM, writer, builder.",
  openGraph: {
    title: "Reehan Ahmed",
    description:
      "Building products at the intersection of algorithms and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${ibmPlexMonoDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
