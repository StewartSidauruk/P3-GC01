import NewsContainer from "../components/news-container";
import { searchArticles } from "../lib/nyt";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams?.q || "").trim();

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
