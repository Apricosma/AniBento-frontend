import "server-only";
import { apiFetch } from "@/lib/fetch";

export type MediaDetails = {
  id: number;
  mediaType: string;
  title: string;
  description: string;
  releaseDate: string;
  mediaImageUrl: string;
  genres: {
    id: number;
    name: string;
  }[];
};

export default async function fetchMediaDetails(mediaId: number) {
  return apiFetch<MediaDetails | null>(`/media/${mediaId}`);
}