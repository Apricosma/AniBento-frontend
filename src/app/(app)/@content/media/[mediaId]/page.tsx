import fetchMediaDetails from "@/app/features/media/api.server";
import { notFound } from "next/navigation";

export default async function MediaContentViewPage({
  params,
}: {
  params: Promise<{ mediaId: string }>;
}) {
  const { mediaId } = await params;
  const parsedMediaId = Number(mediaId);

  if (Number.isNaN(parsedMediaId)) {
    notFound();
  }

  const media = await fetchMediaDetails(parsedMediaId);

  if (!media) {
    notFound();
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold tracking-tight">{media.title}</h1>
      <p className="text-sm text-muted-foreground mt-1">
        {media.mediaType} • {media.releaseDate}
      </p>
      <p className="mt-4 leading-relaxed">{media.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {media.genres.map((genre) => (
          <span
            key={genre.id}
            className="text-xs bg-muted px-2 py-1 rounded-md"
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}
