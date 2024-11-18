"use client";
import { useFetchJobsQuery } from "@/services/jobApi";
import React from "react";

const Dashboard = () => {
  const {
    data: jobs,
    error: fetchError,
    isLoading: isFetching,
  } = useFetchJobsQuery();
  console.log(jobs);

  return (
    <div className="px-4">
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {jobs?.map((item) => (
          <div
            key={item?.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item?.role}
            </h2>
            <p className="text-gray-600">ID: {item?.id}</p>
            <p className="text-gray-500">
              Created at: {new Date(item?.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Dashboard;
