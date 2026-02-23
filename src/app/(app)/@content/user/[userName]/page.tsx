import { Card } from "@/components/ui/card";
import Image from "next/image";

export default async function UserContentViewPage() {
  return (
    <div className="flex flex-col items-center h-full justify-center p-8">
      <Card className="bg-muted justify-center items-center flex flex-col gap-4 p-8">
        <Image
          src="/eyebrowraise.jpg"
          alt="Placeholder"
          width={500}
          height={500}
          className="rounded-xl"
        />
        <p className="text-center text-2xl text-muted-foreground">
          This will be a profile page later
        </p>
      </Card>
    </div>
  );
}
