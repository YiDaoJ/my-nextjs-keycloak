"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function AuthStatus({ children }: { children: ReactNode }) {
  const { data } = useSession();
  useEffect(() => {
    if (data?.error === "RefreshAccessTokenError") {
      signOut({ callbackUrl: "/api/auth/signout" });

    }
  }, [data]);

  return <>{children}</>;
}