// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { verifyToken } from '@/lib/jwt';

export async function middleware(request) {
  const token = request.cookies.get('auth-token')?.value;
  const nextAuthToken = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

  // Check if user is authenticated (either manual JWT or NextAuth)
  const isAuthenticated = token ? verifyToken(token) : nextAuthToken;

  if (isDashboard && !isAuthenticated) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*'],
};