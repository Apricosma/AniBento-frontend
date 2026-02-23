export default function MediaContentNotFound() {
  return (
    <div className="h-full min-h-0 overflow-y-auto">
      <div className="bg-card rounded-lg border border-accent p-4 md:p-6">
        <p className="text-sm text-muted-foreground">Media not found.</p>
      </div>
    </div>
  );
}
