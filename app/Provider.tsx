'use client'

import { minutesInSeconds } from "@/utils/time";
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}