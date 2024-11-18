"use client"
import { useCreateJobMutation } from "@/services/jobApi";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";

const Modal = ({ setOpenModal }) => {
  const [createJob, { isLoading, isSuccess, isError, error }] = useCreateJobMutation();
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store validation error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Check if the role field is empty
    if (!role.trim()) {
      setErrorMessage("Job role is required.");
      return;
    }
    
    // Clear error message before submission
    setErrorMessage("");

    try {
      const jobData = { role }; // Assuming your API expects a `role` field
     const result =await createJob(jobData).unwrap();
     console.log(result.message);
     
      // Reset form on successful job creation
      setRole("");
      toast.success(result.message);
      setOpenModal((prev) => !prev);
    } catch (err) {
      toast.error(err.data.message)
      console.error("Failed to create job:", err);
    }
  };

  return (
    <div
      onClick={() => setOpenModal((prev) => !prev)}
      className="fixed inset-0 lg:px-0 px-4 bg-opacity-45 backdrop-blur-sm bg-black flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[550px] w-full py-4 bg-white rounded-[13px] shadow-lg px-8"
      >
        <p className="text-xl font-semibold text-[#161141] mb-6">
          Create a Job Role
        </p>
        <div className="flex flex-col">
          <label
            htmlFor="heading"
            className="text-sm leading-loose mb-1 text-gray-700 font-bold"
          >
            Job Role
          </label>
          <input
            type="text"
            id="heading"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="py-3 pr-2 md:py-2 md:pr-4 rounded-lg border text-gray-900 outline-none pl-3 md:pl-4"
            placeholder="Job Role e.g Software Engineer"
          />
          {/* Display validation error message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
        </div>
        <button
          onClick={handleSubmit} // Add handleSubmit to the button's onClick
          className={`px-4 py-2 rounded-md w-fit mt-6 gap-2 text-white bg-[#161141] mx-auto my-4 hover:bg-[#000000] transition duration-200 ${"static mx-auto"}`}
        >
          {isLoading?"...loading":"Create a Job"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
