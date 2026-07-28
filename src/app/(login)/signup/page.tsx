import { SignupForm } from "@/components/signup-form/SignupForm";
import { Card } from "@/components/ui/card";

export default async function SignInPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="bg-aurora mt-42" />

      <Card className="relative z-10 w-full max-w-md p-8 bg-white/5">
        <div className="space-y-2">
          <h1 className="text-center text-6xl font-sour-gummy">AniBento</h1>
          <h2 className="text-center text-2xl">Sign Up</h2>
        </div>
        <SignupForm successBehavior="redirectToProfile" />
      </Card>
    </div>
  );
}
