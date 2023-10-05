import Layout from "@/components/Layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Commit Viewer",
  icons: ["./github-mark-white.svg"],
  description: "View your current github repository commits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
