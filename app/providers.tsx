/**
 * MoreFix - Client Providers Wrapper
 * Developed by Mohammad Radwan
 * © 2025 MoreFix
 */

"use client"

import type { ReactNode } from "react"
import { AuthProvider } from "@/contexts/auth-context"
import { Toaster } from "@/components/ui/toaster"

interface ClientProvidersProps {
  children: ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
  )
}
