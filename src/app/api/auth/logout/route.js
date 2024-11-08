// app/api/auth/logout/route.js

import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );
  // Clear the token cookie by setting it with a past expiration
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0, // expire immediately
    sameSite: "lax",
  });

  return response;
}
