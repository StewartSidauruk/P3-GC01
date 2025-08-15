import Image from "next/image";
import NewsCard from "./news-card";
import type { Article } from "../lib/nyt";

export default function NewsContainer({
  news,
  heading = "Top Stories",
  sub = "The latest news from JogjakarTime's",
}: {
  news: Article[];
  heading?: string;
  sub?: string;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <header className="border-b border-gray-200 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{heading}</h1>
        <p className="text-gray-600 mt-1">{sub}</p>
      </header>

      {news.length > 0 && (
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={news[0].multimedia?.[0]?.url ?? "/placeholder.png"}
                alt={news[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              {news[0].section && (
                <div className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                  {news[0].section}
                </div>
              )}
              <h2 className="text-4xl font-bold leading-tight">{news[0].title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{news[0].abstract}</p>
              {news[0].byline && (
                <div className="text-sm text-gray-500 font-medium">{news[0].byline}</div>
              )}
            </div>
          </div>
        </section>
      )}

      {news.length > 1 && (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {news.slice(1).map((item, i) => (
              <NewsCard key={i + 1} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
