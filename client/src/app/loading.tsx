export default function Loading() {
  const cards = Array.from({ length: 8 });

  return (
    <div className="container mx-auto py-5 px-4">
      <header className="border-b border-gray-200 pb-4 mb-8">
        <div className="h-7 w-40 rounded bg-gray-200 shimmer" />
        <div className="mt-2 h-4 w-72 rounded bg-gray-200 shimmer" />
      </header>

      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="aspect-[16/9] rounded overflow-hidden bg-gray-200 shimmer" />
          <div className="space-y-4">
            <div className="h-4 w-20 rounded bg-gray-200 shimmer" />
            <div className="h-8 w-5/6 rounded bg-gray-200 shimmer" />
            <div className="h-8 w-3/4 rounded bg-gray-200 shimmer" />
            <div className="h-4 w-4/5 rounded bg-gray-200 shimmer" />
            <div className="h-4 w-56 rounded bg-gray-200 shimmer" />
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
          {cards.map((_, i) => (
            <article key={i} className="group">
              <div className="space-y-3">
                <div className="aspect-[4/3] overflow-hidden rounded bg-gray-200 shimmer" />
                <div className="h-3 w-14 rounded bg-gray-200 shimmer" />
                <div className="h-5 w-5/6 rounded bg-gray-200 shimmer" />
                <div className="h-4 w-full rounded bg-gray-200 shimmer" />
                <div className="h-3 w-24 rounded bg-gray-200 shimmer" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
