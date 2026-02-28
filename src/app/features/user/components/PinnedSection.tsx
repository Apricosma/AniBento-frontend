"use client";

import type { User } from "../../auth/types";
import type { UserCollection } from "../hooks/useCollectionsState";
import { CollectionRow } from "./CollectionRow";

export function PinnedSection({
  user,
  pinned,
  onTogglePin,
  isCurrentUser,
}: {
  user: User;
  pinned: UserCollection[];
  onTogglePin: (id: number) => void;
  isCurrentUser: boolean;
}) {
  if (pinned.length === 0) return null;

  return (
    <section className="space-y-2">
      <div className="px-2 text-xs font-medium text-muted-foreground tracking-wide">
        Pinned
      </div>

      <div className="space-y-2">
        {pinned.map((collection) => (
          <CollectionRow
            key={collection.id}
            user={user}
            collection={collection}
            onTogglePin={onTogglePin}
            isCurrentUser={isCurrentUser}
          />
        ))}
      </div>
    </section>
  );
}