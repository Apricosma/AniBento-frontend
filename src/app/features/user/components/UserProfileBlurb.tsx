import { useUserProfile } from "@/app/features/user/hooks/useUserProfile";
import UserBlurbSkeleton from "./UserBlurbSkeleton";

interface UserProfileBlurbProps {
  userName: string;
}

export default function UserProfileBlurb({ userName }: UserProfileBlurbProps) {
  const { user, loading, notFound } = useUserProfile(userName);

  if (loading) {
    return <UserBlurbSkeleton />;
  }

  if (notFound || !user) {
    return <div className="border-b border-accent pb-4">User not found</div>;
  }

  return (
    <div className="border-b border-accent pb-4">
      <div className="flex items-center gap-3">
        {user.profilePictureUrl && (
          <img
            src={user.profilePictureUrl}
            alt={user.userName ?? "User"}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div>
          <h3 className="font-semibold">{user.userName}</h3>
        </div>
      </div>
    </div>
  );
}