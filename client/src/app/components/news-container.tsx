import NewsCard from "./news-card";

export default function NewsContainer({ news }: { news: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {news.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </div>
  );
}
