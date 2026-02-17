"use client";

import { useParams } from "next/navigation";
import { useAuth } from "@/app/features/auth/AuthProvider";
import { useUserProfile } from "../hooks/useUserProfile";

export default function SidebarUserBlurb() {
  const params = useParams<{ userName?: string }>();
  const isViewingProfile = !!params?.userName;

  const { user: authUser, isLoading: authLoading } = useAuth();

  const {
    user: profileUser,
    loading: profileLoading,
    notFound,
  } = useUserProfile();

  const displayUser = isViewingProfile ? profileUser : authUser;
  const loading = isViewingProfile ? profileLoading : authLoading;

  if (loading) {
    return <div className="border-b border-accent pb-4">Loading...</div>;
  }

  if (notFound) {
    return (
      <div className="border-b border-accent pb-4 text-red-500">
        User not found
      </div>
    );
  }

  if (!displayUser) {
    return <div className="border-b border-accent pb-4">User not found</div>;
  }

  return (
    <div className="border-b border-accent pb-4">
      <div className="flex items-center gap-3">
        {displayUser.profilePictureUrl && (
          <img
            src={displayUser.profilePictureUrl}
            alt={displayUser.userName ?? "User"}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div>
          <h3 className="font-semibold">{displayUser.userName}</h3>
          {/* {displayUser.bio && (
            <p className="text-sm text-muted-foreground">{displayUser.bio}</p>
          )} */}
        </div>
      </div>
    </div>
  );
}
