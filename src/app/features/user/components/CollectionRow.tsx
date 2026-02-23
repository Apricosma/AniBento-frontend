"use client";

import Link from "next/link";
import { Pin } from "lucide-react";

import type { UserCollection } from "../hooks/useCollectionsState";
import type { User } from "../../auth/types";

export function CollectionRow({
  user,
  collection,
  onTogglePin,
  pinDisabled = false,
}: {
  user: User;
  collection: UserCollection;
  onTogglePin: (id: number) => void;
  pinDisabled?: boolean;
}) {
  return (
    <Link
      href={`/user/${user.userName}/${collection.id}`}
      className="block rounded-md border border-accent p-2 hover:bg-accent/20"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="font-medium leading-tight">{collection.name}</div>
          {collection.description ? (
            <div className="text-sm text-muted-foreground line-clamp-2">
              {collection.description}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onTogglePin(collection.id);
          }}
          disabled={pinDisabled}
          className="rounded p-1 hover:bg-accent/20 disabled:opacity-50"
          aria-label={
            collection.isPinned ? "Unpin collection" : "Pin collection"
          }
          title={collection.isPinned ? "Unpin" : "Pin"}
        >
          <Pin
            className={`h-4 w-4 ${
              collection.isPinned
                ? "fill-current text-primary"
                : "text-muted-foreground"
            }`}
          />
        </button>
      </div>
    </Link>
  );
}
