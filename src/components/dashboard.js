import React, { useState, useEffect } from 'react';
import { useLocation, Link} from 'react-router-dom';
import { getDatabase, ref, onValue, update } from 'firebase/database';

export default function Dashboard() {
  const location = useLocation();
  const jobs = location.state?.jobs || [];
  const [jobsList, setJobs] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const jobsRef = ref(database, 'jobs');
    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const jobList = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        setJobs(jobList);
      } else {
        setJobs([]);
      }
    });
  }, []);

  const [statusFilter, setStatusFilter] = useState('All');

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleStatusChange = (jobId, status) => {
    const database = getDatabase();
    const jobRef = ref(database, `jobs/${jobId}`);
    update(jobRef, { status })
      .then(() => {
        const updatedJobsList = jobsList.map((job) => {
          if (job.id === jobId) {
            return { ...job, status };
          }
          return job;
        });
        setJobsList(updatedJobsList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filteredJobs = statusFilter === 'All' ? jobsList : jobsList.filter(job => job.status === statusFilter);

  return (
    <div>
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="filter-container">
        <label htmlFor="status-filter">Filter by Status:</label>
        <select id="status-filter" onChange={handleFilterChange} value={statusFilter}>
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer Pending">Offer Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button type="button" className="btn btn-light btn-sm" onClick={() => setStatusFilter('All')}>Clear Filter</button>
      </div>
      <div className="add-a-job">
        <Link to="/add-job">
          <button type="button" className="btn btn-light btn-lg">Add a job</button>
        </Link>   
      </div>   
      <main>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th >Date</th>
                <th>Title</th>
                <th>Company</th>
                <th>Industry</th>
                <th style={{ width: '100px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job, index) => (
                <tr key={index}>
                  <td>{job.date}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.industry}</td>
                  <td>
                    <select value={job.status} onChange={(event) => handleStatusChange(job.id, event.target.value)}>
                      <option value="Applied">Applied</option>
                      <option value="Interview">Interview</option>
                      <option value="Offer Pending">Offer Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}