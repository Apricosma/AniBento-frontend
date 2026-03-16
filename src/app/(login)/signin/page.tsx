import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/login-form/LoginForm";

export default async function SignInPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="bg-aurora mt-42" />

      <Card className="relative z-10 w-full max-w-md p-8 bg-white/5">
        <h1 className="text-center text-2xl font-bold">Sign In</h1>
        <LoginForm successBehavior="redirectToProfile" />
      </Card>
    </div>
  );
}