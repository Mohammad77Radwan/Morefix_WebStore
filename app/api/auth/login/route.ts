/**
 * MoreFix - Auth API Route Handler
 * Handles session management with HTTP-only cookies
 * Developed by Mohammad Radwan
 * © 2025 MoreFix
 */

import { NextResponse, type NextRequest } from "next/server"
import { cookies } from "next/headers"

/**
 * POST /api/auth/login
 * Stores Firebase auth token in HTTP-only cookie
 */
export async function POST(request: NextRequest) {
  try {
    const { token, uid, email, displayName } = await request.json()

    if (!token || !uid || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const cookieStore = await cookies()

    // Store in HTTP-only cookie (secure, not accessible to JS)
    cookieStore.set("morefix-auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })

    // Store user info in separate cookie (accessible for validation)
    cookieStore.set(
      "morefix-user",
      JSON.stringify({ uid, email, displayName }),
      {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      }
    )

    return NextResponse.json(
      { success: true, message: "Session created" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Auth login error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
