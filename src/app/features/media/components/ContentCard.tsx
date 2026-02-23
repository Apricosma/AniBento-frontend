import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

type CollectionCardItem = {
  collectionItemId: number;
  userMediaId: number;
  mediaId: number;
  title: string;
  mediaImageUrl?: string | null;
  status?: string | null;
  rating?: number | null;
  note?: string | null;
};

export default function ContentCard({ item }: { item?: CollectionCardItem }) {
  const imgSrc = item?.mediaImageUrl ?? "/placeholder.jpg";

  return (
    <div className="w-full">
      <Card className="bg-muted border-accent rounded-sm p-0 overflow-hidden">
        <AspectRatio ratio={3 / 4}>
          <img
            src={imgSrc}
            alt={item?.title ?? "Placeholder image"}
            className="w-full h-full object-cover hover:opacity-60 transition-opacity"
            loading="lazy"
          />
        </AspectRatio>
      </Card>

      <h2 className="text-1xl font-bold mt-1 truncate tracking-tight">
        {item?.title ?? "-"}
      </h2>

      <div className="flex justify-between items-center">
        <p className="truncate text-muted-foreground">{item?.status ?? "-"}</p>
        <p className="text-sm text-muted-foreground font-medium">
          {typeof item?.rating === "number" ? `★ ${item.rating}` : "-"}
        </p>
      </div>
    </div>
  );
}