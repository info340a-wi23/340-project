import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const jobs = location.state?.jobs || [];

  return (
    <div>
      <header>
        <h1 className="text-center">Dashboard</h1>
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
            {jobs.map((job, index) => (
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
