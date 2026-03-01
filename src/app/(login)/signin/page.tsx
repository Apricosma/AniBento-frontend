import { LoginForm } from "@/components/login-form/LoginForm";

export default async function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <LoginForm successBehavior="redirectToProfile" />
      </div>
    </div>
  );
}