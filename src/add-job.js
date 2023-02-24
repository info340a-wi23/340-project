import React from 'react';
export default function JobLog() {
return (
<div>
  <main>
    <header className="add-job-header">
      <h1>Add a Job</h1>
    </header>
    <div className="submit-job">
      <form>
        <p><label htmlFor="date">Please select the date you applied:</label></p>
        <p><input type="date" id="date" name="applied" /></p>
        <p><label htmlFor="title">Job Title:</label></p>
        <p><input type="text" id="title" name="title" /></p>
        <p><label htmlFor="company">Company:</label></p>
        <p><input type="text" id="company" name="company" /></p>
        <p><label htmlFor="industry">Industry:</label></p>
        <p><input type="text" id="industry" name="industry" /></p>
        <p><label htmlFor="status">Select Status</label></p>
        <select className="form-control" id="status">
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer Pending</option>
          <option>Rejected</option>
        </select>
        <div className="submit-button">
          <a href="dashboard.html"><button type="button" className="toggle-btn">Submit</button></a>
        </div>
      </form>
    </div>
  </main>
  </div>
);
}
