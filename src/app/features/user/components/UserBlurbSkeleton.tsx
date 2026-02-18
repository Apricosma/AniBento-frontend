import { Skeleton } from "@/components/ui/skeleton";

export default function UserBlurbSkeleton() {
  return (
    <div className="p-6 border-b border-border">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="w-48 h-48 rounded-2xl flex-shrink-0" />
        <div className="text-center space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </div>
  );
}