// src/app/features/user/components/SidebarCollections.tsx
"use client";

import type { User } from "../../auth/types";
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
        
      />

      <AllSection
        user={user}
        unpinned={unpinned}
        onTogglePin={togglePin}
        
        defaultOpen
      />
    </div>
  );
}