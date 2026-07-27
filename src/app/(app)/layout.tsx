import TopBar from "@/components/shell/navbar/TopBar";
import Sidebar from "@/components/shell/Sidebar";
import { fetchCurrentUserServer } from "@/app/features/auth/api.server";

export default async function AppLayout({
  children,
  sidebar,
  content,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) {
  const initialUser = await fetchCurrentUserServer();

  return (
    <>
      <TopBar initialUser={initialUser} />
      <main className="flex-1 p-4 pt-20 overflow-hidden min-h-0 ">
        <div className="bg-aurora"></div>
        <div className="flex gap-4 h-full min-w-0 min-h-0">
          <Sidebar>{sidebar}</Sidebar>
          {/* <div className="min-w-0 flex-1 overflow-hidden">{children}</div> */}
          <div className="min-w-0 flex-1 overflow-hidden">{content}</div>
        </div>
      </main>
    </>
  );
}
