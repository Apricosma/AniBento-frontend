"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateCollection } from "./hooks/useCollectionMutations";

type CreateCollectionFormProps = {
  userName?: string;
  onSuccess?: () => void;
};

export default function CreateCollectionForm({
  userName,
  onSuccess,
}: CreateCollectionFormProps) {
  const { mutate: createCollection, isPending } = useCreateCollection(userName);

  function handleSubmit(formData: FormData) {
    const name = formData.get("collectionName")?.toString().trim() ?? "";
    const description =
      formData.get("description")?.toString().trim() || undefined;
    const isPrivate = formData.get("isPrivate") != null;

    if (!name) return;

    createCollection(
      { name, isPrivate, description },
      { onSuccess },
    );
  }

  return (
    <form action={handleSubmit}>
      <Field>
        <FieldLabel
          htmlFor="collection-name"
          className="font-semibold tracking-wide"
        >
          Collection Name <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          id="collection-name"
          name="collectionName"
          placeholder="Enter collection name"
          required
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

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="isPrivate" name="isPrivate" />
            <FieldLabel
              htmlFor="isPrivate"
              className="font-semibold tracking-wide"
            >
              Private Collection
            </FieldLabel>
          </Field>
        </FieldGroup>

        <Button
          type="submit"
          disabled={isPending}
          className="mt-4 w-full bg-primary"
        >
          {isPending ? "Creating..." : "Create Collection"}
        </Button>
      </Field>
    </form>
  );
}
