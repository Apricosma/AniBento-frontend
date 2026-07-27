"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCollection, deleteCollection, type UserCollectionSummary } from "../api";
import { togglePinCollection } from "@/app/features/user/api";
import { collectionKeys } from "../queryKeys";

export function useCreateCollection(userName?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      name,
      isPrivate,
      description,
    }: {
      name: string;
      isPrivate: boolean;
      description?: string;
    }) => createCollection(name, isPrivate, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: collectionKeys.myCollections() });
      if (userName) {
        queryClient.invalidateQueries({
          queryKey: collectionKeys.userCollections(userName),
        });
      }
    },
  });
}

export function useDeleteCollection(userName?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (collectionId: number) => deleteCollection(collectionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: collectionKeys.myCollections() });
      if (userName) {
        queryClient.invalidateQueries({
          queryKey: collectionKeys.userCollections(userName),
        });
      }
    },
  });
}

export function useTogglePinCollection(userName: string) {
  const queryClient = useQueryClient();
  const queryKey = collectionKeys.userCollections(userName);

  return useMutation({
    mutationFn: (collectionId: number) => togglePinCollection(collectionId),
    onMutate: async (collectionId) => {
      await queryClient.cancelQueries({ queryKey });
      const previous = queryClient.getQueryData<UserCollectionSummary[]>(queryKey);

      queryClient.setQueryData<UserCollectionSummary[]>(queryKey, (old) =>
        old?.map((c) =>
          c.id === collectionId ? { ...c, isPinned: !c.isPinned } : c,
        ) ?? old,
      );

      return { previous };
    },
    onError: (_err, _collectionId, context) => {
      if (context?.previous !== undefined) {
        queryClient.setQueryData(queryKey, context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
