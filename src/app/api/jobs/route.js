import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

// Handle POST request - Add a new job
export async function POST(req) {
  try {
    const { content } = await req.json();
    const [result] = await db.query("INSERT INTO jobs (content) VALUES (?)", [
      content,
    ]);
    const newJob = {
      content,
      created_at: new Date(),
    };
    return NextResponse.json({
      message: "Job created successfully",
      jobId: newJob,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { message: "Error creating job" },
      { status: 500 }
    );
  }
}

// Handle GET request - Fetch all jobs
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM jobs ORDER BY created_at DESC"
    );
    console.log("rows", rows);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}
