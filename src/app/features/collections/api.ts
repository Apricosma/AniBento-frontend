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
