import { HttpError, apiFetch } from "@/lib/fetch";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type UserDetails = {
  id: string;
  userName: string;
  profilePictureUrl?: string | null;
};

export function useUserProfile() {
  const params = useParams<{ userName?: string }>();
  const userName = params?.userName;

  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!userName) {
      setUser(null);
      setLoading(false);
      setNotFound(false);
      return;
    }

    let cancelled = false;

    async function fetchProfile() {
      setLoading(true);
      setNotFound(false);
      try {
        const data = await apiFetch<UserDetails>(`/user/${userName}`);
        if (!cancelled) setUser(data);
      } catch (e) {
        if (e instanceof HttpError && e.status === 404) {
          setNotFound(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProfile();
    return () => {
      cancelled = true;
    };
  }, [userName]);

  return { user, loading, notFound };
}