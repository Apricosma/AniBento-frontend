export type User = {
  id: string;
  email: string;
  userName?: string | null;
  profilePictureUrl?: string | null;
}

export type AuthResponse = {
  accessToken: string;
  expiresAt: string;
  user: User;
}