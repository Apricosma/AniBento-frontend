"use client";

import { useAuth } from "@/app/features/auth/AuthProvider";
import { UserRound } from "lucide-react";

export default function UserIconMenu() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) return null;

  const avatarSrc = user?.profilePictureUrl;

  return (
    <>
    <span className="">{user?.userName}</span>
      {avatarSrc ? (
        <img
          src={avatarSrc}
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <UserRound className="w-5 h-5 text-muted-foreground" />
        </div>
      )}
    </>
  );
}
