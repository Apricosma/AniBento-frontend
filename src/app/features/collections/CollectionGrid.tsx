import { UserCollectionDetails } from "./api";
import CollectionGridView from "./CollectionGridView";

export default async function CollectionGrid({
  collectionDetails,
}: {
  collectionDetails: UserCollectionDetails;
}) {
  return <CollectionGridView collectionDetails={collectionDetails} />;
}