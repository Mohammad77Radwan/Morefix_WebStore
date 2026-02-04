/**
 * MoreFix - Auth Logout API Route Handler
 * Clears session cookies
 * Developed by Mohammad Radwan
 * © 2025 MoreFix
 */

import { NextResponse, type NextRequest } from "next/server"
import { cookies } from "next/headers"

/**
 * POST /api/auth/logout
 * Clears authentication cookies
 */
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()

    // Clear auth cookies
    cookieStore.delete("morefix-auth-token")
    cookieStore.delete("morefix-user")

    return NextResponse.json(
      { success: true, message: "Session cleared" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Auth logout error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
