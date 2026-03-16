import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createCollection } from "./api.server";

export default function CreateCollectionForm() {
  return (
    <form action={createCollection}>
      <Field>
        <FieldLabel
          htmlFor="collection-name"
          className="font-semibold tracking-wide"
        >
          Collection Name
        </FieldLabel>
        <Input
          id="collection-name"
          name="name"
          placeholder="Enter collection name"
          autoFocus
        />

        <FieldLabel
          htmlFor="collection-description"
          className="font-semibold tracking-wide"
        >
          Description
        </FieldLabel>
        <Input
          id="collection-description"
          name="description"
          placeholder="Enter description"
        />

        <input type="hidden" name="isPrivate" value="false" />

        <Button type="submit" className="mt-4 w-full bg-primary">
          Create Collection
        </Button>
      </Field>
    </form>
  );
}