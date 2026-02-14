import Sidebar from "../shell/Sidebar";

export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 h-full min-w-0">
      <Sidebar />
      <div className="min-w-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}