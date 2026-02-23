import type { ReactNode } from "react";
import SidebarUserProfile from "@/app/features/user/components/SidebarUserProfile";
import { fetchUserProfile } from "@/app/features/user/api";
import { fetchMyCollections } from "@/app/features/collections/api";

export default async function SidebarUserLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ userName: string }>;
}) {
  const { userName } = await params;
  const user = await fetchUserProfile(userName);
  const collections = await fetchMyCollections(userName);

  if (!user) return <p>User not found</p>;

  return (
    <>
      <SidebarUserProfile user={user} collections={collections} />
      {children}
    </>
  );
}