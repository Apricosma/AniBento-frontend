import { fetchUserCollectionsWithDetails } from "@/app/features/collections/api";
import CollectionGrid from "@/app/features/collections/CollectionGrid";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function CollectionContentViewPage({children, params}: {
  children: React.ReactNode;
  params: Promise<{ userName: string; collectionId: string }>;
}) {
  const { userName, collectionId } = await params;
  const collectionDetails = await fetchUserCollectionsWithDetails(userName, Number(collectionId));
  if (!collectionDetails) {
    return <p>Collection not found</p>
  }
  return (
    <div>
      <CollectionGrid collectionDetails={collectionDetails} />
    </div>
  );
}
