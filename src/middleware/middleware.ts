import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublishPath = path === '/path' || path === '/signup' || path === '/login'

  if (isPublishPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  if(!isPublishPath) {
    return NextResponse.redirect(new URL('/home', request.url))
  }


}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/register',
  ],
}