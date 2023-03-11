import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <main>
        <div className="home">
          <header className="welcome-header">
            <h1>Welcome to Job Trackr </h1>
            <p>Stay organized in your job hunt</p>
          </header>
          <div className="description">
            <p> Job Trackr is a career service tool that supports users during their job search. Users can upload their resume
              and use a checklist to see what entities they need on their resume and are provided with a resume template that
              helps them improve their resume. Users can also add jobs they have applied to and their application status to help them keep track of applied jobs. 
            </p>
          </div>
          <Link to="/add-job">
            <button type="button" className="btn btn-light btn-lg">Go to Job Log</button>
          </Link>
          <img src={`${process.env.PUBLIC_URL}/websiteimg/homeimage.png`} alt="Home" className="home-image"/>
        </div>
      </main>
    </div>
  );
}
