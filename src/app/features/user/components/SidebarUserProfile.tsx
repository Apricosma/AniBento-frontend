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
    <div>
      <div className="p-4 border-b border-border">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden ring-2 ring-border">
            {user.profilePictureUrl ? (
              <Link
                href={`/user/${user.userName}`}
                className="w-full h-full block"
              >
                <Image
                  src={user.profilePictureUrl}
                  alt={user.userName ?? "User"}
                  fill={true}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">
              {user.userName}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {user.bio || "No bio yet"}
            </p>
          </div>
        </div>
      </div>
      <SidebarCollections collections={collections} user={user} />
    </div>
  );
}
