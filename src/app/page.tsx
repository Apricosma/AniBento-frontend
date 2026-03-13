import TopBar from "@/components/shell/navbar/TopBar";
import CollectionHighlightsCard from "@/components/home/CollectionHighlightsCard";
import DiscoverCard from "@/components/home/DiscoverCard";
import ExploreBentosCard from "@/components/home/ExploreBentosCard";
import WelcomeCard from "@/components/home/WelcomeCard";
import { fetchCurrentUserServer } from "@/app/features/auth/api.server";
import { Card } from "@/components/ui/card";
import {
  Grid2X2CheckIcon,
  Grid2X2PlusIcon,
  LockIcon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";

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
      <main className="flex-1 overflow-auto pt-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-12">
            <WelcomeCard user={user} />
            <DiscoverCard />
            <CollectionHighlightsCard items={items} />
            <ExploreBentosCard />
          </div>
        </div>

        <div className="border-t mx-auto max-w-6xl mt-8"></div>

        <div className="flex max-w-6xl mx-auto gap-4">
          <Card className="w-1/3 h-92 max-w-6xl mx-auto mt-8 p-8 text-left flex flex-col">
            <h2 className="text-3xl font-semibold">
              Collect your favourite shows and more
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Upload your own custom media entries to truly create your
              personalized Bento box.
            </p>
            <Grid2X2PlusIcon className="w-16 h-16 mt-auto self-center text-blue-300" />
          </Card>

          <Card className="w-1/3 h-92 max-w-6xl mx-auto mt-8 p-8 text-left flex flex-col">
            <h2 className="text-3xl font-semibold">
              Share your Bento with friends and the community
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Easily share your Bento with others to show off your taste, or
              find common interests
            </p>
            <ShareIcon className="w-16 h-16 mt-auto self-center text-blue-300" />
          </Card>

          <Card className="w-1/3 h-92 max-w-6xl mx-auto mt-8 p-8 text-left flex flex-col">
            <h2 className="text-3xl font-semibold">
              Custom privacy settings for your Bento
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Custom privacy settings allow you to share your Bento with
              friends, the community, or keep it private.
            </p>
            <LockIcon className="w-16 h-16 mt-auto self-center text-blue-300" />
          </Card>
        </div>
        <div className="flex justify-center items-center max-w-6xl mx-auto gap-4 mt-4">
          <Card className="w-3/5 h-96 p-8 text-left flex flex-row">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-semibold">
                Track your watch history and progress
              </h2>
              <p className="text-lg text-muted-foreground">
                Easily check up on friends' progress so you don't accidentally
                spoil the latest episode of their favourite show
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-card h-72 w-48 relative rounded-t-md overflow-hidden">
                <Image
                  src="/154528l.jpg"
                  alt="Anime example"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-2 right-2 bg-card px-2 py-1 rounded-md border border-accent-foreground/50 flex items-center justify-center z-10">
                  32/35
                </div>
              </div>

              <div className="w-48 h-1 bg-red-400">
                <div className="bg-green-400 w-5/6 h-full"></div>
              </div>
            </div>
          </Card>
          <Card className="w-2/5 h-96 max-w-6xl mx-auto p-8 text-center"></Card>
        </div>
        <div className="bg-black w-full h-96 py-8 mt-8 border-t">
          <div className="max-w-6xl mx-auto flex flex-col">
            <div className="flex flex-col space-y-1">
              <p>wawa</p>
              <p>wewe</p>
              <p>wowo</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
