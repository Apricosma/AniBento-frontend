import { UserCollectionDetails } from "./api";
import CollectionGridView from "./CollectionGridView";

export default function CollectionGrid({
  userName,
  collectionId,
  initialCollectionDetails,
}: {
  userName: string;
  collectionId: number;
  initialCollectionDetails?: UserCollectionDetails | null;
}) {
  return (
    <div className="h-full min-h-0">
      <CollectionGridView
        userName={userName}
        collectionId={collectionId}
        initialCollectionDetails={initialCollectionDetails}
      />
    </div>
  );
}