import TopBar from "@/components/shell/navbar/TopBar";
import CollectionHighlightsCard from "@/components/home/CollectionHighlightsCard";
import DiscoverCard from "@/components/home/DiscoverCard";
import ExploreBentosCard from "@/components/home/ExploreBentosCard";
import WelcomeCard from "@/components/home/WelcomeCard";
import { fetchCurrentUserServer } from "@/app/features/auth/api.server";

const items = [
  {
    id: 1,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 2,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 3,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 4,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 5,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 6,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 7,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 8,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },
  {
    id: 9,
    title: "Frieren",
    mediaImageUrl: "/154528l.jpg",
  },

];

export default async function Home() {
  const user = await fetchCurrentUserServer();

  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-auto px-4 py-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-12">
            <WelcomeCard user={user} />
            <DiscoverCard />
            <CollectionHighlightsCard items={items} />
            <ExploreBentosCard />
          </div>
        </div>

        <div className="border-t mx-auto max-w-6xl h-128 mt-8"></div>
      </main>
    </>
  );
}
