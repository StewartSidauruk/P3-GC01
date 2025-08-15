export interface MultimediaItem { url: string }
export interface Article {
  section: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  multimedia?: MultimediaItem[];
  des_facet?: string[];
  geo_facet?: string[];
}

const API_KEY = process.env.NYT_API_KEY || "pbxNVs29xJg0dSAvFy9T2fFFIcq2FPlN";

export const SECTION_MAP: Record<string, string> = {
  world: "world",
  politics: "politics",
  business: "business",
  technology: "technology",
  sports: "sports",
  culture: "arts",
  opinion: "opinion",
  indonesia: "world",
};

export async function fetchTopStoriesBySection(section: string): Promise<Article[]> {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } });

    if (!res.ok) {
      console.error("[NYT] TopStories error", { section, status: res.status, statusText: res.statusText });
      return [];
    }

    const json = await res.json();
    return (json.results ?? []) as Article[];
  } catch (err) {
    console.error("[NYT] TopStories fetch failed", { section, err });
    return [];
  }
}


export function filterIndonesia(items: Article[]): Article[] {
  const kw = /(indonesia|jakarta|yogyakarta|bali|nusantara|jokowi|prabowo)/i;
  return items.filter(a =>
    kw.test(a.title) ||
    kw.test(a.abstract) ||
    kw.test(a.byline || "") ||
    (a.geo_facet || []).some(g => kw.test(g)) ||
    (a.des_facet || []).some(d => kw.test(d))
  );
}

type NYTSearchDoc = {
  web_url?: string;
  abstract?: string;
  lead_paragraph?: string;
  section_name?: string;
  news_desk?: string;
  headline?: { main?: string };
  byline?: { original?: string };
  multimedia?:
    | Array<{ url?: string; default?: { url?: string }; thumbnail?: { url?: string } }>
    | { url?: string; default?: { url?: string }; thumbnail?: { url?: string } };
};

const NYT_IMAGE_BASE = "https://static01.nyt.com/";

function absolutize(u?: string) {
  if (!u) return undefined;
  return u.startsWith("http") ? u : NYT_IMAGE_BASE + u.replace(/^\/+/, "");
}

function buildMultimediaArray(doc: NYTSearchDoc): { url: string }[] {
  const mmItems = Array.isArray(doc.multimedia)
    ? doc.multimedia
    : doc.multimedia
    ? [doc.multimedia]
    : [];

  if (!mmItems.length) return [];

  const m = mmItems[0];
  const firstUrl =
    absolutize(m.default?.url) ||
    absolutize(m.url) ||
    absolutize(m.thumbnail?.url);

  return firstUrl ? [{ url: firstUrl }] : [];
}

export async function searchArticles(q: string): Promise<Article[]> {
  const url = new URL("https://api.nytimes.com/svc/search/v2/articlesearch.json");
  url.searchParams.set("q", q);
  url.searchParams.set("sort", "newest");
  url.searchParams.set("api-key", API_KEY);

  const res = await fetch(url.toString(), { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to search NYT");

  const json = await res.json();
  const docs: NYTSearchDoc[] = json?.response?.docs ?? [];

  return docs
    .filter((d) => d.web_url && d.headline?.main)
    .map((d) => ({
      section: d.section_name || d.news_desk || "",
      title: d.headline!.main!,
      abstract: d.abstract || d.lead_paragraph || "",
      url: d.web_url!,
      byline: d.byline?.original || "",
      multimedia: buildMultimediaArray(d),
      des_facet: [],
      geo_facet: [],
    }));
}
