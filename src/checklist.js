import React, { useRef } from 'react';

export default function Checklist(props) {
  const fileInputRef = useRef(null);
  const iframeContainerRef = useRef(null);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    const url = URL.createObjectURL(file);
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = '100%';
    iframe.height = '500px';
    iframeContainer.innerHTML = '';
    iframeContainerRef.current.appendChild(iframe);
  };

  return (
  <div>
    <main>
      <header className="text-center">
        <h1>{props.title}</h1>
        <p className="mx-5">Your resume is essential in your job applications. Answer these questions to find out if you have everything you need on it!</p>     
      </header>
      <div className="card">
        <div className="card-body">
        <div className="upload">
              <form>
                <label>Upload your resume:</label>
                <input type="file" id="file" name="filename" aria-label="input file" ref={fileInputRef} onChange={handleFileUpload} />
                <div id="iframeContainer" ref={iframeContainerRef}></div>
              </form>
            </div>
          <h2>Does Your Resume Have:</h2>
          <div className="checklist">
            <p className="checkbox"><input type="checkbox" id="name" /><label htmlFor='name'>Name and contact information</label></p>
            <p className="checkbox"><input type="checkbox" id="qualifications" /><label htmlFor='qualifications'>Summary of Qualifications</label></p>
            <p className="checkbox"><input type="checkbox" id="education" /><label htmlFor="education">Education</label></p>
            <p className="checkbox"><input type="checkbox" id="work_experience" /><label htmlFor="work_experience">Work Experience</label></p>
            <p className="checkbox"><input type="checkbox" id="other_experience" /><label htmlFor="other_experience">Other Experience</label></p>
            <p className="checkbox"><input type="checkbox" id="skills_and_tools" /><label htmlFor="skills_and_tools">Skills &amp; Tools</label></p>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="text-center">Need help finishing your resume? Here is a resume template:</p>
        <img src="websiteimg/Resume.png" alt='resume' />
        <p className="text-center">Find more resume templates <a href="https://careers.uw.edu/resources/sample-resumes" className="text-dark">here</a> from the University of Washington!</p>
      </div>
    </main>
  </div>
);
}
