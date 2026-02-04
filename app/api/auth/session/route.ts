/**
 * MoreFix - Auth Session API Route Handler
 * Validates and returns current session info
 * Developed by Mohammad Radwan
 * © 2025 MoreFix
 */

import { NextResponse, type NextRequest } from "next/server"
import { cookies } from "next/headers"

/**
 * GET /api/auth/session
 * Returns current user session info from cookies
 * Server-side validation
 */
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const authToken = cookieStore.get("morefix-auth-token")
    const userCookie = cookieStore.get("morefix-user")

    if (!authToken || !userCookie) {
      return NextResponse.json(
        { user: null, isAuthenticated: false },
        { status: 200 }
      )
    }

    try {
      const user = JSON.parse(userCookie.value)
      const ADMIN_EMAIL = "contact.morefix.showcase@gmail.com"

      return NextResponse.json(
        {
          user,
          isAuthenticated: true,
          isAdmin: user.email === ADMIN_EMAIL,
        },
        { status: 200 }
      )
    } catch {
      return NextResponse.json(
        { user: null, isAuthenticated: false },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error("Session check error:", error)
    return NextResponse.json(
      { user: null, isAuthenticated: false },
      { status: 200 }
    )
  }
}
