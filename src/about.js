import React from 'react';

export default function About() {
  return (
<div>
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

