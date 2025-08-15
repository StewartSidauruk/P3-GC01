import NewsContainer from "../components/news-container";
import { searchArticles } from "../lib/nyt";

function isPromise<T = unknown>(v: unknown): v is Promise<T> {
  return typeof v === "object" && v !== null && "then" in (v as { then?: unknown });
}

export default async function SearchPage({
  searchParams,
}: {
  // Accept both shapes without `any`
  searchParams: unknown | Promise<unknown>;
}) {
  // Resolve if Next passes a Promise (Next 15), or use the object directly (older shape)
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
