"use client";
import { CommitsContainer } from "@/components/commits/CommitsContainer";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated: () => redirect("/"),
    
  });

  return session.status === "authenticated" && <CommitsContainer />;
}
