import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { User } from "@/app/features/auth/types";
import Link from "next/link";
import Image from "next/image";

type WelcomeCardProps = {
  user: User | null;
};

export default function WelcomeCard({ user }: WelcomeCardProps) {
  return (
    <Card className="rounded-4xl rounded-tr-4xl rounded-br-md rounded-bl-md py-8 px-10 flex items-center lg:col-span-4 min-h-[22rem] lg:rounded-tr-md justify-between hover:border-blue-300/20 transition-colors duration-300">
      <div className="w-full text-center md:text-left">
        {!user ? (
          <>
            <h1 className="text-4xl font-bold leading-tight">
              Welcome to AniBento!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Please{" "}
              <Link href="/signin" className="text-blue-300 hover:underline">
                Sign In
              </Link>{" "}
              or
              <Link href="/signup" className="text-blue-300 hover:underline">
                {" "}
                Register
              </Link>{" "}
              to view your profile and collections.
            </p>
          </>
        ) : (
          <Link href={`/user/${user.userName}`} className="flex flex-col items-center text-center gap-2">
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src={user.profilePictureUrl}
              alt={`${user.userName}'s avatar`}
              width={120}
              height={120}
              className="rounded-md mt-4 mx-auto md:mx-0"
            />
            <h1 className="text-3xl font-bold leading-tight">
              Welcome back, <span className="text-blue-300">{user.userName}</span>!
            </h1>
          </div>
          </Link>
        )}
      </div>

      {!user ? (
        <>
          <Button variant="default" className="w-full mt-6 md:mt-0" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <Link href="/signup">Register</Link>
          </Button>
        </>
      ) : (
        <Button variant="default" className="w-full mt-6 md:mt-0" asChild>
          <Link href={`/user/${user.userName}`}>Check out your Bento</Link>
        </Button>
      )}
    </Card>
  );
}
