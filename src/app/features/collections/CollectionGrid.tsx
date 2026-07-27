import { Suspense } from "react";
import type { UserCollectionDetails } from "./api";
import CollectionGridView from "./CollectionGridView";
import CollectionGridSkeleton from "./CollectionGridSkeleton";

export default function CollectionGrid({
  userName,
  collectionId,
  initialData,
}: {
  userName: string;
  collectionId: number;
  initialData?: UserCollectionDetails | null;
}) {
  return (
    <div className="h-full min-h-0">
      <Suspense fallback={<CollectionGridSkeleton />}>
        <CollectionGridView
          userName={userName}
          collectionId={collectionId}
          initialData={initialData}
        />
      </Suspense>
    </div>
  );
}