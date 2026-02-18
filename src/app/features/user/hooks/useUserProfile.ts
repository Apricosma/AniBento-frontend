"use client";

import { HttpError, apiFetch } from "@/lib/fetch";
import { useEffect, useState } from "react";

type UserDetails = {
  id: string;
  userName: string;
  profilePictureUrl?: string | null;
};

export function useUserProfile(userName?: string) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(!!userName);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!userName) {
      setUser(null);
      setLoading(false);
      setNotFound(false);
      return;
    }

    let mounted = true;
    setLoading(true);

    async function fetchProfile() {
      try {
        const data = await apiFetch<UserDetails>(`/user/${userName}`);
        if (mounted) {
          setUser(data);
          setNotFound(false);
        }
      } catch (error: unknown) {
        if (mounted) {
          if (error instanceof HttpError && error.status === 404) {
            setNotFound(true);
          }
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProfile();
    return () => {
      mounted = false;
    };
  }, [userName]);

  return { user, loading, notFound };
}