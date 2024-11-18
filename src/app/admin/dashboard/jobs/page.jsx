"use client";
import ReactQuill from "react-quill";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import styles
import Modal from "@/components/Modal";

const Jobs = () => {
  // { heading: "", description: "" }
  const [jobs, setJobs] = useState([]); // State to hold jobs
  const [moveButton, setMoveButton] = useState(false);

  const handleChange = (html, index) => {
    const newJobs = [...jobs];
    newJobs[index].description = html;
    setJobs(newJobs);
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

  const handleHeadingChange = (e, index) => {
    const newJobs = [...jobs];
    newJobs[index].heading = e.target.value;
    setJobs(newJobs);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMoveButton(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="px-4 w-full mt-10 mb-32">
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="gap-4 w-full">
        <div className="flex items-center justify-center">
          {" "}
          <button
            onClick={() => {
              setOpenModal((prev) => !prev);
            }}
            className={`px-4 py-4 rounded-full w-fit  text-white bg-[#161141] mx-auto my-4 hover:bg-[#000000] transition duration-200 ${
              moveButton ? "fixed bottom-4 right-8 z-50" : "static mx-auto"
            }`}
          >
            Create a Job
          </button>
        </div>
        {/* <div className="flex items-center justify-center">
          {" "}
          <button
            onClick={handleAddNewSection} 
            className={`px-4 py-4 rounded-full w-fit  text-white bg-[#161141] mx-auto my-4 hover:bg-[#000000] transition duration-200 ${
              moveButton ? "fixed bottom-4 right-8 z-50" : "static mx-auto"
            }`}
          >
          Create a Job
          </button>
          
        </div> */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="jobList">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid lg:grid-cols-2 gap-x-8 gap"
              >
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
                        className="mb-14"
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
                            value={item.heading}
                            onChange={(e) => handleHeadingChange(e, index)}
                            className="py-3 pr-2 md:py-2 md:pr-4 rounded-lg border text-gray-900 outline-none pl-3 md:pl-4"
                            placeholder={`Job Heading ${
                              index + 1
                            } e.g Job Description`}
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
                            value={item.description}
                            onChange={(html) => handleChange(html, index)}
                            placeholder="Write job description... "
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
    </div>
  );
};

export default Jobs;
