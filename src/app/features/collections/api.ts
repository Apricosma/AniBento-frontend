import { apiFetch } from "@/lib/fetch";
import {
  FetchMediaListParams,
  MediaListItem,
  PagedResponse,
  TogglePinResult,
} from "./types";
import { cookies } from "next/headers";

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
  console.log(`fetching collections for ${userName}`);
  return apiFetch<UserCollectionSummary[]>(`/users/${userName}/collections`, {
    next: {
      revalidate: 60,
      tags: [`collections-${userName}`],
    },
  });
}

// Public facing collection fetching: will only return private collections if the user is authenticated and is the owner of the collections
export async function fetchUserCollectionsWithDetails(
  userName: string,
  collectionId: number,
) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");
  console.log(`fetching collection details for collection ${collectionId}`);
  return apiFetch<UserCollectionDetails>(
    `/users/${userName}/collections/${collectionId}`,
    {
      next: {
        revalidate: 60,
        tags: [`collection-details-${collectionId}`],
      },
      headers: {Cookie: cookieHeader}
    },
  );
}

export async function fetchMyCollections(userName: string) {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");
  console.log(`fetching my collections for ${userName}`);
  return apiFetch<UserCollectionSummary[]>(`/collections/`, {
    cache: "no-store",
    headers: {
      Cookie: cookieHeader,
    },
  });
}
