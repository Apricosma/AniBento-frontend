"use client";

import ContentCard from "@/app/features/media/components/ContentCard";
import FilterBar from "@/app/features/collections/components/filterbar/FilterBar";
import Link from "next/link";
import type { UserCollectionDetails } from "./api";
import { fetchCollectionDetails } from "./api";
import { useQuery } from "@tanstack/react-query";
import CollectionGridSkeleton from "./CollectionGridSkeleton";

interface CollectionGridViewProps {
  userName: string;
  collectionId: number;
  initialCollectionDetails?: UserCollectionDetails | null;
}

export default function CollectionGridView({
  userName,
  collectionId,
  initialCollectionDetails,
}: CollectionGridViewProps) {
  const { data, isPending, error } = useQuery({
    queryKey: ["collection-details", userName, collectionId],
    queryFn: () => fetchCollectionDetails(userName, collectionId),
    initialData: initialCollectionDetails ?? undefined,
  });

  if (isPending) return <CollectionGridSkeleton />;
  if (!data) return <p>Collection not found</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="bg-card flex-1 h-full pt-2 rounded-lg border border-accent shadow-md overflow-y-auto">
      <div className="flex flex-col">
        <FilterBar collectionName={data.name} />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 p-4">
          {data.items?.map((item) => (
            <Link key={item.collectionItemId} href={`/media/${item.mediaId}`}>
              <ContentCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
