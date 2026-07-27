"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FilePlusCornerIcon,
  Loader2Icon,
  SearchIcon,
} from "lucide-react";
import { fetchMediaWithSearchParameters } from "@/app/features/media/api.client";

type View = "menu" | "search";

interface Props {
  icon: React.ReactNode;
}

export default function ItemSearchDialog({ icon }: Props) {
  const [view, setView] = useState<View>("menu");
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  const { data, isFetching } = useQuery({
    queryKey: ["media-search", debouncedSearch],
    queryFn: () =>
      fetchMediaWithSearchParameters({
        search: debouncedSearch,
        page: 1,
        pageSize: 20,
      }),
    enabled: view === "search" && debouncedSearch.length >= 2,
  });

  const isDebouncing = search !== debouncedSearch;
  const isSearching = isDebouncing || isFetching;

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);

        if (!isOpen) {
          setView("menu");
          setSearch("");
          setDebouncedSearch("");
        }
      }}
    >
      <DialogTrigger asChild>{icon}</DialogTrigger>

      <DialogContent>
        {view === "menu" ? (
          <>
            <DialogHeader className="space-y-6">
              <DialogTitle>Add New Item</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex h-48 flex-col items-center justify-center gap-4 rounded-xl"
                onClick={() => setView("search")}
              >
                <SearchIcon className="size-12 text-brand" />
                <div className="text-center">
                  <p className="font-medium text-brand">Find Existing</p>
                  <p className="text-sm text-muted-foreground">
                    Search for an existing item.
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="flex h-48 flex-col items-center justify-center gap-4 rounded-xl"
              >
                <FilePlusCornerIcon className="size-12 text-brand" />
                <div className="text-center">
                  <p className="font-medium text-brand">Add New</p>
                  <p className="text-sm text-muted-foreground">
                    Create a brand new item.
                  </p>
                </div>
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Find Existing Item</DialogTitle>
            </DialogHeader>

            <Command shouldFilter={false}>
              <CommandInput
                placeholder="Search anime..."
                value={search}
                onValueChange={setSearch}
              />

              <CommandList>
                {isSearching && (
                  <CommandGroup>
                    <CommandItem disabled>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </CommandItem>
                  </CommandGroup>
                )}

                {!isSearching && <CommandEmpty>No results found.</CommandEmpty>}

                {!isSearching && (
                  <CommandGroup heading="Results">
                    {data?.items.map((media) => (
                      <CommandItem
                        key={media.id}
                        value={media.title}
                        onSelect={() => {
                          console.log(media);
                        }}
                      >
                        {media.title}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>

            <Button
              variant="ghost"
              className="w-fit"
              onClick={() => setView("menu")}
            >
              ← Back
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}