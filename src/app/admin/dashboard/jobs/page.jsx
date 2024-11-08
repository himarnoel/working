"use client";
import ReactQuill from "react-quill";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
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
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside the list
    if (!destination) return;

    // Rearrange the list
    const updatedJobs = Array.from(jobs);
    const [movedJob] = updatedJobs.splice(source.index, 1);
    updatedJobs.splice(destination.index, 0, movedJob);
    setJobs(updatedJobs);
  };
  return (
    <div className="px-4 max-w-[500px] w-full mx-auto mt-10 mb-32">
      <div className="gap-4 flex flex-col">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="jobList">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {jobs.map((item, index) => (
                  <Draggable
                    key={index}
                    draggableId={`job-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="mb-20"
                      >
                        {/* Drag handle */}
                        <div
                          {...provided.dragHandleProps}
                          className="cursor-grab mb-2 w-full text-gray-500"
                        >
                          ☰ {/* This indicates it's draggable */}
                        </div>

                        <div className="flex flex-col">
                          <label
                            htmlFor={`heading-${index}`}
                            className="text-lg leading-loose mb-1 text-gray-700 font-bold"
                          >
                            Heading {index + 1}
                          </label>
                          <input
                            type="text"
                            id={`heading-${index}`}
                            className="py-3 pr-2 md:py-2 md:pr-4 rounded-lg border text-gray-900 outline-none pl-3 md:pl-4"
                            placeholder={`Job Heading ${index + 1}`}
                          />
                        </div>
                        <div className="flex flex-col mt-4">
                          <label
                            htmlFor={`description-${index}`}
                            className="text-lg leading-loose mb-1 text-gray-700 font-bold"
                          >
                            Description {index + 1}
                          </label>
                          <ReactQuill
                            value={editorHtml}
                            onChange={handleChange}
                            placeholder="Write job description..."
                            className="w-full h-64 mb-4 rounded-xl"
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <button
        onClick={handleAddNewSection}
        className="px-4 py-2 text-white bg-[#161141] mt-4 w-full rounded-md hover:bg-[#000000] transition duration-200"
      >
        Add New Section
      </button>
    </div>
  );
};

export default Jobs;
