"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  fetchUserCollections,
  fetchMyCollections,
  fetchCollectionDetails,
  type UserCollectionSummary,
  type UserCollectionDetails,
} from "../api";
import { collectionKeys } from "../queryKeys";

const COLLECTIONS_STALE_TIME = 60_000;
const COLLECTION_DETAILS_STALE_TIME = 90_000;

export function useUserCollections(
  userName: string,
  initialData?: UserCollectionSummary[],
) {
  return useQuery({
    queryKey: collectionKeys.userCollections(userName),
    queryFn: () => fetchUserCollections(userName),
    staleTime: COLLECTIONS_STALE_TIME,
    initialData,
    initialDataUpdatedAt: initialData ? () => Date.now() : undefined,
  });
}

export function useMyCollections(initialData?: UserCollectionSummary[]) {
  return useQuery({
    queryKey: collectionKeys.myCollections(),
    queryFn: fetchMyCollections,
    staleTime: COLLECTIONS_STALE_TIME,
    initialData,
    initialDataUpdatedAt: initialData ? () => Date.now() : undefined,
  });
}

export function useSuspenseCollectionDetails(
  userName: string,
  collectionId: number,
  initialData?: UserCollectionDetails | null,
) {
  return useSuspenseQuery({
    queryKey: collectionKeys.details(userName, collectionId),
    queryFn: () => fetchCollectionDetails(userName, collectionId),
    staleTime: COLLECTION_DETAILS_STALE_TIME,
    initialData: initialData ?? undefined,
    initialDataUpdatedAt: initialData ? () => Date.now() : undefined,
  });
}
