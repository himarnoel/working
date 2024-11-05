import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';


// Define your protected routes


const protectedRoutes = ['/admin/dashboard', '/profile']; // Routes that need authentication
const publicRoutes = ['/admin/login'];

export async function middleware(request) {
    const token = request.cookies.get('token');
    const currentRoute = request.nextUrl.pathname;
  
    // Encode JWT_SECRET as required by `jose`
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  
    // Check if the current route is protected
    const isProtectedRoute = protectedRoutes.some(route => currentRoute.startsWith(route));
  
    // Check if the current route is a public route that should be restricted for logged-in users
    const isPublicRoute = publicRoutes.some(route => currentRoute.startsWith(route));
  
    try {
      // If token exists, verify it
      if (token?.value) {
        await jwtVerify(token.value, secret);
        console.log("Token verified successfully.");
  
        // Redirect logged-in users away from public pages
        if (isPublicRoute) {
          return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
        
        // Allow access to protected and other routes if token is valid
        return NextResponse.next();
      }
  
      // If no token and trying to access a protected route, redirect to login
      if (isProtectedRoute) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
  
      // If no token and accessing public or other routes, allow access
      return NextResponse.next();
      
    } catch (error) {
      console.error("Token verification failed:", error.message);
  
      // If token verification fails, redirect to login if it's a protected route
      if (isProtectedRoute) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
  
      // Allow access to public or other routes
      return NextResponse.next();
    }
  }
  
  export const config = {
    matcher: ['/((?!_next/static|favicon.ico).*)'],
  };