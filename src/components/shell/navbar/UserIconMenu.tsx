"use client";

import { useAuth } from "@/app/features/auth/AuthProvider";
import { UserRound, LogOutIcon, UserRoundIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import type { User } from "@/app/features/auth/types";

export default function UserIconMenu({
  initialUser,
}: {
  initialUser?: User | null;
}) {
  const { user, isLoading, logout } = useAuth();

  const displayUser = isLoading ? initialUser ?? null : user;

  if (!displayUser) return null;

  const avatarSrc = displayUser.profilePictureUrl;

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <span>{displayUser.userName}</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover cursor-pointer"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center cursor-pointer">
              <UserRound className="w-6 h-6 text-muted-foreground" />
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" sideOffset={8}>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link
                href={`/user/${displayUser.userName}`}
                className="flex w-full justify-between"
              >
                <span>My Profile</span>
                <UserRoundIcon className="w-4 h-4" />
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="flex justify-between text-destructive"
              onSelect={handleLogout}
            >
              <span>Logout</span>
              <LogOutIcon className="w-4 h-4 text-destructive" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}