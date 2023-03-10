"use client";
import { SessionProvider } from "next-auth/react";

export interface SessionProps {
  children: React.ReactNode;
}

export default function Provider({ children }: SessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
