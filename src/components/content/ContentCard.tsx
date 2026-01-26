import { AspectRatio } from "../ui/aspect-ratio";
import { Card } from "../ui/card";

export default function ContentCard() {
  return (
    <div className="w-full">
      <Card className="bg-muted border-accent rounded-sm p-0 overflow-hidden">
        <AspectRatio ratio={3 / 4}>
          <img src="/154528l.jpg" className="w-full h-full object-cover hover:opacity-60 transition-opacity"></img>
        </AspectRatio>
      </Card>
      <h2 className="text-1xl font-bold mt-2 truncate">
        Long name of a long series thats very long and longer
      </h2>
      <div className="flex justify-between items-center">
        <p className="truncate text-muted-foreground">TV - 30m</p>
        <p className="text-sm text-muted-foreground font-medium">⭐ 8.5</p>
      </div>
    </div>
  );
}
