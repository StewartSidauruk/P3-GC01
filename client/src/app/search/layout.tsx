import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q = "" } = await searchParams;
  const query = q.trim();

  return query
    ? {
        title: `Search: "${query}" • JogjakarTime's`,
        description: `Search results for "${query}" from The New York Times via JogjakarTime's.`,
      }
    : {
        title: "Search News • JogjakarTime's",
        description:
          "Search the latest news from The New York Times via JogjakarTime's",
      };
}
