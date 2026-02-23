import "server-only";

import { cookies } from "next/headers";
import { apiFetch } from "@/lib/fetch";
import type {
  UserCollectionDetails,
  UserCollectionSummary,
} from "./api";

export async function fetchUserCollections(userName: string) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  return apiFetch<UserCollectionSummary[]>(`/users/${userName}/collections`, {
    cache: "no-store",
    headers: {
      Cookie: cookieHeader,
    },
  });
}

export async function fetchUserCollectionsWithDetails(
  userName: string,
  collectionId: number,
) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  return apiFetch<UserCollectionDetails>(
    `/users/${userName}/collections/${collectionId}`,
    {
      cache: "no-store",
      headers: {
        Cookie: cookieHeader,
      },
    },
  );
}

export async function fetchMyCollections() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  return apiFetch<UserCollectionSummary[]>(`/collections/`, {
    cache: "no-store",
    headers: {
      Cookie: cookieHeader,
    },
  });
}
