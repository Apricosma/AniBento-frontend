import { apiFetch } from "@/lib/fetch";
import { FetchMediaListParams, MediaListItem, PagedResponse } from "./types";

export async function fetchMediaList(
  params: FetchMediaListParams
): Promise<PagedResponse<MediaListItem>> {
  const queryParams = new URLSearchParams({
    page: String(params.page),
    pageSize: String(params.pageSize),
  });

  return apiFetch<PagedResponse<MediaListItem>>(
    `/media?${queryParams.toString()}`, {
      next: {
        revalidate: 60, 
        tags: ["media-list"],
      }
    }
  );
}