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
  ThumbsDownIcon,
  ThumbsUp,
  ThumbsUpIcon,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

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
      <main className="flex-1 overflow-auto pt-22">
        <div className="  px-6 xl:px-0">
          <div className="mx-auto w-full max-w-6xl relative overflow-hidden">
            <div className="bg-aurora "></div>
            <div className="grid gap-6 lg:grid-cols-12">
              <WelcomeCard user={user} />
              <DiscoverCard />
              <CollectionHighlightsCard items={items} />
              <ExploreBentosCard />
            </div>
          </div>

          <div className="border-t mx-auto max-w-6xl mt-8"></div>

          <div className="flex max-w-6xl mx-auto flex-col lg:flex-row gap-6 gap-y-0 ">
            <Card className="w-full lg:w-1/3 min-h-92 mt-8 p-8 text-left flex flex-col rounded-md rounded-tl-4xl rounded-tr-4xl lg:rounded-tr-md">
              <h2 className="text-3xl font-semibold">
                Collect your favourite shows and more
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Upload your own custom media entries to truly create your
                personalized Bento box.
              </p>
              <Grid2X2PlusIcon className="w-16 h-16 mt-auto self-center text-blue-300" />
            </Card>

            <Card className="w-full lg:w-1/3 min-h-92 mt-8 p-8 text-left flex flex-col rounded-md">
              <h2 className="text-3xl font-semibold">
                Share your Bento with friends and the community
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Easily share your Bento with others to show off your taste, or
                find common interests
              </p>
              <ShareIcon className="w-16 h-16 mt-auto self-center text-blue-300" />
            </Card>

            <Card className="w-full lg:w-1/3 min-h-92 mt-8 p-8 text-left flex flex-col rounded-md lg:rounded-tr-4xl">
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

          <div className="flex flex-col lg:flex-row justify-center items-stretch max-w-6xl mx-auto gap-6 mt-6">
            <Card className="w-full lg:w-3/5 min-h-96 p-8 text-left flex flex-col md:flex-row gap-8 rounded-md lg:rounded-bl-4xl">
              <div className="flex flex-col gap-8 flex-1">
                <h2 className="text-3xl font-semibold">
                  Track your watch history and progress
                </h2>
                <p className="text-lg text-muted-foreground">
                  Easily check up on friends' progress so you don't accidentally
                  spoil the latest episode of their favourite show
                </p>
              </div>

              <div className="flex flex-col items-center justify-center shrink-0">
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

            <Card className="w-full lg:w-2/5 min-h-96 p-8 text-center rounded-md rounded-bl-4xl rounded-br-4xl lg:rounded-bl-md">
              <div className="flex flex-col gap-8 flex-1">
                <h2 className="text-3xl font-semibold">Rank your favourites</h2>
                <p className="text-lg text-muted-foreground">
                  Easily rank your favourites, and see what your friends think
                  is hot or not.
                </p>
                <div className="flex items-center justify-center gap-8">
                  <div className="border-2  rounded-full p-6 hover:border-blue-300/50 transition-colors duration-300 ease-in-out group cursor-pointer ">
                    <ThumbsUpIcon
                      size={48}
                      strokeWidth={1.5}
                      className="-translate-y-1 group-hover:text-blue-300 transition-all duration-300 ease-in-out group-hover:-rotate-6 "
                    />
                  </div>
                  <div className="border-2 rounded-full p-6 ml-4 hover:border-blue-300/50 transition-colors duration-300 ease-in-out group cursor-pointer">
                    <ThumbsDownIcon
                      size={48}
                      strokeWidth={1.5}
                      className="translate-y-1 group-hover:text-blue-300 transition-all duration-300 ease-in-out group-hover:-rotate-6 "
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="bg-black w-full mt-16 border-t">
          <div className="max-w-6xl mx-auto py-12 px-6 xl:px-0">
            <div className="flex flex-col gap-10">
              {/* Top section */}
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col space-y-1">
                  <h2 className="text-2xl font-semibold font-sour-gummy tracking-wider">
                    AniBento
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Placeholder
                  </p>
                </div>

                <div className="flex flex-col space-y-2 text-muted-foreground">
                  <h2 className="text-foreground font-semibold text-lg">
                    Title
                  </h2>
                  <div className="space-y-1">
                    <p>Text 1</p>
                    <p>Text 2</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-muted-foreground">
                  <h2 className="text-foreground font-semibold text-lg">
                    Title
                  </h2>
                  <div className="space-y-1">
                    <p>Text 1</p>
                    <p>Text 2</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-muted-foreground">
                  <h2 className="text-foreground font-semibold text-lg">
                    Title
                  </h2>
                  <div className="space-y-1">
                    <p>Text 1</p>
                    <p>Text 2</p>
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex flex-col gap-4">
                <Separator />
                <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                  <p className="leading-relaxed">
                    Built with Next.js, C#, and a lot of love by{" "}
                    <a
                      href="https://github.com/Apricosma"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      Apricosma
                    </a>
                  </p>

                  <p>
                    &copy; {new Date().getFullYear()} Apricosma. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
