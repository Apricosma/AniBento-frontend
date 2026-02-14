import TopBar from "@/components/shell/navbar/TopBar";
import ContentContainer from "@/components/content/ContentContainer";

export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <TopBar />
      <main className="flex-1 p-4 overflow-hidden">
        <ContentContainer>{children}</ContentContainer>
      </main>
    </>
  );
}
