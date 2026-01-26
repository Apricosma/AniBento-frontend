import ContentContainer from "@/components/content/ContentContainer";
import TopBar from "@/components/navbar/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <TopBar />
      <main className="flex-1 p-4 overflow-hidden">
        <ContentContainer />
      </main>
    </div>
  );
}
