// app/(app)/@sidebar/user/[userName]/default.tsx
import Link from "next/link";
import { fetchUserCollections } from "@/app/features/collections/api";

type CollectionSummary = {
  id: number;
  name: string;
  description?: string | null;
};

export default async function SidebarCollectionSlot({
  params,
}: {
  params: { userName: string };
}) {
  const { userName } = params;

  const collections = await fetchUserCollections(userName) as CollectionSummary[];

  if (!collections?.length) {
    return <p className="text-sm text-muted-foreground">No collections found</p>;
  }

  return (
    <div className="space-y-2">
      {collections.map((c) => (
        <Link
          key={c.id}
          href={`/user/${userName}/${c.id}`}
          className="block rounded-md border border-accent p-2 hover:bg-accent/20"
        >
          <div className="font-medium leading-tight">{c.name}</div>
          {c.description ? (
            <div className="text-sm text-muted-foreground line-clamp-2">
              {c.description}
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  );
}