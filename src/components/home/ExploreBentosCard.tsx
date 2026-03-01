import { Card } from "@/components/ui/card";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

export default function ExploreBentosCard() {
  return (
    <div className="lg:col-span-3">
      <Link href="/find" className="w-full">
        <Card className="rounded-4xl rounded-tl-md rounded-tr-md rounded-bl-2xl justify-center p-8 px-12 h-full hover:border-blue-300/20 transition-colors duration-300 flex flex-col items-center gap-6 group hover:cursor-pointer lg:rounded-bl-md">
          <div className="w-full max-w-xs flex gap-4 items-center">
            <SearchIcon className="w-16 h-16 text-accent-foreground" />
            <h3 className="text-xl font-semibold">Check out other Bentos</h3>
          </div>
          <div className="grid grid-cols-12 h-32 w-42 rounded-lg transition-colors duration-300 group">
            <div className="border col-span-5 rounded-tl-lg group-hover:border-primary/50 transition-colors duration-300"></div>
            <div className="border col-span-7 rounded-tr-lg group-hover:border-primary/50 transition-colors duration-300"></div>
            <div className="border col-span-8 rounded-bl-lg group-hover:border-primary/50 transition-colors duration-300"></div>
            <div className="border col-span-4 rounded-br-lg group-hover:border-primary/50 transition-colors duration-300"></div>
          </div>
        </Card>
      </Link>
    </div>
  );
}
