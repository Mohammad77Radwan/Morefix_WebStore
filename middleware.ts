/**
 * MoreFix - Next.js Middleware
 * Validates authentication for protected routes
 * Developed by Mohammad Radwan
 * © 2025 MoreFix
 */

import { NextResponse, type NextRequest } from "next/server"

const ADMIN_EMAIL = "contact.morefix.showcase@gmail.com"

export function middleware(request: NextRequest) {
  // Add security headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-custom-header", "morefix-security-check")

  // Check for auth token in cookies
  const authToken = request.cookies.get("morefix-auth-token")
  const userCookie = request.cookies.get("morefix-user")

  // Parse user from cookie
  let isAdmin = false
  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value)
      isAdmin = user.email === ADMIN_EMAIL
    } catch {
      isAdmin = false
    }
  }

  // If no auth token, user is not authenticated
  const isAuthenticated = !!authToken

  // Add auth info to request headers for server components
  if (isAuthenticated) {
    requestHeaders.set("x-user-authenticated", "true")
    requestHeaders.set("x-user-is-admin", isAdmin ? "true" : "false")
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

// Apply middleware to all routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
