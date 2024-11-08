import { jobContentSchema } from "@/utils/server/validationSchema";
import { db } from "../../../../lib/db";
import { NextResponse } from "next/server";

// Handle GET request - Fetch all jobs
export async function GET() {
  try {
    const [result] = await db.query(
      "SELECT * FROM job_contents ORDER BY created_at DESC"
    );
    // console.log("job_contents", job_contents);
    const job_contents = {
      message: "Job contents fetched successfully",
      jobcontents: result,
    };
    return NextResponse.json(job_contents);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { message: "Request body must be an array of job content objects" },
        { status: 400 }
      );
    }

    // Validate each job content object
    const validatedContent = [];
    for (const item of body) {
      const { error, value } = jobContentSchema.validate(item);
      if (error) {
        return NextResponse.json(
          { message: error.details[0].message },
          { status: 400 }
        );
      }
      validatedContent.push(value);
    }

    // Filter and insert non-duplicate job content objects
    const newJobContents = [];
    for (const { job_id, heading, content } of validatedContent) {
      // Check if the entry already exists
      const [existingContent] = await db.query(
        "SELECT * FROM job_contents WHERE job_id = ? AND heading = ? AND content = ?",
        [job_id, heading, content]
      );

      if (existingContent.length > 0) {
        console.log(
          `Duplicate found for job_id: ${job_id}, heading: ${heading}`
        );
        continue; // Skip this entry if it already exists
      }

      // Insert the job content if it is not a duplicate
      const [result] = await db.query(
        "INSERT INTO job_contents (job_id, heading, content) VALUES (?, ?, ?)",
        [job_id, heading, content]
      );

      newJobContents.push({
        id: result.insertId, // Assuming MySQL returns `insertId`
        job_id,
        heading,
        content,
        created_at: new Date(),
      });
    }

    return NextResponse.json({
      message: "Job contents created successfully",
      jobcontents: newJobContents,
    });
  } catch (error) {
    console.error("Error creating job contents:", error);
    return NextResponse.json(
      { error: "Error creating job contents" },
      { status: 500 }
    );
  }
}
