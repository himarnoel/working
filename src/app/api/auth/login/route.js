// app/api/auth/login/route.js

import { loginSchema } from "@/utils/server/validationSchema";
import { db } from "../../../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const body = await request.json();
  console.log("body", body);

  const { error, value } = loginSchema.validate(body);

  if (error) {
    return NextResponse.json(
      { message: error.details[0].message },
      { status: 400 }
    );
  }

  const { email, password } = value;

  try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (user.length === 0) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user[0].password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
    console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: user[0].id, email: user[0].email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const response = NextResponse.json(
      { message: "Login successful", token },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 8 * 3600, 
      sameSite: "lax", // prevents CSRF issues
    });

    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error:", error);

    return NextResponse.json(
      { message: "Error logging in", error: error.message },
      { status: 500 }
    );
  }
}
