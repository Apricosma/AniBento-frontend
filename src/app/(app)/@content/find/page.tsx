import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function FindPage() {
  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl">Not yet implemented</h1>
      <Button variant="default" className="w-72 h-16" asChild>
        <Link href="/">
          <p className="text-xl">Go back home</p>
        </Link>
      </Button>
    </div>
  );
}
