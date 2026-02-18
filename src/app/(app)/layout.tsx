import TopBar from "@/components/shell/navbar/TopBar";
import Sidebar from "@/components/shell/Sidebar";

export default async function AppLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <main className="flex-1 p-4 overflow-hidden min-h-0">
        <div className="flex gap-4 h-full min-w-0 min-h-0">
          <Sidebar>{sidebar}</Sidebar>
          <div className="min-w-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </main>
    </>
  );
}
