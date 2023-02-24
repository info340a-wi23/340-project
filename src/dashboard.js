import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const jobs = location.state?.jobs || [];

  const [statusFilter, setStatusFilter] = useState('All');

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredJobs = statusFilter === 'All' ? jobs : jobs.filter(job => job.status === statusFilter);

  return (
    <div>
      <header>
        <h1 className="text-center">Dashboard</h1>
        <div className="filter-container">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select id="status-filter" onChange={handleFilterChange} value={statusFilter}>
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer Pending">Offer Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button onClick={() => setStatusFilter('All')}>Clear Filter</button>
        </div>
      </header>
      <main>
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
      </main>
    </div>
  );
}
