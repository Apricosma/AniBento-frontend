import Image from "next/image";
import { User } from "@/app/features/auth/types";
import Link from "next/link";
import SidebarCollections from "./SidebarCollections";

type SidebarUserProfileProps = {
  user: User;
  collections?: UserCollection[];
};

export default function SidebarUserProfile({
  user,
  collections = [],
}: SidebarUserProfileProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="shrink-0 border-b border-border p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-border">
            {user.profilePictureUrl ? (
              <Link
                href={`/user/${user.userName}`}
                className="block h-full w-full"
              >
                <Image
                  src={user.profilePictureUrl}
                  alt={user.userName ?? "User"}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            ) : (
              <div className="h-full w-full bg-muted" />
            )}
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">
              {user.userName}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {user.bio || "No bio yet"}
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1">
        <SidebarCollections collections={collections} user={user} />
      </div>
    </div>
  );
}