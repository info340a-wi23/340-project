import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

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
      <main>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Company</th>
                <th>Industry</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job, index) => (
                <tr key={index}>
                  <td>{job.date}</td>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.industry}</td>
                  <td>{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}