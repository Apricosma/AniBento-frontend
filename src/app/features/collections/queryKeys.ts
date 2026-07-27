export const collectionKeys = {
  all: () => ["collections"] as const,
  userCollections: (userName: string) =>
    ["collections", "user", userName] as const,
  myCollections: () => ["collections", "my"] as const,
  details: (userName: string, collectionId: number) =>
    ["collections", "details", userName, collectionId] as const,
};
