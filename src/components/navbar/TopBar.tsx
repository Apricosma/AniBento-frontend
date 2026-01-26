import { Button } from "../ui/button";
import { Input } from "../ui/input";
import UserIconMenu from "./UserIconMenu";

export default function TopBar() {
  return (
    <div className="w-full h-16 bg-card border-b border-accent flex items-center justify-between px-4">
      <h1 className="text-white text-lg">TopBar</h1>
      <Input className="w-72" />
      <div className="flex items-center">
        <Button variant="outline" className="mr-4">Sign In</Button>
        <UserIconMenu />
      </div>
    </div>
  );
}
