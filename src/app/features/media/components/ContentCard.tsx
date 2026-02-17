import { MediaListItem } from "@/lib/api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

export default function ContentCard({item }: {item?: MediaListItem}) {
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
          ></img>
        </AspectRatio>
      </Card>
      <h2 className="text-1xl font-bold mt-1 truncate tracking-tight">
        {item?.title}
      </h2>
      <div className="flex justify-between items-center">
        <p className="truncate text-muted-foreground">{item?.mediaType}</p>
        {/* <p className="text-sm text-muted-foreground font-medium">{item?.genres?.map(genre => genre.name).join(", ")}</p> */}
        <p className="text-sm text-muted-foreground font-medium">{item?.releaseDate.slice(0, 4) ?? "-"}</p>
      </div>
    </div>
  );
}
