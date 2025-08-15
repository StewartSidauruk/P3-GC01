import NewsContainer from "./components/news-container";
import type { Article } from "./lib/nyt";

const API_KEY = process.env.NYT_API_KEY || "pbxNVs29xJg0dSAvFy9T2fFFIcq2FPlN";

async function fetchNews(): Promise<Article[]> {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`,
    { next: { revalidate: 600 }, cache: "force-cache" }
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  const json = await res.json();
  return json.results as Article[];
}

export default async function Home() {
  const news = await fetchNews();

  return (
    <div className="container mx-auto py-5">
      <NewsContainer news={news} heading="Top Stories" sub="The latest news from JogjakarTime's" />
    </div>
  );
}
