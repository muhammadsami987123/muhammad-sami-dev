import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets live under /public/projects/ and share this prefix. Rewriting
  // them to /Projects/ points at a route that holds no files, so anything with a
  // file extension must pass through untouched.
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname === '/projects' || pathname.startsWith('/projects/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/projects/, '/Projects');
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/projects/:path*'],
};
