"use client";

import { useState } from "react";
import { useLogin } from "@/app/features/auth/useLogin";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type LoginFormProps = {
  onSuccess?: () => void;
};

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { submit, isSubmitting, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit(email, password);
    if (ok) {
      onSuccess?.();
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
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <Button
        variant="default"
        type="submit"
        className="mt-4"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
