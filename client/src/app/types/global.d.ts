interface News {
  id: string;
  title: string;
  description: string;
  poster: string;
  publishedAt: string;
  originalUrl: string;
  author: string;
  category: string;
}

type NewsForm = Pick<News, "title" | "description" | "poster">;

interface Multimedia {
  url: string;
}

interface Article {
  section: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  multimedia: Multimedia;
}