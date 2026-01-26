import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function ContentContainer() {
  return (
    <div className="flex gap-4 h-full">
      <Sidebar />
      <MainContent />
    </div>
  );
}
