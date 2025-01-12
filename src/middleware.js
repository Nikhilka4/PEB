import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = request.nextUrl.pathname

  // Define paths that should not be redirected
  const publicPaths = ['/home', '/projects', '/services', '/quote']
  
  // Check if the path starts with any of the public paths
  const isPublicPath = publicPaths.some(publicPath => 
    path.startsWith(publicPath)
  )

  // If the path is not public and not the root path, redirect to /home
  if (!isPublicPath) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
 
  return NextResponse.next()
}
 
// Configure which paths should trigger this middleware
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}

