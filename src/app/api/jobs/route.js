import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { jobSchema } from "@/utils/server/validationSchema";

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();

    // Validate the input data
    const { error, value } = jobSchema.validate(body);
    
    if (error) {
      console.log("Validation error:", error.details[0].message);
      return NextResponse.json(
        { message: error.details[0].message },
        { status: 400 }
      );
    }

    // Check for existing job with the same role to prevent duplicates
    const [existingJob] = await db.query("SELECT * FROM jobs WHERE role = ?", [
      value.role,
    ]);
    if (existingJob.length > 0) {
      return NextResponse.json(
        { message: "A job with this role already exists" },
        { status: 409 } // 409 Conflict status for duplicate entries
      );
    }

    // Insert job data into the database
    const [result] = await db.query("INSERT INTO jobs (role) VALUES (?)", [
      value.role,
    ]);

    // Create the new job object with the insertId from the database
    const newJob = {
      id: result.insertId,
      role: value.role,
      created_at: new Date(),
    };

    return NextResponse.json({
      message: "Job created successfully",
      job: newJob,
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
    // console.log("rows", rows);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}
