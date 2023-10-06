"use client";

import { SessionProvider } from "next-auth/react";

export const SessionProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
