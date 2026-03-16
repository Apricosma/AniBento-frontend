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

  if (local.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No collections found</p>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full pt-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="w-full">
            Create New Collection
          </Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <CreateCollectionForum
            onCreate={(collection) => {
              addCollection(collection);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
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
