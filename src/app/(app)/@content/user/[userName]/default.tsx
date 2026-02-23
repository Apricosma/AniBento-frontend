import { Card } from "@/components/ui/card";

export default async function DefaultUserContent() {
  // returns a temporary card that says like "choose a collection to get started" or something like that
  return (
    <div className="flex items-center h-full justify-center">
      <Card className="w-1/2">
        <p className="text-center text-card-foreground">
          Choose a collection to get started
        </p>
      </Card>
    </div>
  );
}
