import Link from "next/link";

export default function NewsCard({ item }: { item: Article }) {
  const imgSrc = item.multimedia?.[0]?.url ?? "/placeholder.png"; // fallback if missing

  return (
    <div className="h-auto p-4 rounded-lg border border-zinc-300 dark:border-zinc-600 flex flex-col justify-between">
      <div>
        <img
          src={imgSrc}
          alt={item.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-2xl font-semibold mt-3">{item.title}</h2>
        <p className="text-sm text-gray-500">{item.abstract}</p>
      </div>
      <div>
        <Link href={`/detail/`}>
          <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-md mt-3">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
