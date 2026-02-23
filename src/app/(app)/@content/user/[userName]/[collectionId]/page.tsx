import CollectionGrid from "@/app/features/collections/CollectionGrid";
import { fetchUserCollectionsWithDetails } from "@/app/features/collections/api.server";

export default async function CollectionContentViewPage({ params }: {
  params: Promise<{ userName: string; collectionId: string }>;
}) {
  const { userName, collectionId } = await params;
  const parsedCollectionId = Number(collectionId);
  const initialCollectionDetails = await fetchUserCollectionsWithDetails(
    userName,
    parsedCollectionId,
  );

  return (
    <div className="h-full min-h-0">
      <CollectionGrid
        userName={userName}
        collectionId={parsedCollectionId}
        initialCollectionDetails={initialCollectionDetails}
      />
    </div>
  );
}
