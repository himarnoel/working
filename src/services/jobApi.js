import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs`,
  }),
  endpoints: (builder) => ({
    fetchJobs: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    fetchJobById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "POST",
        body: credentials,
      }),
    }),
    createJob: builder.mutation({
      query: (jobData) => ({
        url: "/",
        method: "POST",
        body: jobData,
      }),
    }),
  }),
});

export const { useFetchJobsQuery, useFetchJobByIdQuery, useCreateJobMutation } =
  jobsApi;
