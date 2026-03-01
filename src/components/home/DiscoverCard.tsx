import { Card } from "@/components/ui/card";

export default function DiscoverCard() {
  return (
    <Card className="rounded-tr-md rounded-tl-md rounded-bl-md rounded-br-md p-8 grid place-items-center lg:col-span-8 min-h-88 lg:rounded-tr-4xl hover:border-blue-300/20 transition-colors duration-300">
      <div className="flex flex-col gap-2 w-full max-w-md p-8 text-center">
        <h2 className="text-4xl font-semibold">Discover Your Bento</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore your personalized collection of anime and manga.
        </p>
      </div>
    </Card>
  );
}
