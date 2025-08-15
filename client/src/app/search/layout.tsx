import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search News",
  description: "Search the latest news from The New York Times via JogjakarTime's.",
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
