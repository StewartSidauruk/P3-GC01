import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsContainer from "@/app/components/news-container";
import {
  SECTION_MAP,
  fetchTopStoriesBySection,
  filterIndonesia,
  type Article,
} from "@/app/lib/nyt";

type Params = { slug: string };

export async function generateStaticParams() {
  return Object.keys(SECTION_MAP).map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.toLowerCase();
  const section = SECTION_MAP[key];
  if (!section) return { title: "Not Found • JogjakarTime's" };

  const label = key.charAt(0).toUpperCase() + key.slice(1);
  const description =
    key === "indonesia"
      ? "Curated news from The New York Times World section filtered for Indonesia."
      : `Latest news from The New York Times ${label} section.`;

  return {
    title: `${label} • JogjakarTime's`,
    description,
    openGraph: {
      title: `${label} • JogjakarTime's`,
      description,
      type: "website",
      url: `/category/${key}`,
      siteName: "JogjakarTime's",
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} • JogjakarTime's`,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const key = slug.toLowerCase();
  const section = SECTION_MAP[key];
  if (!section) return notFound();

  let items: Article[] = await fetchTopStoriesBySection(section);
  if (key === "indonesia") items = filterIndonesia(items);

  const label = key.charAt(0).toUpperCase() + key.slice(1);
  const sub =
    key === "indonesia"
      ? "Curated from World section — filtered for Indonesia"
      : `From NYT ${section.toUpperCase()} section`;

  return (
    <div className="container mx-auto py-5">
      <NewsContainer news={items} heading={label} sub={sub} />
    </div>
  );
}
