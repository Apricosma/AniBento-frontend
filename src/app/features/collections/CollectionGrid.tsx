"use client";

import { useEffect, useState } from "react";
import ContentCard from "@/app/features/media/components/ContentCard";
import FilterBar from "@/app/features/collections/components/filterbar/FilterBar";
import { fetchMediaList } from "@/lib/api";
import type { MediaListItem } from "@/lib/api";

export default function MainContent() {
  const [items, setItems] = useState<MediaListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchMediaList({ page: 1, pageSize: 24 });
        if (!cancelled) setItems(data.items);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-card flex-1 h-full pt-2 rounded-lg border border-accent shadow-md overflow-y-auto">
      <div className="flex flex-col">
        <FilterBar />

        {loading && <div className="p-4 text-sm text-muted-foreground">Loading…</div>}
        {error && <div className="p-4 text-sm text-destructive">{error}</div>}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 p-4">
            {items.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
