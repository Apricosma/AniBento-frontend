"use client";

import ContentCard from "@/app/features/media/components/ContentCard";
import FilterBar from "@/app/features/collections/components/filterbar/FilterBar";
import Link from "next/link";
import type { UserCollectionDetails } from "./api";
import { useSuspenseCollectionDetails } from "./hooks/useCollections";

interface CollectionGridViewProps {
  userName: string;
  collectionId: number;
  initialData?: UserCollectionDetails | null;
}

export default function CollectionGridView({
  userName,
  collectionId,
  initialData,
}: CollectionGridViewProps) {
  const { data } = useSuspenseCollectionDetails(userName, collectionId, initialData);

  if (!data) return <p>Collection not found</p>;

  return (
    <div className="flex flex-col h-full">
      <FilterBar collectionName={data.name} />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 p-4">
        {data.items?.map((item) => (
          <Link key={item.collectionItemId} href={`/media/${item.mediaId}`}>
            <ContentCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
