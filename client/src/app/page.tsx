import NewsContainer from "./components/news-container";
import type { Article } from "./lib/nyt";

const API_KEY = process.env.NYT_API_KEY || "pbxNVs29xJg0dSAvFy9T2fFFIcq2FPlN";

async function fetchNews(): Promise<Article[]> {
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      console.error("[NYT] Home TopStories error", {
        status: res.status,
        statusText: res.statusText,
      });
      return [];
    }

    const json = await res.json();
    return (json.results ?? []) as Article[];
  } catch (err) {
    console.error("[NYT] Home TopStories fetch failed", err);
    return [];
  }
}

export default async function Home() {
  const news = await fetchNews();

  if (news.length === 0) {
    return (
      <div className="container mx-auto py-5">
        <header className="border-b border-gray-200 pb-4 mb-8">
          <h1 className="text-3xl font-bold">Top Stories</h1>
          <p className="text-gray-600">
            The latest news from JogjakarTime&apos;s
          </p>
        </header>
        <p className="text-gray-600">
          No articles are available right now (API rate limit). Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-5">
      <NewsContainer
        news={news}
        heading="Top Stories"
        sub="The latest news from JogjakarTime's"
      />
    </div>
  );
}
