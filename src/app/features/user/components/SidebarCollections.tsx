// src/app/features/user/components/SidebarCollections.tsx
"use client";

import type { User } from "../../auth/types";
import { useAuth } from "../../auth/AuthProvider";
import {
  useCollectionState,
  type UserCollection,
} from "../hooks/useCollectionsState";
import { PinnedSection } from "./PinnedSection";
import { AllSection } from "./AllSection";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import CreateCollectionForum from "../../collections/CreateCollectionForum";

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

  const [open, setOpen] = useState(false);

  const {
    collections: local,
    pinned,
    unpinned,
    togglePin,
    addCollection,
  } = useCollectionState(collections);

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
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
            onCreate={(collection) => {
              addCollection(collection);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <div className=" overflow-y-auto pt-4 pr-3 -mr-3">
        {local.length === 0 ? (
          <p className="text-sm text-muted-foreground">No collections found</p>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
