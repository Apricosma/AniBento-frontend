"use client";

import { useAuth } from "@/app/features/auth/AuthProvider";
import { UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOutIcon, UserRoundIcon } from "lucide-react";
import Link from "next/link";

export default function UserIconMenu() {
  const { user, isLoading, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (isLoading) return null;

  const avatarSrc = user?.profilePictureUrl;

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
      setOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <span className="">{user?.userName}</span>
      {avatarSrc ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <img
              src={avatarSrc}
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="" sideOffset={8} align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={`/user/${user?.userName}`} className="w-full">
                  <div className="flex justify-between">
                    <p>My Profile</p>
                    <UserRoundIcon className="mt-1" />
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex justify-between text-destructive"
                onSelect={handleLogout}
              >
                Logout
                <LogOutIcon className="text-destructive mt-1" />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <UserRound className="w-5 h-5 text-muted-foreground" />
        </div>
      )}
    </>
  );
}
