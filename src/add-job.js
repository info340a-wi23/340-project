import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobList(props) {
  return (
    <ul>
      {props.jobs.map((job, index) => (
        <li key={index}>
          <p>Date: {job.date}</p>
          <p>Title: {job.title}</p>
          <p>Company: {job.company}</p>
          <p>Industry: {job.industry}</p>
          <p>Status: {job.status}</p>
        </li>
      ))}
    </ul>
  );
}

export default function JobLog() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newJob = {
      date: formData.get('applied'),
      title: formData.get('title'),
      company: formData.get('company'),
      industry: formData.get('industry'),
      status: formData.get('status'),
    };
    setJobs([...jobs, newJob]);
    navigate('/dashboard', { state: { jobs: [...jobs, newJob] } });
  };

 return (
   <div>
     <main>
       <header className="add-job-header">
         <h1>Add a Job</h1>
       </header>
       <div className="submit-job">
         <form onSubmit={handleSubmit}>
           <p>
             <label htmlFor="date">Please select the date you applied:</label>
           </p>
           <p>
             <input type="date" id="date" name="applied" required />
           </p>
           <p>
             <label htmlFor="title">Job Title:</label>
           </p>
           <p>
             <input type="text" id="title" name="title" required />
           </p>
           <p>
             <label htmlFor="company">Company:</label>
           </p>
           <p>
             <input type="text" id="company" name="company" required />
           </p>
           <p>
             <label htmlFor="industry">Industry:</label>
           </p>
           <p>
             <input type="text" id="industry" name="industry" required />
           </p>
           <p>
             <label htmlFor="status">Select Status</label>
           </p>
           <select className="form-control" id="status" name="status" required>
             <option>Applied</option>
             <option>Interview</option>
             <option>Offer Pending</option>
             <option>Rejected</option>
           </select>
           <div className="submit-button">
            <a href="./dashboard"><button type="submit" className="toggle-btn">Submit</button></a>
           </div>
         </form>
       </div>
     </main>
     <div>
       <JobList jobs={jobs} />
     </div>
   </div>
 );
}

