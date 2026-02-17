"use client";

import { useState } from "react";
import ContentCard from "@/app/features/media/components/ContentCard";
import FilterBar from "@/app/features/collections/components/filterbar/FilterBar";
import type { MediaListItem } from "@/lib/api";

interface CollectionGridViewProps {
  initialItems: MediaListItem[];
}

export default function CollectionGridView({ initialItems }: CollectionGridViewProps) {
  const [items] = useState<MediaListItem[]>(initialItems);

  return (
    <div className="bg-card flex-1 h-full pt-2 rounded-lg border border-accent shadow-md overflow-y-auto">
      <div className="flex flex-col">
        <FilterBar />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 p-4">
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}