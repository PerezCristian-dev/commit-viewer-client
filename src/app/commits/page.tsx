"use client";
import { CommitsContainer } from "@/components/commits/CommitsContainer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated: () => redirect("/"),
  });

  //@ts-ignore
  if (session?.data?.accessToken) {
    //@ts-ignore
    localStorage.setItem("GH_ACCESS_TOKEN", session?.data?.accessToken);
  }

  return session.status === "authenticated" && <CommitsContainer />;
}
