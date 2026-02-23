import { Skeleton } from "@/components/ui/skeleton";

export default function MediaContentLoading() {
  return (
    <div className="h-full min-h-0 overflow-y-auto">
      <div className="bg-card rounded-lg border border-accent p-4 md:p-6 space-y-3">
        <Skeleton className="h-8 w-3/5" />
        <Skeleton className="h-4 w-2/5" />
        <div className="space-y-2 pt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    </div>
  );
}
