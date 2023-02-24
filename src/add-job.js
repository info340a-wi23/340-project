import React from 'react';
export default function JobLog() {
return (
<div>
  <meta charSet="utf-8" />
  <meta name="author" content="Emily Hale" />
  <meta name="Job Trackr" content="Add a Job" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Job Trackr</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
  <link rel="stylesheet" href="css/website.css" />
  <div className="banner">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"><img src="websiteimg/icon.png" alt="Logo" width={34} height={34} className="d-inline-block align-text-top" /> JobTrackr</a>                
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li><a className="nav-link" href="index.html">Home</a></li>
            <li><a className="nav-link" href="job-log.html">Job Tracker</a></li>
            <li><a className="nav-link" href="checklist.html">Checklist</a></li>
            <li><a className="nav-link" href="login.html">Login</a></li>
            <li><a className="nav-link" href="about.html">About</a></li>
          </ul>
        </div>
      </div></nav>
  </div>
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
  <div>
    <footer className="footer">
      <p>Author: Info 340 AB2</p>
      <p>© 2022 iSchool</p>
    </footer>
  </div></div>
);
}
