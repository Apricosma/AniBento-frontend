export default function ContentSlotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full min-h-0 overflow-hidden">
      <div className="bg-card h-full min-h-0 rounded-lg border border-accent shadow-md overflow-y-auto">
        {children}
      </div>
    </div>
  );
}