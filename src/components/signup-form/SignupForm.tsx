"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSignup } from "@/app/features/auth/useSignup";
import type { User } from "@/app/features/auth/types";

type SignupFormProps = {
  onSuccess?: (user: User) => void;
  successBehavior?: "redirectToProfile" | "reload";
};

export function SignupForm({
  onSuccess,
  successBehavior = "redirectToProfile",
}: SignupFormProps) {
  const { submit, isSubmitting, error } = useSignup();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    const user = await submit({
      email,
      username,
      password,
    });

    if (user) {
      if (onSuccess) {
        onSuccess(user);
        return;
      }

      if (successBehavior === "redirectToProfile") {
        router.push(`/user/${user.userName}`);
        return;
      }

      window.location.reload();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <div>
          <p className="pb-2 text-lg">Email</p>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            autoFocus
          />
        </div>

        <div>
          <p className="pb-2 text-lg">Username</p>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
          />
        </div>

        <div>
          <p className="pb-2 text-lg">Password</p>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          />
        </div>

        <div>
          <p className="pb-2 text-lg">Confirm Password</p>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password..."
          />
        </div>

        {error && <p className="whitespace-pre-line text-red-500">{error}</p>}
      </div>

      <Button type="submit" className="mt-4" disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
