'use client';

export default function MediaContentError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-full min-h-0 overflow-y-auto">
      <div className="bg-card rounded-lg border border-accent p-4 md:p-6">
        <p className="text-sm text-muted-foreground">Unable to load media details.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-3 text-sm font-medium underline"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
