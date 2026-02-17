import { fetchMediaList } from "./api";
import CollectionGridView from "./CollectionGridView";

export default async function CollectionGrid() {
  const data = await fetchMediaList({ page: 1, pageSize: 24 });

  return <CollectionGridView initialItems={data.items} />;
}