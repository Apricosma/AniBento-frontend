import { apiFetch } from "@/lib/fetch";

export interface MediaSearchParameters {
  mediaType?: string;
  search?: string;
  genreIds?: number[];
  page?: number;
  pageSize?: number;
}
export async function fetchMediaWithSearchParameters(
  searchParameters: MediaSearchParameters
) {
  const params = new URLSearchParams();

  if (searchParameters.mediaType) {
    params.set("MediaType", searchParameters.mediaType);
  }

  if (searchParameters.search) {
    params.set("Search", searchParameters.search);
  }

  if (searchParameters.page) {
    params.set("Page", searchParameters.page.toString());
  }

  if (searchParameters.pageSize) {
    params.set("PageSize", searchParameters.pageSize.toString());
  }

  if (searchParameters.genreIds?.length) {
    searchParameters.genreIds.forEach((id) =>
      params.append("GenreIds", id.toString())
    );
  }

  return apiFetch(`/media?${params.toString()}`);
}