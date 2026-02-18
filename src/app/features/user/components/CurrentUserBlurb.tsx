"use client";

import { useAuth } from "@/app/features/auth/AuthProvider";
import UserBlurbSkeleton from "./UserBlurbSkeleton";
import { useEffect, useState } from "react";

export default function CurrentUserBlurb() {
  const { user, isLoading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return <UserBlurbSkeleton />;
  }

  if (!user) {
    return null;
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