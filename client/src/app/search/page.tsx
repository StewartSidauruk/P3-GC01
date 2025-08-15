import type { Metadata } from "next";
import NewsContainer from "../components/news-container";
import { searchArticles } from "../lib/nyt";

/** Tiny runtime guard so we can support both Next 14 (object) and Next 15 (Promise) */
function isPromise<T = unknown>(v: unknown): v is Promise<T> {
  return typeof v === "object" && v !== null && "then" in (v as { then?: unknown });
}

// Dynamic <title>/<meta> per query (pages receive searchParams)
export async function generateMetadata({
  searchParams,
}: {
  searchParams: unknown | Promise<unknown>;
}): Promise<Metadata> {
  const sp = isPromise<Record<string, unknown>>(searchParams)
    ? await searchParams
    : (searchParams as Record<string, unknown> | undefined);

  const q = typeof sp?.q === "string" ? sp.q.trim() : "";

  return q
    ? {
        title: `Search: "${q}" • JogjakarTime's`,
        description: `Search results for "${q}" from The New York Times via JogjakarTime's.`,
      }
    : {
        title: "Search News • JogjakarTime's",
        description: "Search the latest news from The New York Times via JogjakarTime's",
      };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: unknown | Promise<unknown>;
}) {
  const sp = isPromise<Record<string, unknown>>(searchParams)
    ? await searchParams
    : (searchParams as Record<string, unknown> | undefined);

  const q = typeof sp?.q === "string" ? sp.q.trim() : "";

  if (!q) {
    return (
      <div className="container mx-auto py-5 px-4">
        <h1 className="text-2xl font-bold mb-3">Search</h1>
        <p className="text-gray-600">Type a keyword in the search box above.</p>
      </div>
    );
  }

  const results = await searchArticles(q);

  return (
    <div className="container mx-auto py-5">
      <NewsContainer
        news={results}
        heading={`Search: “${q}”`}
        sub="Results from The New York Times"
      />
    </div>
  );
}
