import React from 'react';

export default function Home() {
  return (
    <div>
      <main>
        <div className="home">
          <header className="welcome-header">
            <h1>Welcome to Job Trackr!</h1>
          </header>
          <p> Job Trackr is a career service tool that supports users during their job search. Users can upload their resume
            and use a checklist to see what entities they need on their resume and are provided with a resume template that
            helps them improve their resume. Users can also add jobs they have applied to and their application status to help them keep track of applied jobs. </p>
        </div>
      </main>
      <div>
        <footer className="footer">
          <p>Author: Info 340 AB2</p>
          <p>© 2022 iSchool</p>
        </footer>
      </div>
    </div>
  );
}
