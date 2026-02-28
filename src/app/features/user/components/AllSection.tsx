// src/app/features/user/components/sidebar/AllSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import type { User } from "../../auth/types";
import type { UserCollection } from "../hooks/useCollectionsState";
import { CollectionRow } from "./CollectionRow";

export function AllSection({
  user,
  unpinned,
  onTogglePin,
  isCurrentUser,
  defaultOpen = true,
}: {
  user: User;
  unpinned: UserCollection[];
  onTogglePin: (id: number) => void;
  isCurrentUser: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between px-2">
        <div className="text-xs font-medium text-muted-foreground tracking-wide">
          All
        </div>

        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-accent/20"
            aria-label={open ? "Collapse collections" : "Expand collections"}
            title={open ? "Collapse" : "Expand"}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="mt-2">
        <div className="space-y-2">
          {unpinned.map((collection) => (
            <CollectionRow
              key={collection.id}
              user={user}
              collection={collection}
              onTogglePin={onTogglePin}
              isCurrentUser={isCurrentUser}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}