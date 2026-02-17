import { redirect } from "next/navigation";

export default function Home() {
  redirect("/user/sam/1");
}