import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JogjakarTime's",
    template: "%s • JogjakarTime's",
  },
  description:
    "The voice of Wong Jogja — latest headlines, analysis, and culture.",
  applicationName: "JogjakarTime's",
  keywords: ["news", "NYT", "Jogja", "Indonesia", "headlines"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "JogjakarTime's",
    description:
      "The voice of Wong Jogja — latest headlines, analysis, and culture.",
    type: "website",
    url: "/",
    siteName: "JogjakarTime's",
  },
  twitter: {
    card: "summary_large_image",
    title: "JogjakarTime's",
    description:
      "The voice of Wong Jogja — latest headlines, analysis, and culture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
