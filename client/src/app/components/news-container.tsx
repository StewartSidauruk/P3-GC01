import NewsCard from "./news-card";

export default function NewsContainer({ news }: { news: Article[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <header className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-800 tracking-tight">
          Top Stories
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          The latest news from JogjakarTime's
        </p>
      </header>

      {news.length > 0 && (
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={news[0].multimedia?.[0]?.url ?? "/placeholder.png"}
                alt={news[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              {news[0].section && (
                <div className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                  {news[0].section}
                </div>
              )}
              <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-black">
                {news[0].title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-900 leading-relaxed">
                {news[0].abstract}
              </p>
              {news[0].byline && (
                <div className="text-sm text-gray-500 font-medium">
                  {news[0].byline}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {news.length > 1 && (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
            {news.slice(1).map((item, index) => (
              <NewsCard key={index + 1} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}