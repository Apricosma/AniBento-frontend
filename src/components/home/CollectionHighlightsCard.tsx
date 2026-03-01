"use client";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type HighlightItem = {
  id: number | string;
  title: string;
  mediaImageUrl: string;
};

type CollectionHighlightsCardProps = {
  items?: HighlightItem[];
};

export default function CollectionHighlightsCard({
  items = [],
}: CollectionHighlightsCardProps) {
  const plugin = useRef(Autoplay({ delay: 10_000, stopOnInteraction: false }));
  return (
    <Card className="min-w-0 p-6 lg:col-span-9 min-h-72 rounded-tl-md rounded-tr-md rounded-br-md lg:rounded-bl-4xl hover:border-blue-300/20 transition-colors duration-300">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-3xl font-semibold leading-tight">
          Explore Popular Shows
        </h2>
      </div>

      <div className="mt-4 min-w-0 px-12">
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No highlights available.
          </p>
        ) : (
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
            className="relative w-full min-w-0"
          >
            <CarouselContent className="items-stretch -ml-4 px-8 sm:px-12 min-w-0">
              {items.map((item, i) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-full sm:basis-1/3 lg:basis-1/3 min-w-0"
                >
                  <div className="flex justify-center min-w-0">
                    <div className="relative w-40 sm:w-44 lg:w-48 aspect-2/3 overflow-hidden rounded-xl">
                      <Image
                        src={item.mediaImageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </Card>
  );
}
