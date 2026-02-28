// src/app/features/user/components/SidebarCollections.tsx
"use client";

import type { User } from "../../auth/types";
import { useAuth } from "../../auth/AuthProvider";
import { useCollectionState, type UserCollection } from "../hooks/useCollectionsState";
import { PinnedSection } from "./PinnedSection";
import { AllSection } from "./AllSection";

export default function SidebarCollections({
  collections,
  user,
}: {
  collections: UserCollection[];
  user: User;
}) {
  const { user: currentUser } = useAuth();
  const isCurrentUser =
    !!currentUser?.userName &&
    !!user.userName &&
    currentUser.userName.toLowerCase() === user.userName.toLowerCase();

  const { collections: local, pinned, unpinned, togglePin } =
    useCollectionState(collections);

  if (local.length === 0) {
    return <p className="text-sm text-muted-foreground">No collections found</p>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <PinnedSection
        user={user}
        pinned={pinned}
        onTogglePin={togglePin}
        isCurrentUser={isCurrentUser}
      />

      <AllSection
        user={user}
        unpinned={unpinned}
        onTogglePin={togglePin}
        isCurrentUser={isCurrentUser}
        defaultOpen
      />
    </div>
  );
}