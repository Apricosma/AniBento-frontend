import { apiFetch } from "@/lib/fetch";
import {
  FetchMediaListParams,
  MediaListItem,
  PagedResponse,
} from "./types";

export type UserCollectionSummary = {
  id: number;
  name: string;
  description?: string | null;
};

export type CollectionItemResponse = {
  collectionItemId: number;
  userMediaId: number;
  mediaId: number;
  title: string;
  mediaImageUrl: string;
  status: string;
  rating: number | null;
  note: string | null;
};

export type UserCollectionDetails = UserCollectionSummary & {
  items: CollectionItemResponse[];
};

export async function fetchMediaList(
  params: FetchMediaListParams,
): Promise<PagedResponse<MediaListItem>> {
  const queryParams = new URLSearchParams({
    page: String(params.page),
    pageSize: String(params.pageSize),
  });

  return apiFetch<PagedResponse<MediaListItem>>(
    `/media?${queryParams.toString()}`,
    {
      next: {
        revalidate: 60,
        tags: ["media-list"],
      },
    },
  );
}

export async function fetchUserCollections(userName: string) {
  return apiFetch<UserCollectionSummary[]>(`/users/${userName}/collections`, {
    cache: "no-store",
  });
}

export async function fetchCollectionDetails(
  userName: string,
  collectionId: number,
) {
  return apiFetch<UserCollectionDetails>(
    `/users/${userName}/collections/${collectionId}`,
    {
      cache: "no-store",
    },
  );
}
