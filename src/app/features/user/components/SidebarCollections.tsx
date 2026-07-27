// src/app/features/user/components/SidebarCollections.tsx
"use client";

import type { User } from "../../auth/types";
import { useCollectionState } from "../hooks/useCollectionsState";
import type { UserCollectionSummary } from "@/app/features/collections/api";
import { PinnedSection } from "./PinnedSection";
import { AllSection } from "./AllSection";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import CreateCollectionForum from "../../collections/CreateCollectionForum";

export default function SidebarCollections({
  initialCollections,
  user,
  isOwner = false,
}: {
  initialCollections?: UserCollectionSummary[];
  user: User;
  isOwner?: boolean;
}) {
  const userName = user.userName ?? "";

  const [open, setOpen] = useState(false);

  const { collections, pinned, unpinned, togglePin } = useCollectionState(
    userName,
    initialCollections,
  );

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      {isOwner && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="w-full shrink-0">
              Create New Collection
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side="right"
            sideOffset={4}
            className="w-80 border border-zinc-700 shadow-2xl shadow-black/60"
          >
            <CreateCollectionForum
              userName={userName}
              onSuccess={() => setOpen(false)}
            />
          </PopoverContent>
        </Popover>
      )}

      <div className=" overflow-y-auto pt-4 pr-3 -mr-3">
        {collections.length === 0 ? (
          <p className="text-sm text-muted-foreground">No collections found</p>
        ) : (
          <>
            <PinnedSection
              user={user}
              pinned={pinned}
              onTogglePin={togglePin}
              isCurrentUser={isOwner}
            />

            <AllSection
              user={user}
              unpinned={unpinned}
              onTogglePin={togglePin}
              isCurrentUser={isOwner}
              defaultOpen
            />
          </>
        )}
      </div>
    </div>
  );
}
