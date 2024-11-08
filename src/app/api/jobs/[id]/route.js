import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";

export async function GET(request, { params }) {
  const { id } = params; // Get the job ID from the URL parameters

  try {
    const [rows] = await db.query("SELECT * FROM jobs WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job: rows[0] }, { status: 200 }); // Return the job found
  } catch (error) {
    console.error("Error fetching job:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the job." },
      { status: 500 }
    );
  }
}

// PUT to update job content by ID
export async function PUT(req, { params }) {
  const { jobId } = params;

  try {
    const { content } = await req.json();

    // Check if the job exists
    const [existingJob] = await db.query("SELECT * FROM jobs WHERE id = ?", [
      jobId,
    ]);
    if (existingJob.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Update job content
    await db.query("UPDATE jobs SET content = ? WHERE id = ?", [
      content,
      jobId,
    ]);

    return NextResponse.json({ message: "Job updated successfully" });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json({ error: "Error updating job" }, { status: 500 });
  }
}

// DELETE job by ID
export async function DELETE(req, { params }) {
  const { jobId } = params;

  try {
    // Check if the job exists
    const [existingJob] = await db.query("SELECT * FROM jobs WHERE id = ?", [
      jobId,
    ]);
    if (existingJob.length === 0) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Delete the job
    await db.query("DELETE FROM jobs WHERE id = ?", [jobId]);

    return NextResponse.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json({ error: "Error deleting job" }, { status: 500 });
  }
}
