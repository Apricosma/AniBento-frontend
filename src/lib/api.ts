const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const GENRES = {
  1: "Action",
  2: "Adventure",
  3: "Comedy",
  4: "Drama",
  5: "Fantasy",
  6: "Horror",
  7: "Mystery",
  8: "Romance",
  9: "Sci-Fi",
  10: "Slice of Life",
  11: "Sports",
  12: "Supernatural",
  13: "Thriller",
  14: "Mecha",
  15: "Music",
  16: "Psychological",
  17: "Historical",
  18: "Military",
  19: "Parody",
  20: "School",
  21: "Shounen",
  22: "Shoujo",
  23: "Seinen",
  24: "Josei",
  25: "Isekai",
  26: "Ecchi",
  27: "Harem",
  28: "Reverse Harem",
  29: "Superhero",
  30: "Cyberpunk",
  31: "Post-Apocalyptic",
  32: "Steampunk",
  33: "Crime",
  34: "Detective",
  35: "Martial Arts",
  36: "Vampire",
  37: "Magic",
  38: "Game",
  39: "Demons",
  40: "Space",
} as const;

// NOTE: keys of objects are strings in TS, so this becomes "1" | "2" | ...
export type GenreId = keyof typeof GENRES;
export type GenreName = (typeof GENRES)[GenreId];

// Pragmatic: API sends number, so accept number.
export type GenreDto = {
  id: number;
  name: string;
};

export type MediaListItem = {
  id: number;
  title: string;
  releaseDate: string;
  mediaImageUrl: string | null;
  enteredAt: string;
  mediaType: string;
  genres: GenreDto[];
};

export type PagedResponse<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export type FetchMediaListParams = {
  page: number;
  pageSize: number;
};

export async function fetchMediaList(
  params: FetchMediaListParams,
): Promise<PagedResponse<MediaListItem>> {
  if (!API_BASE) {
    throw new Error("NEXT_PUBLIC_API_BASE is not set");
  }

  const base = API_BASE.endsWith("/") ? API_BASE : `${API_BASE}/`;
  const url = new URL("media", base);
  url.searchParams.set("page", String(params.page));
  url.searchParams.set("pageSize", String(params.pageSize));

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch media list (${res.status}): ${text}`);
  }

  return (await res.json()) as PagedResponse<MediaListItem>;
}
