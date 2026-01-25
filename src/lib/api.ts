export type Media = {
  id: number;
  title: string;
  description: string;
  mediaType: string;
  releaseDate: string | null;
  studio: string | null;
  mediaImageUrl: string | null;
  episodeOrChapterCount: number | null;
}