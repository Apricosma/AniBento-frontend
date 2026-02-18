import Image from "next/image";
import { User } from "@/app/features/auth/types";

export default function SidebarUserProfile({ user }: { user: User }) {
  return (
    <div className="p-6 border-b border-border">
      <div className="flex flex-col items-center gap-4">
        {/* Profile Picture */}
        <div className="relative w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden ring-2 ring-border">
          {user.profilePictureUrl ? (
            <Image
              src={user.profilePictureUrl}
              alt={user.userName ?? "User"}
              width={192}
              height={192}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </div>

        {/* Username */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground">
            {user.userName}
          </h3>
          {/* Optional: Add bio or follower count */}
          <p className="text-sm text-muted-foreground mt-1">
            {user.bio || "No bio yet"}
          </p>
        </div>

        {/* Optional: Action buttons */}
        {/* <div className="flex gap-2 w-full mt-2">
          <Button variant="outline" size="sm" className="flex-1">
            Follow
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Message
          </Button>
        </div> */}
      </div>
    </div>
  );
}