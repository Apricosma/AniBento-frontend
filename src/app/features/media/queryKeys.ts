export const mediaKeys = {
  all: () => ["media"] as const,
  list: (params: Record<string, unknown>) =>
    ["media", "list", params] as const,
  details: (mediaId: number) => ["media", "details", mediaId] as const,
};
