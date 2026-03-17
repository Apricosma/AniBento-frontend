"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { apiFetch } from "@/lib/fetch";

export async function deleteCollectionAction(formData: FormData) {
  const userName = String(formData.get("userName") ?? "");
  const collectionId = Number(formData.get("collectionId"));

  if (!userName || !Number.isFinite(collectionId)) {
    throw new Error("Invalid delete request.");
  }

  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  await apiFetch(`/collections/${collectionId}`, {
    method: "DELETE",
    headers: {
      Cookie: cookieHeader,
    },
  });

  revalidatePath(`/user/${userName}`);
  redirect(`/user/${userName}`);
}