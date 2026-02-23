import CollectionGrid from "@/app/features/collections/CollectionGrid";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function CollectionContentViewPage() {
  return (
    <div>
      <CollectionGrid />
    </div>
  );
}
