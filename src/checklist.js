import React from 'react';

export default function Checklist() {
  return (
<div>
  <main>
    <header className="text-center">
      <h1>Is Your Resume Complete?</h1>
      <h2 className="mx-5">Your resume is essential in your job applications. Answer these questions to find out if you have everything you need on it!</h2>     
    </header>
    <div className="card">
      <div className="card-body">
        <div className="upload">
          <form action="/action_page.php"> <label>Upload your resume:</label>
            <input type="file" id="file" name="filename" aria-label="input file"/></form>
        </div>
        <h3>Does Your Resume Have:</h3>
        <div className="checklist">
          <p className="checkbox"><input type="checkbox" aria-label="Name and Contact" /> Name and contact information</p>
          <p className="checkbox"><input type="checkbox" aria-label="Qualifications" /> Summary of Qualifications</p>
          <p className="checkbox"><input type="checkbox" aria-label="Education" /> Education</p>
          <p className="checkbox"><input type="checkbox" aria-label="Work Experience" /> Work Experience</p>
          <p className="checkbox"><input type="checkbox" aria-label="Other Experience" /> Other Experience</p>
          <p className="checkbox"><input type="checkbox" aria-label="Skills and Tools" /> Skills &amp; Tools</p>
        </div>
      </div>
    </div>
    <div className="card">
      <p className="text-center">Need help finishing your resume? Here is a resume template:</p>
      <img src="websiteimg/Resume.png" alt='resume' />
      <p className="text-center">Find more resume templates <a href="https://careers.uw.edu/resources/sample-resumes" class="text-dark">here</a> from the University of Washington!</p>
    </div>
  </main>
  </div>
);
}
