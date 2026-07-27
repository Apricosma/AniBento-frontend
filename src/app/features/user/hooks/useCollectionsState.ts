"use client";

import { useMemo } from "react";
import { useUserCollections } from "@/app/features/collections/hooks/useCollections";
import { useTogglePinCollection } from "@/app/features/collections/hooks/useCollectionMutations";
import type { UserCollectionSummary } from "@/app/features/collections/api";

// Kept as a type alias so downstream components don't need to update imports.
export type UserCollection = UserCollectionSummary;

export function useCollectionState(
  userName: string,
  initialCollections?: UserCollectionSummary[],
) {
  const query = useUserCollections(userName, initialCollections);
  const togglePinMutation = useTogglePinCollection(userName);

  const collections = useMemo(
    () => query.data ?? [],
    [query.data],
  );

  const pinned = useMemo(
    () => collections.filter((c) => !!c.isPinned),
    [collections],
  );

  const unpinned = useMemo(
    () => collections.filter((c) => !c.isPinned),
    [collections],
  );

  const togglePin = (id: number) => togglePinMutation.mutate(id);

  return {
    collections,
    pinned,
    unpinned,
    togglePin,
    isLoading: query.isLoading,
  };
}