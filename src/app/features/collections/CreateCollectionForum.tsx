"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createCollection } from "./api";
import { Checkbox } from "@/components/ui/checkbox";
import { UserCollection } from "../user/hooks/useCollectionsState";

type CreateCollectionFormProps = {
  onCreate?: (collection: UserCollection) => void;
};

export default function CreateCollectionForm({
  onCreate,
}: CreateCollectionFormProps) {
  async function handleSubmit(formData: FormData) {
    const name = formData.get("collectionName")?.toString().trim() ?? "";
    const description =
      formData.get("description")?.toString().trim() || undefined;

    const isPrivate = formData.get("isPrivate") != null;

    if (!name) return;

    const created = await createCollection(name, isPrivate, description);
    console.log("created:", created);
    onCreate?.(created);
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

        <Button type="submit" className="mt-4 w-full bg-primary">
          Create Collection
        </Button>
      </Field>
    </form>
  );
}
