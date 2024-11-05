// app/api/auth/signup/route.js

import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";
import bcrypt from 'bcryptjs';
import { signupSchema } from "@/utils/server/validationSchema";

export async function POST(request) {
    const body = await request.json();
    const { error, value } = signupSchema.validate(body);
  
    if (error) {
      return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }
  
    const { email, password, name } = value;
  
    try {
      const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      if (user.length > 0) {
        return NextResponse.json({ message: 'User already exists' }, { status: 409 });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.query('INSERT INTO users (email, password, name) VALUES (?, ?, ?)', [email, hashedPassword, name]);
  
      return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Error creating user', error: error.message }, { status: 500 });
    }
  }