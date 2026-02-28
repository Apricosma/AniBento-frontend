import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* TOP LEFT — narrower */}
          <Card className="rounded-4xl rounded-tr-4xl rounded-br-md rounded-bl-md p-10 flex items-center lg:col-span-4 min-h-[22rem] lg:rounded-tr-md justify-between hover:border-blue-300/20 transition-colors duration-300">
            <div className="w-full text-center md:text-left">
              <h1 className="text-4xl font-bold leading-tight">
                Welcome to AniBento!
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Please{" "}
                <Link href="/signin" className="text-blue-300 hover:underline">
                  Sign In
                </Link>{" "}
                or
                <Link href="/signup" className="text-blue-300 hover:underline">
                  {" "}
                  Register
                </Link>{" "}
                to view your profile and collections.
              </p>
            </div>

            <Button variant="default" className="w-full mt-6 md:mt-0">
              Sign In
            </Button>

            <Button variant="outline" className="w-full">
              Register
            </Button>
          </Card>

          {/* TOP RIGHT — wider */}
          <Card className="rounded-tr-md rounded-tl-md rounded-bl-md rounded-br-md p-8 grid place-items-center lg:col-span-8 min-h-[22rem] lg:rounded-tr-4xl hover:border-blue-300/20 transition-colors duration-300">
            <Card className="w-full max-w-md p-8 text-center">
              <h2 className="text-2xl font-semibold">Discover Your Bento</h2>
              <p className="mt-2 text-muted-foreground">
                Explore your personalized collection of anime and manga.
              </p>
            </Card>
          </Card>

          {/* BOTTOM LEFT — wider */}
          <Card className="rounded-tr-md rounded-br-md rounded-tl-md p-6 lg:col-span-9 min-h-[18rem] lg:rounded-bl-4xl hover:border-blue-300/20 transition-colors duration-300">
            <div className="grid h-full gap-4 sm:grid-cols-3">
              <Card className="h-full min-h-[10rem] p-8 flex items-center justify-center text-center">
                <h3 className="text-2xl font-semibold">Your Collection</h3>
              </Card>
              <Card className="h-full min-h-[10rem] p-8 flex items-center justify-center text-center">
                <h3 className="text-2xl font-semibold">Your Collection</h3>
              </Card>
              <Card className="h-full min-h-[10rem] p-8 flex items-center justify-center text-center">
                <h3 className="text-2xl font-semibold">Your Collection</h3>
              </Card>
            </div>
          </Card>

          {/* BOTTOM RIGHT — narrower */}
          <Card className="rounded-4xl rounded-tl-md rounded-tr-md rounded-bl-md p-6 grid place-items-center lg:col-span-3 min-h-[18rem] hover:border-blue-300/20 transition-colors duration-300">
            <Card className="w-full max-w-xs p-8 text-center">
              <h3 className="text-2xl font-semibold">
                Check out other Bentos --&gt;
              </h3>
            </Card>
          </Card>
        </div>
      </div>

      <div className="border-t mx-auto max-w-6xl h-128 mt-8"></div>
    </main>
  );
}
