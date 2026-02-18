import { apiFetch } from "@/lib/fetch";
import type { User } from "@/app/features/auth/types";

/**
 * fetches the public profile information for a given userName. This is used for displaying user profiles and sidebar blurbs.
 * It is separate from the auth/me endpoint which may return more detailed information about the currently authenticated user.
 * 
 * Result may be cached, as it does not contain any user session details
 * 
 * Tagged with user-profile-{userName} for cache invalidation when a user updates their profile
 * @param userName The username of the user whose profile is being fetched
 * @returns 
 */
export async function fetchUserProfile(userName: string): Promise<User> {
  console.log(`fetching ${userName}'s profile`);
  return apiFetch<User>(`/user/${userName}`, {
    next: {
      revalidate: 300,
      tags: [`user-profile-${userName}`],
    }
  })
}