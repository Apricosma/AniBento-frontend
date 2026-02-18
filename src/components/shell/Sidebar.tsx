"use client";

export default function Sidebar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-card w-1/6 md:w-64 h-full rounded-lg border border-accent p-4 shrink-0 overflow-hidden">
      <div className="h-full flex flex-col min-h-0">
        <div className="min-h-0">{children}</div>

        <div className="flex-1 overflow-y-auto">
          {/* <SidebarCollectionsNav /> */}
        </div>
      </div>
    </div>
  );
}
