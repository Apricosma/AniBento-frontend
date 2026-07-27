"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PencilLineIcon, Trash2Icon, PlusIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useDeleteCollection } from "../../hooks/useCollectionMutations";
import ItemSearchDialog from "../itemsearchdialog/ItemSearchDialog";

type FilterButtonGroupProps = {
  collectionName: string;
  collectionDescription?: string | null;
};

export default function FilterButtonGroup({
  collectionName,
  collectionDescription,
}: FilterButtonGroupProps) {
  const params = useParams();
  const router = useRouter();

  const collectionId = Number(params.collectionId);
  const userName = String(params.userName ?? "");

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const { mutate: deleteCollection, isPending: isDeleting } =
    useDeleteCollection(userName);

  function handleDelete() {
    deleteCollection(collectionId, {
      onSuccess: () => {
        setDeleteOpen(false);
        router.push(`/user/${userName}`);
      },
    });
  }

  return (
    <div className="flex items-center gap-1">
      <ItemSearchDialog
        icon={
          <PlusIcon
            size="36"
            strokeWidth={1.75}
            className="hover:text-brand hover:cursor-pointer"
          />
        }
      />
      <Popover open={editOpen} onOpenChange={setEditOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="Edit collection"
          >
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

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="destructive"
                disabled={isDeleting}
                onClick={handleDelete}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
