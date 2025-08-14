import NewsContainer from "./components/news-container";

const fetchNews = async () => {
  const res = await fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pbxNVs29xJg0dSAvFy9T2fFFIcq2FPlN",
    { cache: "force-cache" }
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  const news = await res.json();
  return news.results as Article[];
};

export default async function Home() {
  const news = await fetchNews();

  return (
    <div className="container mx-auto py-5">
      <NewsContainer news={news} />
    </div>
  );
}
