"use client";

import SidebarUserBlurb from "@/app/features/user/components/SidebarUserBlurb";
// import SidebarCollectionsNav from "@/features/collections/components/SidebarCollectionsNav";

export default function Sidebar() {
  return (
    <div className="bg-card w-1/6 md:w-64 h-full rounded-lg border border-accent p-4 shrink-0 overflow-hidden">
      <div className="h-full flex flex-col min-h-0">
        <SidebarUserBlurb />
        <div className="flex-1 overflow-y-auto">
          {/* <SidebarCollectionsNav /> */}
        </div>
      </div>
    </div>
  );
}
