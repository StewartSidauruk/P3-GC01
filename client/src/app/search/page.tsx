import NewsContainer from "../components/news-container";
import { searchArticles } from "../lib/nyt";

type SP = Record<string, string | string[] | undefined>;

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<SP>;
}) {
  const sp = (await (searchParams ?? Promise.resolve({} as SP))) as SP;

  const rawQ = sp.q;
  const q = (Array.isArray(rawQ) ? rawQ[0] : rawQ ?? "").trim();

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
