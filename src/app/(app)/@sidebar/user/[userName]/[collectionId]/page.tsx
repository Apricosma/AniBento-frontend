import SidebarUserProfile from "@/app/features/user/components/SidebarUserProfile";
import { fetchUserProfile } from "@/app/features/user/api";

export default async function UserCollectionSidebarPage({
  params,
}: {
  params: Promise<{ userName: string; collectionId: string }>;
}) {
  const { userName } = await params;
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const user = await fetchUserProfile(userName);

  if (!user) {
    return <p>User not found</p>;
  }

  return <SidebarUserProfile user={user} />;
}
