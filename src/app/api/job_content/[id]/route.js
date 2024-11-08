import { jobContentSchema } from "@/utils/server/validationSchema";
import { db } from "../../../../../lib/db";
import { NextResponse } from "next/server";


export async function PATCH(request, { params }) {
  try {
    const { id } = params; // Extract `id` from the URL (likely the content_id)
    const body = await request.json();
    const { job_id, heading, content } = body;

    // Validate input data
    const { error, value } = jobContentSchema.validate({ job_id, heading, content });
    if (error) {
      return NextResponse.json(
        { message: error.details[0].message },
        { status: 400 }
      );
    }

    // Update the job content entry
    const [result] = await db.query(
      'UPDATE job_contents SET heading = ?, content = ? WHERE id = ? AND job_id = ?',
      [heading, content, id, job_id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: 'Job content not found or no changes made' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Job content updated successfully',
      updatedContent: { id, job_id, heading, content },
    });
  } catch (error) {
    console.error('Error updating job content:', error);
    return NextResponse.json(
      { error: 'Error updating job content' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params; // Extract `id` from the URL
    const { job_id } = await request.json();

    if (!job_id) {
      return NextResponse.json(
        { message: 'Job ID is required for deletion' },
        { status: 400 }
      );
    }

    // Delete the job content entry
    const [result] = await db.query(
      'DELETE FROM job_contents WHERE id = ? AND job_id = ?',
      [id, job_id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: 'Job content not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Job content deleted successfully',
      deletedContentId: id,
    });
  } catch (error) {
    console.error('Error deleting job content:', error);
    return NextResponse.json(
      { error: 'Error deleting job content' },
      { status: 500 }
    );
  }
}
