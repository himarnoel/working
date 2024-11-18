// components/QuillEditor.js
"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import "react-quill/dist/quill.snow.css"; // Import styles
import QuillNoSSRWrapper from "@/components/QuillEditor";

const QuillEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [message, setMessage] = useState("");
  const [jobs, setJobs] = useState([]); // State to hold fetched jobs

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/jobs", {
        content: editorHtml,
      });

      if (response.status === 200) {
        setMessage("Job saved successfully!");
        fetchJobs(); // Fetch jobs again to update the list
      }
    } catch (error) {
      console.error("Error saving job:", error);
      setMessage("An error occurred while saving the job");
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/jobs");
      if (response.status === 200) {
        setJobs(response.data); // Update state with fetched jobs
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs(); // Fetch jobs on component mount
  }, []);

  return (
    <div className="flex flex-col items-center p-5">
      <QuillNoSSRWrapper 
        value={editorHtml}
        onChange={handleChange}
        placeholder="Write job description..."
        className="w-full mb-4 border-2 border-gray-300 rounded-md shadow-sm"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Save Job
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      <h3 className="mt-5 text-lg font-semibold">Saved Jobs:</h3>
      <div className="mt-2 w-full grid md:grid-cols-2 xl:grid-cols-3  gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="p-4 border border-gray-300 rounded-md mb-2 prose-headings:text-[#39A300] prose-headings:font-bold "
              dangerouslySetInnerHTML={{ __html: job.content }}
            />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default QuillEditor;
