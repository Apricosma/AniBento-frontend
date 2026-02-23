"use client";

import { useMemo, useState, useOptimistic, useTransition, useCallback } from "react";
import { togglePinCollection } from "../api";

export type UserCollection = {
  id: number;
  name: string;
  description?: string | null;
  isPinned?: boolean;
};

type OptimisticPin = { id: number; isPinned: boolean } | null;

export function useCollectionState(initialCollections: UserCollection[]) {
  const [collections, setCollections] = useState<UserCollection[]>(initialCollections);
  const [optimisticPin, setOptimisticPin] = useOptimistic<OptimisticPin>(null);
  const [, startTransition] = useTransition();

  const effectiveCollections = useMemo(() => {
    if (!optimisticPin) return collections;
    return collections.map((c) =>
      c.id === optimisticPin.id ? { ...c, isPinned: optimisticPin.isPinned } : c
    );
  }, [collections, optimisticPin]);

  const pinned = useMemo(
    () => effectiveCollections.filter((c) => !!c.isPinned),
    [effectiveCollections]
  );

  const unpinned = useMemo(
    () => effectiveCollections.filter((c) => !c.isPinned),
    [effectiveCollections]
  );

  const togglePin = useCallback(
    async (id: number) => {
      const current = effectiveCollections.find((c) => c.id === id);
      if (!current) return;

      const newIsPinned = !current.isPinned;

      startTransition(() => {
        setOptimisticPin({ id, isPinned: newIsPinned });
      });

      const result = await togglePinCollection(id);
      console.log("Toggle pin result:", result);

      if (!result?.ok) {
        startTransition(() => setOptimisticPin(null));
        return;
      }

      setCollections((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isPinned: newIsPinned } : c))
      );

      startTransition(() => setOptimisticPin(null));
    },
    [effectiveCollections, setOptimisticPin, startTransition]
  );

  return {
    collections: effectiveCollections,
    pinned,
    unpinned,
    togglePin,
  };
}