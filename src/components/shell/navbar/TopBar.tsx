"use client";

import { Button } from "@/components/ui/button";
import UserIconMenu from "./UserIconMenu";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LoginForm } from "@/components/login-form/LoginForm";
import { useAuth } from "@/app/features/auth/AuthProvider";
import { useState } from "react";
import Link from "next/link";

export default function TopBar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-card border-b border-accent flex items-center justify-between px-4">
      <Link
        href="/"
        className="text-white text-3xl tracking-wider font-sour-gummy font-bold"
      >
        AniBento
      </Link>

      <div className="">
        <ul className="flex space-x-8">
          <li>
            <Link
              href={`/user/${user?.userName}`}
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="/find"
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              Find
            </Link>
          </li>
          <li>
            <Link
              href="/explore"
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              Explore Media
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        {!user && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mr-2">
                Sign In
              </Button>
            </PopoverTrigger>

            <PopoverContent
              className="w-80 bg-accent"
              align="end"
              sideOffset={8}
            >
              <PopoverHeader className="">
                <PopoverTitle className="text-3xl">Welcome Back!</PopoverTitle>
                <PopoverDescription className="pb-2 text-md">
                  Please sign in to continue.
                </PopoverDescription>
                <LoginForm
                  successBehavior="reload"
                  onSuccess={() => {
                    setOpen(false);
                    window.location.reload();
                  }}
                />
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        )}
        {user && <UserIconMenu />}
      </div>
    </div>
  );
}
