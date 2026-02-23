import CollectionGrid from "@/app/features/collections/CollectionGrid";

export default async function CollectionsByTypePage({
  params,
}: {
  params: Promise<{ userName: string; collectionId: string }>;
}) {
  const { userName, collectionId } = await params;

  return (
    <CollectionGrid
      userName={userName}
      collectionId={Number(collectionId)}
    />
  );
}
