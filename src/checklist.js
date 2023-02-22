<div>
  <meta charSet="utf-8" />
  <meta name="author" content="Sonia Dashti" />
  <meta name="Job Trackr" content="Resume Checklist" />
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
    <header className="text-center">
      <h1>Is Your Resume Complete?</h1>
      <h2 className="mx-5">Your resume is essential in your job applications. Answer these questions to find out if you have everything you need on it!</h2>     
    </header>
    <div className="card">
      <div className="card-body">
        <div className="upload">
          <form action="/action_page.php"> <label>Upload your resume:</label>
            <input type="file" id="file" name="filename" /></form>
        </div>
        <h3>Does Your Resume Have:</h3>
        <div className="checklist">
          <p className="checkbox"><input type="checkbox" label="Name and Contact" /> Name and contact information</p>
          <p className="checkbox"><input type="checkbox" label="Qualifications" /> Summary of Qualifications</p>
          <p className="checkbox"><input type="checkbox" label="Education" /> Education</p>
          <p className="checkbox"><input type="checkbox" label="Work Experience" /> Work Experience</p>
          <p className="checkbox"><input type="checkbox" label="Other Experience" /> Other Experience</p>
          <p className="checkbox"><input type="checkbox" label="Skills and Tools" /> Skills &amp; Tools</p>
        </div>
      </div>
    </div>
    <div className="card">
      <p className="text-center">Need help finishing your resume? Here is a resume template:</p>
      <img src="websiteimg/Resume.png" alt='resume' />
      <p className="text-center">Find more resume templates <a href="https://careers.uw.edu/resources/sample-resumes">here</a> from the University of Washington!</p>
    </div>
  </main>
  <div>
    <footer className="footer">
      <p>Author: Info 340 AB2</p>
      <p>© 2022 iSchool</p>
    </footer></div></div>
