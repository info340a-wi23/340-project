import React from 'react';

export default function About() {
  return (
<div>
  <meta charSet="utf-8" />
  <meta name="author" content="Andrew Le" />
  <meta name="Job Trackr" content="About Us" />
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
    <h1 className="text-center">About GroupAB2</h1>
    <div className="flex-container">
      <section className="header padded">
      </section>
      <section className="bio">
        <div className="bio-container"> 
          <div className="bio-card">
            <img src="aboutimg/andrew.jpeg" alt="Photo of Andrew" />
            <div className="bio-text">
              <h2>Andrew Le</h2>
              <p>
                Hi, my name is Andrew and I am a third year student intending on majoring in Informatics with a minor in Entre.
              </p>
            </div>
          </div>
          <div className="bio-card">
            <img src="aboutimg/sonia.jpg" alt="Photo of Sonia" />
            <div className="bio-text">
              <h2>Sonia Dashti</h2>
              <p>
                Hi, I’m Sonia! I am a third-year Informatics student focusing in HCI and Information Management.
              </p>
            </div>
          </div>
          <div className="bio-card">
            <img src="aboutimg/tyrell.jpg" alt="Photo of Tyrell" />
            <div className="bio-text">
              <h2>Tyrell Garza</h2>
              <p>
                Hi, my name is Tyrell and I’m a senior finishing up a double degree in Informatics and Communications.
              </p>
            </div>
          </div>
          <div className="bio-card">
            <img src="aboutimg/emily.jpg" alt="Photo of Emily" />
            <div className="bio-text">
              <h2>Emily Hale</h2>
              <p>
                Hi I’m Emily! I am a third-year student majoring in Informatics and minoring in Business
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-jobtrackr">
        <div className="why-container">
          <div className="why-text">
            <h2>Why Jobtrackr?</h2>
            <p>
              We chose to create this web app as many of us in this class are applying to jobs, interviewing and constantly improving our professional accolades, we noticed we don't really have a hub that we store all that information on. We wanted to create an app that we would actually use, and that would find useful, and we believe that a hub to track all your professional pursuits is something that most students/graduates lack, and would add some much needed organization in such a cluttered process.
            </p>
          </div>
        </div>
      </section>
    </div>
    <footer className="footer">
      <p>Author: Info 340 AB2</p>
      <p>© 2022 iSchool</p>
    </footer>
  </main>
</div>
);
}

