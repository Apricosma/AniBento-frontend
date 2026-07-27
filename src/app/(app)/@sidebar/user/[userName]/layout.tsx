import type { ReactNode } from "react";
import SidebarUserProfile from "@/app/features/user/components/SidebarUserProfile";
import { fetchUserProfile } from "@/app/features/user/api";
import { fetchUserCollections } from "@/app/features/collections/api.server";
import { fetchCurrentUserServer } from "@/app/features/auth/api.server";

export default async function SidebarUserLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ userName: string }>;
}) {
  const { userName } = await params;
  const [user, initialCollections, currentUser] = await Promise.all([
    fetchUserProfile(userName),
    fetchUserCollections(userName),
    fetchCurrentUserServer(),
  ]);

  if (!user) return <p>User not found</p>;
  if (!initialCollections) return <p>Failed to load collections</p>;

  const isOwner =
    !!currentUser?.userName &&
    currentUser.userName.toLowerCase() === userName.toLowerCase();

  return (
    <>
      <SidebarUserProfile
        user={user}
        initialCollections={initialCollections}
        isOwner={isOwner}
      />
      {children}
    </>
  );
}