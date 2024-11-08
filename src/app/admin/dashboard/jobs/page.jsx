"use client";
import ReactQuill from "react-quill";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import styles
const Jobs = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [message, setMessage] = useState("");
  const [jobs, setJobs] = useState([{ heading: "", description: "" }]); // State to hold fetched jobs

  const handleChange = (html) => {
    setEditorHtml(html);
  };
  const handleAddNewSection = () => {
    setJobs([...jobs, { heading: "", description: "" }]);
  };
  return (
    <div className="px-4 max-w-[500px] w-full mx-auto mt-10 mb-32">
      <div className="gap-20 flex flex-col">
        {jobs.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="flex flex-col ">
              <label
                htmlFor="heading"
                className="text-lg leading-loose mb-1 text-gray-700 font-bold font-display"
              >
                Heading {index + 1}
              </label>
              <input
                type="email"
                id="heading"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                className="py-3 pr-2 md:py-2 md:pr-4 rounded-lg border text-gray-900 outline-none pl-3 md:pl-4"
              />
            </div>
            <div className="flex flex-col mt-8  ">
              <label
                htmlFor="heading"
                className="text-lg leading-loose mb-1 text-gray-700 font-bold font-display"
              >
                Description {index + 1}
              </label>
              <ReactQuill
                value={editorHtml}
                onChange={handleChange}
                placeholder="Write job description..."
                className="w-full mb-4  h-64  rounded-xl  s"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddNewSection}
        className="px-4 py-2 text-white bg-[#161141] mt-20 w-full rounded-md hover:bg-[#070611] transition duration-200"
      >
        Add New Section
      </button>
    </div>
  );
};

export default Jobs;
