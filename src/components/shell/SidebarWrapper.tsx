import { fetchUserProfile } from "@/app/features/user/api";
import SidebarUserProfile from "@/app/features/user/components/SidebarUserProfile";

export default async function SidebarWrapper({ userName }: { userName: string }) {
  const user = await fetchUserProfile(userName);
  return (
    <SidebarUserProfile user={user} />
  )
}