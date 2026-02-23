import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CollectionGridSkeleton() {
  return (
    <div className="bg-card flex-1 h-full pt-2 rounded-lg border border-accent shadow-md overflow-hidden">
      <div className="h-full flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto px-4 pt-2 pb-4">
          <div className="flex flex-col">
            <div className="pb-4">
              <div className="bg-muted/40 rounded-md border border-accent px-3 py-2">
                <div className="flex items-center justify-between gap-3">
                  <Skeleton className="h-6 w-32" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-9 w-44" />
                    <Skeleton className="h-9 w-9" />
                    <Skeleton className="h-9 w-9" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="w-full">
                  <Card className="bg-muted border-accent rounded-sm p-0 overflow-hidden">
                    <AspectRatio ratio={3 / 4}>
                      <Skeleton className="h-full w-full" />
                    </AspectRatio>
                  </Card>

                  <Skeleton className="h-6 w-5/6 mt-2" />

                  <div className="flex justify-between items-center mt-2 gap-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
