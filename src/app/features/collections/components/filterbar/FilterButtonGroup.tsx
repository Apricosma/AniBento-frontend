"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PencilLineIcon, Trash2Icon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  deleteCollectionAction,
  // updateCollectionAction,
} from "../../actions";

type FilterButtonGroupProps = {
  collectionName: string;
  collectionDescription?: string | null;
};

export default function FilterButtonGroup({
  collectionName,
  collectionDescription,
}: FilterButtonGroupProps) {
  const params = useParams();

  const collectionId = Number(params.collectionId);
  const userName = String(params.userName ?? "");

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="flex items-center gap-1">
      <Popover open={editOpen} onOpenChange={setEditOpen}>
        <PopoverTrigger asChild>
          <Button type="button" size="icon" variant="ghost" aria-label="Edit collection">
            <PencilLineIcon className="size-6" />
          </Button>
        </PopoverTrigger>

        <PopoverContent align="end" className="w-96">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Edit collection</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Update the name and description for this collection.
              </p>
            </div>

            <form className="space-y-4">
              <input type="hidden" name="userName" value={userName} />
              <input type="hidden" name="collectionId" value={collectionId} />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  defaultValue={collectionName}
                  maxLength={100}
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={collectionDescription ?? ""}
                  maxLength={500}
                  rows={4}
                  className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </div>
        </PopoverContent>
      </Popover>

      <Popover open={deleteOpen} onOpenChange={setDeleteOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Delete collection"
            className="text-destructive/50 transition-colors hover:cursor-pointer hover:text-destructive"
          >
            <Trash2Icon className="size-6" />
          </Button>
        </PopoverTrigger>

        <PopoverContent align="end" className="w-80">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Delete collection?</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                This action cannot be undone.
              </p>
            </div>

            <form
              action={deleteCollectionAction}
              className="flex justify-end gap-2"
            >
              <input type="hidden" name="userName" value={userName} />
              <input type="hidden" name="collectionId" value={collectionId} />

              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" variant="destructive">
                Delete
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}