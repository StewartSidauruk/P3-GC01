import Link from "next/link";

export default function NewsCard({ item }: { item: Article }) {
  const imgSrc = item.multimedia?.[0]?.url ?? "/placeholder.png";
  
  const author = item.byline?.replace(/^By\s+/i, '') || '';

  return (
    <article className="group cursor-pointer">
      <Link href={`/detail/`} className="block">
        <div className="space-y-3">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={imgSrc}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="space-y-2">
            {item.section && (
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                {item.section}
              </div>
            )}
            
            <h2 className="text-lg font-bold leading-tight text-gray-900 dark:text-black group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200">
              {item.title}
            </h2>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
              {item.abstract}
            </p>
            
            {author && (
              <div className="text-xs text-gray-500 dark:text-gray-500 font-medium pt-1">
                By {author}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}