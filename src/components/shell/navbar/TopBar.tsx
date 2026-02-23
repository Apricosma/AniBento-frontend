"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TopBar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full h-16 bg-card border-b border-accent flex items-center justify-between px-4">
      <Link href={`/user/${user?.userName}`} className="text-white text-lg">
        TopBar
      </Link>

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
                <LoginForm onSuccess={() => { setOpen(false); router.refresh(); }} />
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        )}
        {user && <UserIconMenu />}
      </div>
    </div>
  );
}
