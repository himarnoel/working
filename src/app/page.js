
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import HomeHero from './home/HomeHero';
import CompanySlider from './home/CompanySlider';
import OurServices from './home/OurServices';

const HomePage = () => {
  // const [jobs, setJobs] = useState([]);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [company, setCompany] = useState('');
  // const [location, setLocation] = useState('');
  // const [jobId, setJobId] = useState(''); // State for the job ID input
  // const [singleJob, setSingleJob] = useState(null); // State for the fetched single job

  // // Fetch jobs from the API
  // const fetchJobs = async () => {
  //   try {
  //     const response = await axios.get('/api/jobs');
  //     console.log('Fetched jobs:', response.data);
  //     setJobs(response.data); // Set jobs directly from the response
  //   } catch (error) {
  //     console.error('Error fetching jobs:', error);
  //   }
  // };

  // // Fetch a single job by ID
  // const fetchSingleJob = async () => {
  //   if (!jobId) return; // Do not fetch if jobId is empty

  //   try {
  //     const response = await axios.get(`/api/jobs/${jobId}`);
  //     setSingleJob(response.data); // Set the single job data
  //   } catch (error) {
  //     console.error('Error fetching job:', error);
  //     setSingleJob(null); // Reset single job state if there's an error
  //   }
  // };

  // // Handle form submission for adding new job
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newJob = { title, description, company, location };

  //   try {
  //     const response = await axios.post('/api/jobs', newJob);
  //     setJobs((prevJobs) => [response.data, ...prevJobs]); // Update state to include the new job
  //     setTitle('');
  //     setDescription('');
  //     setCompany('');
  //     setLocation('');
  //   } catch (error) {
  //     console.error('Error adding job:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  return (

      <main className='w-full bg-white min-h-screen'>
        <HomeHero/>
        <CompanySlider/>
        <OurServices/>
      </main>



    // <div className="max-w-4xl mx-auto p-4">
    //   <h1 className="text-3xl font-bold text-center mb-6">Job Portal</h1>
      
    //   {/* Job Form */}
    //   <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <h2 className="text-xl font-semibold mb-4">Add New Job</h2>
    //     <input
    //       type="text"
    //       placeholder="Job Title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       required
    //       className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //     <textarea
    //       placeholder="Job Description"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //       required
    //       className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Company"
    //       value={company}
    //       onChange={(e) => setCompany(e.target.value)}
    //       required
    //       className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Location"
    //       value={location}
    //       onChange={(e) => setLocation(e.target.value)}
    //       required
    //       className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //     <button 
    //       type="submit" 
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    //       Add Job
    //     </button>
    //   </form>

    //   {/* Fetch Single Job by ID */}
    //   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <h2 className="text-xl font-semibold mb-4">Get Job by ID</h2>
    //     <input
    //       type="text"
    //       placeholder="Enter Job ID"
    //       value={jobId}
    //       onChange={(e) => setJobId(e.target.value)}
    //       className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //     />
    //     <button 
    //       onClick={fetchSingleJob} 
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    //       Get Job
    //     </button>
    //   </div>

    //   {/* Display Single Job Details */}
    //   {singleJob && (
    //     <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    //       <h3 className="text-lg font-bold">{singleJob.title}</h3>
    //       <p className="text-gray-700">{singleJob.description}</p>
    //       <p className="text-gray-600">Company: {singleJob.company}</p>
    //       <p className="text-gray-600">Location: {singleJob.location}</p>
    //       <p className="text-gray-500 text-sm">Posted on: {new Date(singleJob.created_at).toLocaleDateString()}</p>
    //     </div>
    //   )}

    //   {/* Job List */}
    //   <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
    //   <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
    //     {jobs.map((job) => (
    //       <li key={job.id} className="p-4">
    //         <h3 className="text-lg font-bold">{job.title}</h3>
    //         <p className="text-gray-700">{job.description}</p>
    //         <p className="text-gray-600">Company: {job.company}</p>
    //         <p className="text-gray-600">Location: {job.location}</p>
    //         <p className="text-gray-500 text-sm">Posted on: {new Date(job.created_at).toLocaleDateString()}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default HomePage;
